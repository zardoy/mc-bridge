#!/usr/bin/env tsx

/**
 * Run all mc-bridge examples
 * Usage: npx tsx test/run-examples.ts
 */

console.log('🚀 Running mc-bridge examples...\n')

// Import and run server examples
console.log('📤 SERVER PACKET BRIDGER EXAMPLES')
console.log('==================================')
import('./server-bridge-examples')

setTimeout(() => {
    console.log('\n📥 CLIENT PACKET BRIDGER EXAMPLES')
    console.log('==================================')
    // Import and run client examples
    import('./client-bridge-examples')
}, 100)
