import fs from 'fs'
import path from 'path'
import mcData from 'minecraft-data'
import { version as mcDataVersion } from 'minecraft-data/package.json'
import assert from 'assert'

type BaseProtocolType = {
  type: string
  mappings?: Record<string, string>
  countType?: string
  fields?: Record<string, any>
  compareTo?: string
  default?: string
}

type BitField = {
  name: string
  size: number
  signed: boolean
}

type ContainerType = [string, PacketProp[]]

type ProtocolType = BaseProtocolType | ContainerType

type PacketProp = {
  name?: string
  type: string | [string, BaseProtocolType | ContainerType]
  anon?: boolean
}

type VersionChanges = {
  new: [string, string][]
  removed: string[]
  changed: [string, string][]
  same: string[]
}

function isContainerType(type: ProtocolType): type is ContainerType {
  return Array.isArray(type)
}

function isBaseProtocolType(type: BaseProtocolType | ContainerType): type is BaseProtocolType {
  return !Array.isArray(type) && typeof type === 'object'
}

function isPacketProp(value: unknown): value is PacketProp {
  return typeof value === 'object' && value !== null && 'type' in value
}

function generateTypeForProp(prop: PacketProp, parentFields?: Record<string, PacketProp>): string {
  if (typeof prop.type === 'string') {
    const posType = '{ x: number, y: number, z: number }'
    const typeTs = {
      byte: 'number',
      varint: 'number',
      int: 'number',
      float: 'number',
      double: 'number',
      long: 'bigint',
      short: 'number',
      string: 'string',
      bool: 'boolean',
      position: posType,
      u8: 'number',
      u16: 'number',
      u32: 'number',
      u64: 'bigint',
      i8: 'number',
      i16: 'number',
      i32: 'number',
      i64: 'bigint',
      f32: 'number',
      f64: 'number',
      UUID: 'string',
      void: 'undefined'
    }[prop.type] ?? 'any'
    return typeTs
  }

  const [type, typeInfo] = prop.type

  switch (type) {
    case 'container': {
      if (!Array.isArray(typeInfo)) return 'Record<string, never>'
      const containerProps = typeInfo
        .filter(isPacketProp)
        .map(_p => {
          const p = _p as unknown as PacketProp
          if (p.anon) {
            return generateTypeForProp(p, typeInfo.reduce((acc, curr) => {
              if (isPacketProp(curr) && curr.name) {
                acc[curr.name] = curr
              }
              return acc
            }, {} as Record<string, PacketProp>))
          }
          if (!p.name) return ''
          return `    ${p.name}: ${generateTypeForProp(p, typeInfo.reduce((acc, curr) => {
            if (isPacketProp(curr) && curr.name) {
              acc[curr.name] = curr
            }
            return acc
          }, {} as Record<string, PacketProp>))};`
        })
        .filter(Boolean)
      return containerProps.length ? `{\n${containerProps.join('\n')}\n  }` : 'Record<string, never>'
    }

    case 'array': {
      if (!isBaseProtocolType(typeInfo)) return 'any[]'
      const elementType = generateTypeForProp({ name: '', type: typeInfo.type })
      // Ensure we have valid TypeScript syntax for array elements
      if (elementType.trim() === 'any') {
        return 'any[]'
      }
      return `${elementType}[]`
    }

    case 'mapper': {
      if (!isBaseProtocolType(typeInfo)) return 'string'
      const mappings = Object.values(typeInfo.mappings || {})
      return mappings.map(v => `'${v}'`).join(' | ') || 'string'
    }

    case 'switch': {
      if (!isBaseProtocolType(typeInfo)) return 'any'
      const fields = typeInfo.fields || {}
      const compareTo = typeInfo.compareTo || 'type'

      // If compareTo references a parent field (e.g., "mouse" in use_entity packet)
      if (compareTo.startsWith('../') || !compareTo.includes('/')) {
        const fieldName = compareTo.startsWith('../') ? compareTo.substring(3) : compareTo
        if (!parentFields || !(fieldName in parentFields)) {
          return 'any'
        }

        // Generate a union of possible types based on field values
        const types = Object.entries(fields).map(([key, value]) => {
          const caseType = generateTypeForProp({ name: '', type: value })
          return caseType === 'undefined' ? 'undefined' : caseType
        })

        // Add default case if specified
        if (typeInfo.default) {
          const defaultType = generateTypeForProp({ name: '', type: typeInfo.default })
          types.push(defaultType)
        }

        // Filter out duplicate types and join with '|'
        const uniqueTypes = [...new Set(types)]
        return uniqueTypes.join(' | ') || 'undefined'
      }

      // For switch types that define a discriminated union (like player_info packet)
      const unionTypes = Object.entries(fields).map(([key, value]) => {
        const caseType = generateTypeForProp({ name: '', type: value })
        if (caseType === 'undefined') {
          return `{ ${compareTo}: '${key}' }`
        }
        return `{ ${compareTo}: '${key}'; ${caseType.replace(/^\{\s*|\s*\}$/g, '')} }`
      })

      return unionTypes.join(' | ')
    }

    case 'option': {
      if (!isBaseProtocolType(typeInfo)) return 'any | null'
      const optionType = generateTypeForProp({ name: '', type: typeInfo.type })
      return `${optionType} | null`
    }

    default:
      // For unknown types, return 'any' to ensure valid TypeScript
      return 'any'
  }
}

