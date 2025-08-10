export const versionToNumber = (ver: string) => {
    const [x, y = '0', z = '0'] = ver.split('.')
    return +`${x!.padStart(2, '0')}${y!.padStart(2, '0')}${z!.padStart(2, '0')}`
}

// RULES:
// 1. Reduntant fields are not necessary to remove
// 2. No need for bigint normalization, can use number like no difference

type WriteFunction = (name: string, data: any) => void
type AnonymousNbt = any

export class BasePacketBridger {
    private _version: string
    public get version(): string {
        return this._version
    }
    public set version(version: string) {
        this._version = version
        this.versionNumber = versionToNumber(version)
    }
    private versionNumber: number

    constructor(version: string) {
        this._version = version
        this.versionNumber = versionToNumber(version)
    }

    gt(compareVersion: string): boolean {
        return this.versionNumber > versionToNumber(compareVersion)
    }

    gte(compareVersion: string): boolean {
        return this.versionNumber >= versionToNumber(compareVersion)
    }

    lt(compareVersion: string): boolean {
        return this.versionNumber < versionToNumber(compareVersion)
    }

    lte(compareVersion: string): boolean {
        return this.versionNumber <= versionToNumber(compareVersion)
    }

    processNbt(nbt: AnonymousNbt) {
        return nbt
    }
}

/**
 * Server packet bridger for normalizing outgoing packets to clients
 */
export class ServerPacketBridger extends BasePacketBridger {
    private writePacket: WriteFunction

    constructor(version: string, writePacket: WriteFunction) {
        super(version)
        this.writePacket = writePacket
    }

    /**
     * Updates TAB list on the client
     */
    player_info(data: {
        action: {
            add_player?: boolean
            initialize_chat?: boolean
            update_game_mode?: boolean
            update_listed?: boolean
            update_latency?: boolean
            update_display_name?: boolean
            update_hat?: boolean
            update_list_order?: boolean
            remove_player?: boolean
        }
        data: Array<{
            uuid: string
            player?: {
                name: string
                properties: any[]
            }
            chatSession?: any
            gamemode?: number
            listed?: number
            latency?: number
            displayName?: AnonymousNbt
            listPriority?: number
            showHat?: boolean
        }>
    }) {
        if (this.lt('1.8')) {
            // 1.7 uses separate packets for each player action
            for (const playerData of data.data) {
                if (data.action.add_player && playerData.player) {
                    this.writePacket('player_info', {
                        playerName: playerData.player.name,
                        online: true,
                        ping: playerData.latency || 0
                    })
                }
                // Note: 1.7 doesn't support remove_player, update_display_name, etc.
                // Server implementation should handle these separately
            }
        } else if (this.lt('1.19.3')) {
            // 1.8 - 1.19.2: Action-based system with limited actions
            const actions = Object.keys(data.action).filter(key => data.action[key as keyof typeof data.action])

            for (const actionName of actions) {
                if (actionName === 'initialize_chat' || actionName === 'update_hat' || actionName === 'update_list_order') {
                    // These actions don't exist in older versions
                    continue
                }

                this.writePacket('player_info', {
                    action: actionName,
                    data: data.data.map(player => ({
                        uuid: player.uuid,
                        // Include relevant data based on action
                        ...(actionName === 'add_player' && player.player ? { name: player.player.name, properties: player.player.properties, gamemode: player.gamemode, listed: player.listed, latency: player.latency, displayName: this.processNbt(player.displayName), listPriority: player.listPriority, showHat: player.showHat } : {}),
                        ...(actionName === 'update_game_mode' && player.gamemode !== undefined ? { gamemode: player.gamemode } : {}),
                        ...(actionName === 'update_latency' && player.latency !== undefined ? { ping: player.latency, latency: player.latency } : {}),
                        ...(actionName === 'update_display_name' && player.displayName !== undefined ? { displayName: this.processNbt(player.displayName) } : {}),
                        ...(actionName === 'update_listed' && player.listed !== undefined ? { listed: player.listed } : {})
                    }))
                })
            }
        } else {
            // 1.19.3+: Modern bitflag system with all features
            const actionFlags: any = {}
            Object.keys(data.action).forEach(key => {
                if (data.action[key as keyof typeof data.action]) {
                    actionFlags[key] = true
                }
            })

            const packetData: any = {
                action: actionFlags,
                data: data.data.map(player => ({
                    uuid: player.uuid,
                    player: player.player,
                    chatSession: player.chatSession,
                    gamemode: player.gamemode,
                    listed: player.listed,
                    latency: player.latency,
                    displayName: this.processNbt(player.displayName),
                    ...(this.gte('1.21.3') ? { listPriority: player.listPriority } : {}),
                    ...(this.gte('1.21.4') ? { showHat: player.showHat } : {})
                }))
            }

            this.writePacket('player_info', packetData)
        }
    }

