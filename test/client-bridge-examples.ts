import { ClientPacketBridger } from '../src/index'
import { testVersions } from './tester'

// Mock write function for demonstration
const mockWritePacket = (name: string, data: any) => {
    console.log(`[${new Date().toISOString()}] Writing client packet: ${name}`, JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value, 2))
}

testVersions(({client: clientBridger, deserializer: deser}) => {

// Keep alive example
clientBridger.keep_alive({ keepAliveId: 12345 })

// Movement examples
clientBridger.position({ x: 100.5, y: 64.0, z: 200.5 })
clientBridger.look({ yaw: 90.0, pitch: 0.0 })
clientBridger.position_look({ x: 100.5, y: 64.0, z: 200.5, yaw: 90.0, pitch: 0.0 })
clientBridger.flying({ onGround: true })

// Block actions
clientBridger.block_dig({
    status: 0,
    location: { x: 100, y: 64, z: 200 },
    face: 1
})

clientBridger.block_place({
    location: { x: 100, y: 64, z: 200 },
    direction: 1,
    cursorX: 8,
    cursorY: 8,
    cursorZ: 8
})

// Item and interaction
clientBridger.held_item_slot({ slotId: 0 })
clientBridger.arm_animation({ hand: 0 })

// Entity interactions
clientBridger.entity_action({
    entityId: 123,
    actionId: 1,
    jumpBoost: 0
})

clientBridger.use_entity({
    target: 456,
    mouse: 0
})
}, ['1.18.2'])