function processPackets(protocol: any, direction: 'toServer' | 'toClient'): [string, string][] {
  return Object.entries(protocol.play[direction].types as Record<string, [string, PacketProp[]]>)
    .map(([name, [type, props]]) => {
      if (!name.startsWith('packet_')) return undefined
      name = name.replace(/^packet_/, '')
      if (type !== 'container') {
        console.warn('not container', name, type)
        return undefined
      }
      const mapped = props.map((prop) => {
        if (!prop.name && !prop.anon) return undefined
        return `    ${prop.name || 'data'}: ${generateTypeForProp(prop, props.reduce((acc, curr) => {
          if (isPacketProp(curr) && curr.name) {
            acc[curr.name] = curr
          }
          return acc
        }, {} as Record<string, PacketProp>))};`
      }).filter(Boolean)
      return [name, mapped.join('\n')]
    })
    .filter(Boolean) as [string, string][]
}

function generateVersionDiff(currentPackets: [string, string][], previousPackets: [string, string][] | null): VersionChanges {
  const mergedData: VersionChanges = {
    new: [],
    removed: [],
    changed: [],
    same: []
  }

  if (previousPackets) {
    currentPackets.forEach(([name, props]) => {
      const previous = previousPackets.find(([n]) => n === name)
      if (!previous) {
        return mergedData.new.push([name, props])
      }
      const dataChanged = previous[1] !== props
      if (dataChanged) {
        mergedData.changed.push([name, props])
      } else {
        mergedData.same.push(name)
      }
    })
    previousPackets.forEach(([name]) => {
      const current = currentPackets.find(([n]) => n === name)
      if (!current) {
        mergedData.removed.push(name)
      }
    })
  } else {
    mergedData.new = currentPackets
  }

  return mergedData
}

function generateInterface(name: string, allPacketsUnions: Record<string, [string, string][]>, removedPackets: Record<string, string>): string {
  let output = `export interface ${name} {\n`

  for (const [packet, data] of Object.entries(allPacketsUnions)) {
    const typeUnion = data.map(([version, props]) => {
      const jsdoc = `/** ${version} */`
      return `${jsdoc} {\n${props}\n  }`
    }).join(' | ')
    if (removedPackets[packet]) {
      output += `  /** Removed in ${removedPackets[packet]} */\n`
    }
    output += `  ${packet}: ${typeUnion};\n`
  }

  output += '}\n\n'
  return output
}