    /**
     * Login packet - initial world join
     */
    login(data: {
        entityId: number
        gameMode: number
        dimension: number | string | any
        difficulty?: number
        maxPlayers: number
        levelType?: string
        worldNames?: string[]
        dimensionCodec?: any
        worldName?: string
        hashedSeed?: number
        viewDistance?: number
        simulationDistance?: number
        reducedDebugInfo?: boolean
        enableRespawnScreen?: boolean
        isDebug?: boolean
        isFlat?: boolean
        death?: any
        portalCooldown?: number
        isHardcore?: boolean
        previousGameMode?: number
        worldType?: string
        doLimitedCrafting?: boolean
    }) {
        const packetData: any = {
            entityId: data.entityId,
            gameMode: data.gameMode,
            dimension: data.dimension,
            maxPlayers: data.maxPlayers,
            ...(data.difficulty !== undefined ? { difficulty: data.difficulty } : {}),
            ...(data.levelType ? { levelType: data.levelType } : {}),
            ...(this.gte('1.8') ? { reducedDebugInfo: data.reducedDebugInfo ?? false } : {}),
            ...(this.gte('1.14') ? { viewDistance: data.viewDistance ?? 10 } : {}),
            ...(this.gte('1.15') ? {
                hashedSeed: data.hashedSeed ?? 0,
                enableRespawnScreen: data.enableRespawnScreen ?? true
            } : {}),
            ...(this.gte('1.16') ? {
                previousGameMode: data.previousGameMode ?? -1,
                worldNames: data.worldNames ?? ['minecraft:overworld'],
                dimensionCodec: this.processNbt(data.dimensionCodec),
                worldName: data.worldName ?? 'minecraft:overworld',
                isDebug: data.isDebug ?? false,
                isFlat: data.isFlat ?? false
            } : {}),
            ...(this.gte('1.16.2') ? { isHardcore: data.isHardcore ?? false } : {}),
            ...(this.gte('1.18') ? { simulationDistance: data.simulationDistance ?? 10 } : {}),
            ...(this.gte('1.19') ? {
                worldType: data.worldType ?? 'minecraft:overworld',
                death: data.death ?? null
            } : {}),
            ...(this.gte('1.20') ? { portalCooldown: data.portalCooldown ?? 0 } : {}),
            ...(this.gte('1.20.2') ? { doLimitedCrafting: data.doLimitedCrafting ?? false } : {})
        }

        this.writePacket('login', packetData)
    }

    /**
     * Chat message to all players
     */
    chat(data: {
        message: string | AnonymousNbt
        position?: number
        sender?: string
        senderTeam?: string
    }) {
        if (this.gte('1.19.3')) {
            // Modern signed chat system
            this.writePacket('system_chat', {
                content: this.processNbt(data.message),
                overlay: data.position === 2
            })
        } else if (this.gte('1.19')) {
            // 1.19-1.19.2 signed chat
            this.writePacket('profileless_chat', {
                message: this.processNbt(data.message),
                type: 0,
                name: this.processNbt(data.sender ?? 'Server'),
                target: null
            })
        } else {
            // Legacy chat
            this.writePacket('chat', {
                message: typeof data.message === 'string' ? data.message : JSON.stringify(data.message),
                position: data.position ?? 0,
                ...(this.gte('1.16') ? { sender: data.sender ?? '00000000-0000-0000-0000-000000000000' } : {}),
                ...(this.gte('1.19') ? { senderTeam: data.senderTeam } : {})
            })
        }
    }

