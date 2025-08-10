import { ServerPacketBridger } from '../src/index'
import { testVersions } from './tester'

// Mock write function for demonstration
const mockWritePacket = (name: string, data: any) => {
    console.log(`[${new Date().toISOString()}] Writing packet: ${name}`, JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value, 2))
}

// const modernBridger = new ServerPacketBridger('1.21.5', mockWritePacket)

testVersions(({server: modernBridger}) => {

    // Player info example
    modernBridger.player_info({
        action: {
            add_player: true,
            initialize_chat: true,
            update_display_name: true,
            update_game_mode: true,
            update_hat: true,
            update_latency: true,
            update_list_order: true,
            update_listed: true
        },
        data: [
            {
                uuid: "b90c752c-803b-3b12-b52c-26d63a050e92",
                player: {
                    name: "hiall3",
                    properties: []
                },
                gamemode: 1,
                listed: 1,
                latency: 0,
                listPriority: 0,
                showHat: false
            }
        ]
    })

    // Login example
    // modernBridger.login({
    //     entityId: 123,
    //     gameMode: 1,
    //     dimension: 0,
    //     maxPlayers: 20,
    //     worldName: "minecraft:overworld",
    //     isHardcore: false
    // })

    // Chat example
    modernBridger.chat({
        message: { text: "Welcome to the server!", color: "green" },
        position: 0
    })

    // Position example
    modernBridger.position({
        x: 100.5,
        y: 64.0,
        z: 200.5,
        yaw: 90.0,
        pitch: 0.0,
        teleportId: 1
    })

    // Boss bar example
    modernBridger.boss_bar({
        entityUUID: "12345678-1234-1234-1234-123456789abc",
        action: 0,
        title: { text: "Boss Fight!", color: "red" },
        health: 0.75,
        color: 4,
        dividers: 0,
        flags: 0
    })

    // Sound effect example
    modernBridger.sound_effect({
        soundId: 100,
        soundCategory: 0,
        x: 100,
        y: 64,
        z: 200,
        volume: 1.0,
        pitch: 1.0
    })

    // Title example
    modernBridger.title({
        action: 0,
        text: { text: "Big Title!", color: "gold", bold: true },
        fadeIn: 20,
        stay: 60,
        fadeOut: 20
    })

}, ['1.18.2'])
