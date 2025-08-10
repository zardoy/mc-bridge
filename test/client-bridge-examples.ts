import { ClientPacketBridger } from '../src/index'

// Mock write function for demonstration
const mockWritePacket = (name: string, data: any) => {
    console.log(`[${new Date().toISOString()}] Writing client packet: ${name}`, JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value, 2))
}

const oldClientBridger = new ClientPacketBridger('1.7', mockWritePacket)

// Keep alive example
oldClientBridger.keep_alive({ keepAliveId: 12345 })

// Movement examples
oldClientBridger.position({ x: 100.5, y: 64.0, z: 200.5 })
oldClientBridger.look({ yaw: 90.0, pitch: 0.0 })
oldClientBridger.position_look({ x: 100.5, y: 64.0, z: 200.5, yaw: 90.0, pitch: 0.0 })
oldClientBridger.flying({ onGround: true })

// Block actions
oldClientBridger.block_dig({
    status: 0,
    location: { x: 100, y: 64, z: 200 },
    face: 1
})

oldClientBridger.block_place({
    location: { x: 100, y: 64, z: 200 },
    direction: 1,
    cursorX: 8,
    cursorY: 8,
    cursorZ: 8
})

// Item and interaction
oldClientBridger.held_item_slot({ slotId: 0 })
oldClientBridger.arm_animation({ hand: 0 })

// Entity interactions
oldClientBridger.entity_action({
    entityId: 123,
    actionId: 1,
    jumpBoost: 0
})

oldClientBridger.use_entity({
    target: 456,
    mouse: 0
})
