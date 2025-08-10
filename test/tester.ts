import { createSerializer, createDeserializer } from 'minecraft-protocol'
import { ClientPacketBridger, ServerPacketBridger } from '../src'
import supportedVersions from './supportedVersions.mjs'

export const testVersions = (cb: (server: ServerPacketBridger, client: ClientPacketBridger) => void, versions = supportedVersions) => {
    for (const version of versions) {
        const ser = createSerializer({
            customPackets: {},
            version,
            isServer: true,
            state: 'play' as any,
        })
        const deser = createDeserializer({
            customPackets: {},
            version,
            isServer: true,
            state: 'play' as any,
        })

        let buffer
        const serverBridger = new ServerPacketBridger(version, (name, data) => {
            // console.log(name, data)
            buffer = ser.createPacketBuffer({
                name,
                params: data
            })
        })
        const clientBridger = new ClientPacketBridger(version, (name, data) => {
            // console.log(name, data)
            buffer = ser.createPacketBuffer({
                name,
                params: data
            })
        })

        cb(serverBridger, clientBridger)
    }
}

// buffer = ser.createPacketBuffer({
//     name: 'player_info',
//     params: {
//         action: 'add_player',
//         data: {
//                 UUID: '123',
//                 uuid: '123',
//                 player: 'test',
//                 gamemode: 0,
//                 ping: 0
//             }

//     }
// })
