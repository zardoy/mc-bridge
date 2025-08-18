# MC-Bridge

A TypeScript library that unifies and normalizes Minecraft protocol packets across different versions into a consistent API. This project provides a bridge layer that handles version compatibility, allowing developers to write Minecraft server/client code that works across multiple Minecraft versions without worrying about protocol differences.

## 🎯 What It Does

MC-Bridge solves the complex problem of Minecraft protocol version compatibility by:

- **Normalizing packet structures** across different Minecraft versions (1.7+ to 1.21+)
- **Providing a unified API** for both client and server packet handling
- **Automatically handling version differences** in packet formats, field names, and data types
- **Generating protocol types** from minecraft-data for type safety
- **Supporting both directions** - server-to-client and client-to-server communication

## 🚀 Key Features

### Version Compatibility
- **Wide version support**: 1.7.10 through 1.21.5+
- **Automatic version detection**: Built-in version comparison methods (`gt()`, `gte()`, `lt()`, `lte()`)
- **Smart packet adaptation**: Automatically adapts packet structures based on target version

### Dual Bridge Support
- **ServerPacketBridger**: Normalizes outgoing server packets to clients
- **ClientPacketBridger**: Normalizes outgoing client packets to servers

### Comprehensive Packet Coverage
- **Player management**: Login, player info, tab list updates
- **World interaction**: Block placement, digging, movement
- **Communication**: Chat messages, titles, boss bars
- **Entity handling**: Entity actions, interactions, animations
- **Inventory**: Item slots, held items, containers

### Type Safety
- **Generated TypeScript types** from minecraft-data
- **Full IntelliSense support** for packet structures
- **Compile-time validation** of packet data

## 📦 Installation

```bash
npm install mc-bridge
# or
pnpm add mc-bridge
# or
yarn add mc-bridge
```

**Peer Dependencies:**
- `minecraft-data` ^3.95.0

## 🔧 Usage

### Basic Setup

```typescript
import { ServerPacketBridger, ClientPacketBridger } from 'mc-bridge'

// Create a server bridge for version 1.18.2
const serverBridge = new ServerPacketBridger('1.18.2', (packetName, data) => {
    // Your packet writing logic here
    console.log(`Sending ${packetName}:`, data)
})

// Create a client bridge for version 1.18.2
const clientBridge = new ClientPacketBridger('1.18.2', (packetName, data) => {
    // Your packet writing logic here
    console.log(`Sending ${packetName}:`, data)
})
```

### Server Examples

#### Player Info (Tab List)
```typescript
serverBridge.player_info({
    action: {
        add_player: true,
        update_latency: true,
        update_display_name: true
    },
    data: [{
        uuid: "player-uuid-here",
        player: {
            name: "PlayerName",
            properties: []
        },
        gamemode: 0,
        listed: 1,
        latency: 50,
        displayName: { text: "PlayerName", color: "gold" }
    }]
})
```

#### Chat Messages
```typescript
// Automatically adapts to version-appropriate chat system
serverBridge.chat({
    message: { text: "Welcome to the server!", color: "green" },
    position: 0
})
```

#### Player Login
```typescript
serverBridge.login({
    entityId: 123,
    gameMode: 0,
    dimension: 0,
    maxPlayers: 20,
    worldName: "minecraft:overworld",
    isHardcore: false,
    viewDistance: 10
})
```

### Client Examples

#### Movement
```typescript
clientBridge.position_look({
    x: 100.5,
    y: 64.0,
    z: 200.5,
    yaw: 90.0,
    pitch: 0.0
})
```

#### Block Interactions
```typescript
clientBridge.block_dig({
    status: 0, // Start digging
    location: { x: 100, y: 64, z: 200 },
    face: 1
})

clientBridge.block_place({
    location: { x: 100, y: 64, z: 200 },
    direction: 1,
    cursorX: 8,
    cursorY: 8,
    cursorZ: 8
})
```

### Version Comparison

```typescript
const bridge = new ServerPacketBridger('1.19.3', writePacket)

if (bridge.gte('1.19.3')) {
    // Use modern chat system
    bridge.chat({ message: "Modern chat", position: 0 })
} else if (bridge.gte('1.19')) {
    // Use legacy signed chat
    bridge.chat({ message: "Legacy chat", position: 0 })
} else {
    // Use old chat system
    bridge.chat({ message: "Old chat", position: 0 })
}
```

## 🏗️ Architecture

### Core Classes

- **`BasePacketBridger`**: Base class with version management and NBT processing
- **`ServerPacketBridger`**: Handles server-to-client packet normalization
- **`ClientPacketBridger`**: Handles client-to-server packet normalization

### Packet Processing Flow

1. **Input**: Unified packet data structure
2. **Version Check**: Determine target Minecraft version
3. **Adaptation**: Transform data to version-appropriate format
4. **Output**: Version-specific packet via write function

### Version Handling

The bridge automatically:
- Removes fields not supported in older versions
- Adds required fields for newer versions
- Transforms data types (e.g., modern chat to legacy)
- Handles packet structure changes between versions

## 🧪 Testing

Run the test examples to see the bridge in action:

```bash
# Build the project
pnpm build

# Run examples
pnpm tsx test/run-examples.ts
```

The test suite includes examples for both client and server bridges across different Minecraft versions.

## 🔍 Generated Types

The project automatically generates TypeScript types from minecraft-data:

- **Protocol definitions** for all supported versions
- **Packet structures** with proper typing
- **Field mappings** for version compatibility

## 📚 API Reference

### ServerPacketBridger Methods

- `player_info()` - Tab list management
- `login()` - Player world join
- `chat()` - Message broadcasting
- `position()` - Player movement
- `boss_bar()` - Boss bar display
- `sound_effect()` - Sound playback
- `title()` - Title/subtitle display

### ClientPacketBridger Methods

- `keep_alive()` - Connection maintenance
- `position()` - Movement updates
- `look()` - View direction
- `block_dig()` - Block breaking
- `block_place()` - Block placement
- `held_item_slot()` - Inventory selection
- `entity_action()` - Player actions

### Version Management

- `gt(version)` - Greater than version
- `gte(version)` - Greater than or equal to version
- `lt(version)` - Less than version
- `lte(version)` - Less than or equal to version

## 🤝 Contributing

This project is open to contributions! Areas that could use help:

- **Additional packet types** not yet covered
- **Version compatibility** for edge cases
- **Performance optimizations** for packet processing
- **Testing coverage** for more Minecraft versions

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- Built on top of [minecraft-data](https://github.com/PrismarineJS/minecraft-data)
- Inspired by the need for cross-version Minecraft protocol compatibility
- Community contributions and testing across different Minecraft versions
