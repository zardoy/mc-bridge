import { createSerializer, createDeserializer } from 'minecraft-protocol'
import { ClientPacketBridger, ServerPacketBridger } from '../src'
import supportedVersions from './supportedVersions.mjs'

export const testVersions = (cb: (data: { server: ServerPacketBridger, client: ClientPacketBridger, getBuffer: () => Buffer, deserializer: any }) => void, versions = supportedVersions) => {
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
            console.log(name, data)
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

        cb({
            server: serverBridger,
            client: clientBridger,
            getBuffer: () => buffer,
            deserializer: deser
        })
    }
}