    /**
     * Player position/teleport
     */
    position(data: {
        x: number
        y: number
        z: number
        yaw: number
        pitch: number
        flags?: any
        teleportId?: number
        dismountVehicle?: boolean
        dx?: number
        dy?: number
        dz?: number
    }) {
        if (this.lt('1.8')) {
            this.writePacket('position', {
                x: data.x,
                y: data.y,
                z: data.z,
                yaw: data.yaw,
                pitch: data.pitch,
                onGround: true
            })
        } else if (this.lt('1.9')) {
            this.writePacket('position', {
                x: data.x,
                y: data.y,
                z: data.z,
                yaw: data.yaw,
                pitch: data.pitch,
                flags: data.flags ?? 0
            })
        } else if (this.lt('1.21.3')) {
            this.writePacket('position', {
                x: data.x,
                y: data.y,
                z: data.z,
                yaw: data.yaw,
                pitch: data.pitch,
                flags: data.flags ?? 0,
                teleportId: data.teleportId ?? 1,
                ...(this.gte('1.17') && this.lt('1.19.4') ? { dismountVehicle: data.dismountVehicle ?? false } : {})
            })
        } else {
            // 1.21.3+ format with velocity
            this.writePacket('position', {
                teleportId: data.teleportId ?? 1,
                x: data.x,
                y: data.y,
                z: data.z,
                dx: data.dx ?? 0,
                dy: data.dy ?? 0,
                dz: data.dz ?? 0,
                yaw: data.yaw,
                pitch: data.pitch,
                flags: data.flags ?? {}
            })
        }
    }

    /**
     * Boss bar display
     */
    boss_bar(data: {
        entityUUID: string
        action: number
        title?: string | AnonymousNbt
        health?: number
        color?: number
        dividers?: number
        flags?: number
    }) {
        if (this.gte('1.9')) {
            this.writePacket('boss_bar', {
                entityUUID: data.entityUUID,
                action: data.action,
                title: data.title ? (this.gte('1.20.3') ? this.processNbt(data.title) : data.title) : undefined,
                health: data.health,
                color: data.color,
                dividers: data.dividers,
                flags: data.flags
            })
        }
        // No boss bar support in pre-1.9
    }

    /**
     * Sound effect playback
     */
    sound_effect(data: {
        soundId: number
        sound?: any
        soundCategory: number | any
        x: number
        y: number
        z: number
        volume: number
        pitch: number
        seed?: number
    }) {
        if (this.gte('1.19.3')) {
            this.writePacket('sound_effect', {
                sound: data.sound ?? data.soundId,
                soundCategory: data.soundCategory,
                x: data.x,
                y: data.y,
                z: data.z,
                volume: data.volume,
                pitch: data.pitch,
                seed: data.seed ?? 0
            })
        } else if (this.gte('1.19')) {
            this.writePacket('sound_effect', {
                soundId: data.soundId,
                soundCategory: data.soundCategory,
                x: data.x,
                y: data.y,
                z: data.z,
                volume: data.volume,
                pitch: data.pitch,
                seed: data.seed ?? 0
            })
        } else if (this.gte('1.9')) {
            this.writePacket('sound_effect', {
                soundId: data.soundId,
                soundCategory: data.soundCategory,
                x: data.x,
                y: data.y,
                z: data.z,
                volume: data.volume,
                pitch: data.pitch
            })
        }
    }

    /**
     * Title display
     */
    title(data: {
        action: number
        text?: string | AnonymousNbt
        fadeIn?: number
        stay?: number
        fadeOut?: number
    }) {
        if (this.gte('1.8')) {
            this.writePacket('title', {
                action: data.action,
                text: data.text ? (this.gte('1.20.3') ? this.processNbt(data.text) : data.text) : undefined,
                fadeIn: data.fadeIn,
                stay: data.stay,
                fadeOut: data.fadeOut
            })
        }
    }
}