// Test cases
function runTests() {
  // Test simple switch with parent field reference
  const useEntityPacket: any = {
    name: 'use_entity',
    type: [
      "container",
      [
        {
          "name": "target",
          "type": "varint"
        },
        {
          "name": "mouse",
          "type": "varint"
        },
        {
          "name": "x",
          "type": [
            "switch",
            {
              "compareTo": "mouse",
              "fields": {
                "2": "f32"
              },
              "default": "void"
            }
          ]
        },
        {
          "name": "y",
          "type": [
            "switch",
            {
              "compareTo": "mouse",
              "fields": {
                "2": "f32"
              },
              "default": "void"
            }
          ]
        },
        {
          "name": "z",
          "type": [
            "switch",
            {
              "compareTo": "mouse",
              "fields": {
                "2": "f32"
              },
              "default": "void"
            }
          ]
        },
        {
          "name": "hand",
          "type": [
            "switch",
            {
              "compareTo": "mouse",
              "fields": {
                "0": "varint",
                "2": "varint"
              },
              "default": "void"
            }
          ]
        },
        {
          "name": "sneaking",
          "type": "bool"
        }
      ]
    ]
  }

  const shouldContain = (type: string, expected: string) => {
    if (!type.includes(expected)) {
      throw new Error(`${type} should contain ${expected}`)
    }
  }

  const useEntityType = generateTypeForProp(useEntityPacket)
  shouldContain(useEntityType, 'number | undefined')

  // Test discriminated union (player_info packet)
  const playerInfoPacket: any = {
    name: 'player_info',
    type: [
      "container",
      [
        {
          "name": "action",
          "type": [
            "mapper",
            {
              "type": "varint",
              "mappings": {
                "0": "add_player",
                "1": "update_game_mode",
                "2": "update_latency",
                "3": "update_display_name",
                "4": "remove_player"
              }
            }
          ]
        },
        {
          "name": "data",
          "type": [
            "array",
            {
              "countType": "varint",
              "type": [
                "container",
                [
                  {
                    "name": "uuid",
                    "type": "UUID"
                  },
                  {
                    "anon": true,
                    "type": [
                      "switch",
                      {
                        "compareTo": "../action",
                        "fields": {
                          "add_player": [
                            "container",
                            [
                              {
                                "name": "name",
                                "type": "string"
                              },
                              {
                                "name": "properties",
                                "type": [
                                  "array",
                                  {
                                    "countType": "varint",
                                    "type": [
                                      "container",
                                      [
                                        {
                                          "name": "name",
                                          "type": "string"
                                        },
                                        {
                                          "name": "value",
                                          "type": "string"
                                        },
                                        {
                                          "name": "signature",
                                          "type": [
                                            "option",
                                            "string"
                                          ]
                                        }
                                      ]
                                    ]
                                  }
                                ]
                              },
                              {
                                "name": "gamemode",
                                "type": "varint"
                              },
                              {
                                "name": "ping",
                                "type": "varint"
                              },
                              {
                                "name": "displayName",
                                "type": [
                                  "option",
                                  "string"
                                ]
                              }
                            ]
                          ],
                          "update_game_mode": [
                            "container",
                            [
                              {
                                "name": "gamemode",
                                "type": "varint"
                              }
                            ]
                          ],
                          "update_latency": [
                            "container",
                            [
                              {
                                "name": "ping",
                                "type": "varint"
                              }
                            ]
                          ],
                          "update_display_name": [
                            "container",
                            [
                              {
                                "name": "displayName",
                                "type": [
                                  "option",
                                  "string"
                                ]
                              }
                            ]
                          ],
                          "remove_player": "void"
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          ]
        }
      ]
    ]
  }

  const playerInfoType = generateTypeForProp(playerInfoPacket)
  shouldContain(playerInfoType, 'uuid:')
  shouldContain(playerInfoType, 'action:')
  shouldContain(playerInfoType, 'add_player')
  shouldContain(playerInfoType, 'update_game_mode')
}

function main() {
  // Run tests first
  runTests()

  let output = '/**\n'
  output += ` * Generated from minecraft-data v${mcDataVersion}\n`
  output += ' * DO NOT EDIT\n'
  output += ' */\n\n'

  const directions: ['toServer', 'toClient'] = ['toServer', 'toClient']
  const interfaceNames = {
    toServer: 'ClientWriteMap',
    toClient: 'ClientOnMap'
  }

  for (const direction of directions) {
    let previousPackets: [string, string][] | null = null
    const allPackets: Record<string, VersionChanges> = {}
    const allPacketsUnions: Record<string, [string, string][]> = {}
    const removedPackets: Record<string, string> = {}

    // Process each version
    for (const version of mcData.supportedVersions.pc) {
      if (version.includes('w') || version.includes('c') || version.includes('pre')) continue
      const protocol = mcData(version).protocol

      const packets = processPackets(protocol, direction)
      const mergedData = generateVersionDiff(packets, previousPackets)

      if (mergedData.new.length || mergedData.removed.length || mergedData.changed.length) {
        allPackets[version] = mergedData
      }

      previousPackets = packets
    }

    // Build unions
    for (const [version, { new: newPackets, removed, changed }] of Object.entries(allPackets)) {
      Object.assign(allPacketsUnions, Object.fromEntries(newPackets.map(([name, props]) => [name, [[version, props]]])))
      for (const packet of changed) {
        allPacketsUnions[packet[0]]!.push([version, packet[1]])
      }
      for (const packet of removed) {
        removedPackets[packet] = version
      }
    }

    output += generateInterface(interfaceNames[direction], allPacketsUnions, removedPackets)
  }

  fs.writeFileSync(path.resolve(__dirname, '../src/protocol.generated.ts'), output)
}

main()