/**
 * Client packet bridger for normalizing incoming packets from server
 */
export class ClientPacketBridger extends BasePacketBridger {
    private writePacket: WriteFunction

    constructor(version: string, writePacket: WriteFunction) {
        super(version)
        this.writePacket = writePacket
    }

    /**
     * Keep alive packet - maintains connection
     */
    keep_alive(data: { keepAliveId: number | bigint }) {
        this.writePacket('keep_alive', { keepAliveId: BigInt(data.keepAliveId) })
    }

    /**
     * @deprecated Use chat method of minecraft-protocol instead
     */
    chat(data: { message: string }) {
        throw new Error('Use chat method of minecraft-protocol instead')
    }

    /**
     * @deprecated Use chat method of minecraft-protocol instead
     */
    chat_preview(data: { message: string }) {
        throw new Error('Use chat method of minecraft-protocol instead')
    }

    /**
     * @deprecated Use chat method of minecraft-protocol instead
     */
    chat_session_update(data: { sessionUUID: string, expireTime: bigint, publicKey: any, signature: any }) {
        throw new Error('Use chat method of minecraft-protocol instead')
    }

    /**
     * @deprecated Use chat method of minecraft-protocol instead
     */
    chat_message(data: { sessionUUID: string, expireTime: bigint, publicKey: any, signature: any }) {
        throw new Error('Use chat method of minecraft-protocol instead')
    }

    /**
     * @deprecated Use chat method of minecraft-protocol instead
     */
    chat_message_acknowledgement(data: { sessionUUID: string, expireTime: bigint, publicKey: any, signature: any }) {
        throw new Error('Use chat method of minecraft-protocol instead')
    }

    /**
     * @deprecated Use chat method of minecraft-protocol instead
     */
         chat_command(data: { sessionUUID: string, expireTime: bigint, publicKey: any, signature: any }) {
         throw new Error('Use chat method of minecraft-protocol instead')
     }

     /**
      * Player movement - position only
      */
     position(data: {
         x: number
         y: number
         z: number
         stance?: number
         onGround?: boolean
         flags?: any
     }) {
         if (this.lt('1.8')) {
             this.writePacket('position', {
                 x: data.x,
                 stance: data.stance ?? data.y + 1.62,
                 y: data.y,
                 z: data.z,
                 onGround: data.onGround ?? false
             })
         } else if (this.lt('1.21.3')) {
             this.writePacket('position', {
                 x: data.x,
                 y: data.y,
                 z: data.z,
                 onGround: data.onGround ?? false
             })
         } else {
             this.writePacket('position', {
                 x: data.x,
                 y: data.y,
                 z: data.z,
                 flags: data.flags ?? {}
             })
         }
     }

     /**
      * Player look rotation
      */
     look(data: {
         yaw: number
         pitch: number
         onGround?: boolean
         flags?: any
     }) {
         if (this.lt('1.21.3')) {
             this.writePacket('look', {
                 yaw: data.yaw,
                 pitch: data.pitch,
                 onGround: data.onGround ?? false
             })
         } else {
             this.writePacket('look', {
                 yaw: data.yaw,
                 pitch: data.pitch,
                 flags: data.flags ?? {}
             })
         }
     }

     /**
      * Player position and look combined
      */
     position_look(data: {
         x: number
         y: number
         z: number
         yaw: number
         pitch: number
         stance?: number
         onGround?: boolean
         flags?: any
     }) {
         if (this.lt('1.8')) {
             this.writePacket('position_look', {
                 x: data.x,
                 stance: data.stance ?? data.y + 1.62,
                 y: data.y,
                 z: data.z,
                 yaw: data.yaw,
                 pitch: data.pitch,
                 onGround: data.onGround ?? false
             })
         } else if (this.lt('1.21.3')) {
             this.writePacket('position_look', {
                 x: data.x,
                 y: data.y,
                 z: data.z,
                 yaw: data.yaw,
                 pitch: data.pitch,
                 onGround: data.onGround ?? false
             })
         } else {
             this.writePacket('position_look', {
                 x: data.x,
                 y: data.y,
                 z: data.z,
                 yaw: data.yaw,
                 pitch: data.pitch,
                 flags: data.flags ?? {}
             })
         }
     }

     /**
      * Flying state
      */
     flying(data: {
         onGround?: boolean
         flags?: any
     }) {
         if (this.lt('1.21.3')) {
             this.writePacket('flying', {
                 onGround: data.onGround ?? false
             })
         } else {
             this.writePacket('flying', {
                 flags: data.flags ?? {}
             })
         }
     }

     /**
      * Block digging action
      */
     block_dig(data: {
         status: number
         location: { x: number, y: number, z: number } | any
         face: number
         sequence?: number
     }) {
         const packetData: any = {
             status: data.status,
             location: data.location,
             face: data.face
         }

         if (this.gte('1.19')) {
             packetData.sequence = data.sequence ?? 0
         }

         this.writePacket('block_dig', packetData)
     }

     /**
      * Block placement
      */
     block_place(data: {
         location: { x: number, y: number, z: number } | any
         direction: number
         heldItem?: any
         hand?: number
         cursorX: number
         cursorY: number
         cursorZ: number
         insideBlock?: boolean
         sequence?: number
         worldBorderHit?: boolean
     }) {
         if (this.lt('1.9')) {
             this.writePacket('block_place', {
                 location: data.location,
                 direction: data.direction,
                 heldItem: data.heldItem ?? null,
                 cursorX: data.cursorX,
                 cursorY: data.cursorY,
                 cursorZ: data.cursorZ
             })
         } else {
             const packetData: any = {
                 location: data.location,
                 direction: data.direction,
                 hand: data.hand ?? 0,
                 cursorX: data.cursorX,
                 cursorY: data.cursorY,
                 cursorZ: data.cursorZ
             }

             if (this.gte('1.14')) {
                 packetData.insideBlock = data.insideBlock ?? false
             }
             if (this.gte('1.19')) {
                 packetData.sequence = data.sequence ?? 0
             }
             if (this.gte('1.21.3')) {
                 packetData.worldBorderHit = data.worldBorderHit ?? false
             }

             this.writePacket('block_place', packetData)
         }
     }

     /**
      * Held item slot selection
      */
     held_item_slot(data: { slotId: number }) {
         this.writePacket('held_item_slot', { slotId: data.slotId })
     }

     /**
      * Arm animation (swing)
      */
     arm_animation(data: {
         entityId?: number
         animation?: number
         hand?: number
     }) {
         if (this.lt('1.8')) {
             this.writePacket('arm_animation', {
                 entityId: data.entityId ?? 0,
                 animation: data.animation ?? 1
             })
         } else if (this.lt('1.9')) {
             this.writePacket('arm_animation', {})
         } else {
             this.writePacket('arm_animation', {
                 hand: data.hand ?? 0
             })
         }
     }

     /**
      * Entity actions (sneak, sprint, etc.)
      */
     entity_action(data: {
         entityId: number
         actionId: number
         jumpBoost?: number
     }) {
         this.writePacket('entity_action', {
             entityId: data.entityId,
             actionId: data.actionId,
             jumpBoost: data.jumpBoost ?? 0
         })
     }

     /**
      * Use entity interaction
      */
     use_entity(data: {
         target: number
         mouse: number
         x?: number
         y?: number
         z?: number
         hand?: number
         sneaking?: boolean
     }) {
         const packetData: any = {
             target: data.target,
             mouse: data.mouse,
             x: data.x,
             y: data.y,
             z: data.z
         }

         if (this.gte('1.9')) {
             packetData.hand = data.hand
         }
         if (this.gte('1.16')) {
             packetData.sneaking = data.sneaking ?? false
         }

         this.writePacket('use_entity', packetData)
     }
}
