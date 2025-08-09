/**
 * Generated from minecraft-data v3.92.0
 * DO NOT EDIT
 */

export interface ClientWriteMap {
  keep_alive: /** 1.7 */ {
    keepAliveId: number;
  } | /** 1.12.2 */ {
    keepAliveId: bigint;
  };
  /** Removed in 1.19 */
  chat: /** 1.7 */ {
    message: string;
  };
  use_entity: /** 1.7 */ {
    target: number;
    mouse: number;
    x: number | undefined;
    y: number | undefined;
    z: number | undefined;
  } | /** 1.9 */ {
    target: number;
    mouse: number;
    x: number | undefined;
    y: number | undefined;
    z: number | undefined;
    hand: number | undefined;
  } | /** 1.16 */ {
    target: number;
    mouse: number;
    x: number | undefined;
    y: number | undefined;
    z: number | undefined;
    hand: number | undefined;
    sneaking: boolean;
  };
  flying: /** 1.7 */ {
    onGround: boolean;
  } | /** 1.21.3 */ {
    flags: any;
  };
  position: /** 1.7 */ {
    x: number;
    stance: number;
    y: number;
    z: number;
    onGround: boolean;
  } | /** 1.8 */ {
    x: number;
    y: number;
    z: number;
    onGround: boolean;
  } | /** 1.21.3 */ {
    x: number;
    y: number;
    z: number;
    flags: any;
  };
  look: /** 1.7 */ {
    yaw: number;
    pitch: number;
    onGround: boolean;
  } | /** 1.21.3 */ {
    yaw: number;
    pitch: number;
    flags: any;
  };
  position_look: /** 1.7 */ {
    x: number;
    stance: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  } | /** 1.8 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  } | /** 1.21.3 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    flags: any;
  };
  block_dig: /** 1.7 */ {
    status: number;
    location: any;
    face: number;
  } | /** 1.8 */ {
    status: number;
    location: { x: number, y: number, z: number };
    face: number;
  } | /** 1.19 */ {
    status: number;
    location: { x: number, y: number, z: number };
    face: number;
    sequence: number;
  };
  block_place: /** 1.7 */ {
    location: any;
    direction: number;
    heldItem: any;
    cursorX: number;
    cursorY: number;
    cursorZ: number;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
    direction: number;
    heldItem: any;
    cursorX: number;
    cursorY: number;
    cursorZ: number;
  } | /** 1.9 */ {
    location: { x: number, y: number, z: number };
    direction: number;
    hand: number;
    cursorX: number;
    cursorY: number;
    cursorZ: number;
  } | /** 1.14 */ {
    hand: number;
    location: { x: number, y: number, z: number };
    direction: number;
    cursorX: number;
    cursorY: number;
    cursorZ: number;
    insideBlock: boolean;
  } | /** 1.19 */ {
    hand: number;
    location: { x: number, y: number, z: number };
    direction: number;
    cursorX: number;
    cursorY: number;
    cursorZ: number;
    insideBlock: boolean;
    sequence: number;
  } | /** 1.21.3 */ {
    hand: number;
    location: { x: number, y: number, z: number };
    direction: number;
    cursorX: number;
    cursorY: number;
    cursorZ: number;
    insideBlock: boolean;
    worldBorderHit: boolean;
    sequence: number;
  };
  held_item_slot: /** 1.7 */ {
    slotId: number;
  };
  arm_animation: /** 1.7 */ {
    entityId: number;
    animation: number;
  } | /** 1.8 */ {

  } | /** 1.9 */ {
    hand: number;
  };
  entity_action: /** 1.7 */ {
    entityId: number;
    actionId: number;
    jumpBoost: number;
  };
  /** Removed in 1.21.3 */
  steer_vehicle: /** 1.7 */ {
    sideways: number;
    forward: number;
    jump: boolean;
    unmount: boolean;
  } | /** 1.8 */ {
    sideways: number;
    forward: number;
    jump: number;
  };
  close_window: /** 1.7 */ {
    windowId: number;
  } | /** 1.20.5 */ {
    windowId: any;
  };
  window_click: /** 1.7 */ {
    windowId: number;
    slot: number;
    mouseButton: number;
    action: number;
    mode: number;
    item: any;
  } | /** 1.17 */ {
    windowId: number;
    slot: number;
    mouseButton: number;
    mode: number;
    changedSlots: {
    location: number;
    item: any;
  }[];
    cursorItem: any;
  } | /** 1.17.1 */ {
    windowId: number;
    stateId: number;
    slot: number;
    mouseButton: number;
    mode: number;
    changedSlots: {
    location: number;
    item: any;
  }[];
    cursorItem: any;
  } | /** 1.20.5 */ {
    windowId: any;
    stateId: number;
    slot: number;
    mouseButton: number;
    mode: number;
    changedSlots: {
    location: number;
    item: any;
  }[];
    cursorItem: any;
  };
  /** Removed in 1.17 */
  transaction: /** 1.7 */ {
    windowId: number;
    action: number;
    accepted: boolean;
  };
  set_creative_slot: /** 1.7 */ {
    slot: number;
    item: any;
  };
  enchant_item: /** 1.7 */ {
    windowId: number;
    enchantment: number;
  } | /** 1.21.1 */ {
    windowId: any;
    enchantment: number;
  };
  update_sign: /** 1.7 */ {
    location: any;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  } | /** 1.20 */ {
    location: { x: number, y: number, z: number };
    isFrontText: boolean;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
  abilities: /** 1.7 */ {
    flags: number;
    flyingSpeed: number;
    walkingSpeed: number;
  } | /** 1.16 */ {
    flags: number;
  };
  tab_complete: /** 1.7 */ {
    text: string;
  } | /** 1.8 */ {
    text: string;
    block: any | null;
  } | /** 1.9 */ {
    text: string;
    assumeCommand: boolean;
    lookedAtBlock: any | null;
  } | /** 1.13 */ {
    transactionId: number;
    text: string;
  };
  /** Removed in 1.20.5 */
  settings: /** 1.7 */ {
    locale: string;
    viewDistance: number;
    chatFlags: number;
    chatColors: boolean;
    difficulty: number;
    showCape: boolean;
  } | /** 1.8 */ {
    locale: string;
    viewDistance: number;
    chatFlags: number;
    chatColors: boolean;
    skinParts: number;
  } | /** 1.9 */ {
    locale: string;
    viewDistance: number;
    chatFlags: number;
    chatColors: boolean;
    skinParts: number;
    mainHand: number;
  } | /** 1.17 */ {
    locale: string;
    viewDistance: number;
    chatFlags: number;
    chatColors: boolean;
    skinParts: number;
    mainHand: number;
    disableTextFiltering: boolean;
  } | /** 1.18 */ {
    locale: string;
    viewDistance: number;
    chatFlags: number;
    chatColors: boolean;
    skinParts: number;
    mainHand: number;
    enableTextFiltering: boolean;
    enableServerListing: boolean;
  };
  client_command: /** 1.7 */ {
    payload: number;
  } | /** 1.9 */ {
    actionId: number;
  };
  custom_payload: /** 1.7 */ {
    channel: string;
    data: any;
  };
  packet: /** 1.7 */ {
    name: 'keep_alive' | 'chat' | 'use_entity' | 'flying' | 'position' | 'look' | 'position_look' | 'block_dig' | 'block_place' | 'held_item_slot' | 'arm_animation' | 'entity_action' | 'steer_vehicle' | 'close_window' | 'window_click' | 'transaction' | 'set_creative_slot' | 'enchant_item' | 'update_sign' | 'abilities' | 'tab_complete' | 'settings' | 'client_command' | 'custom_payload';
    params: any;
  } | /** 1.8 */ {
    name: 'keep_alive' | 'chat' | 'use_entity' | 'flying' | 'position' | 'look' | 'position_look' | 'block_dig' | 'block_place' | 'held_item_slot' | 'arm_animation' | 'entity_action' | 'steer_vehicle' | 'close_window' | 'window_click' | 'transaction' | 'set_creative_slot' | 'enchant_item' | 'update_sign' | 'abilities' | 'tab_complete' | 'settings' | 'client_command' | 'custom_payload' | 'spectate' | 'resource_pack_receive';
    params: any;
  } | /** 1.9 */ {
    name: 'teleport_confirm' | 'tab_complete' | 'chat' | 'client_command' | 'settings' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'use_entity' | 'keep_alive' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'resource_pack_receive' | 'held_item_slot' | 'set_creative_slot' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.12 */ {
    name: 'teleport_confirm' | 'prepare_crafting_grid' | 'tab_complete' | 'chat' | 'client_command' | 'settings' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'use_entity' | 'keep_alive' | 'flying' | 'position' | 'position_look' | 'look' | 'vehicle_move' | 'steer_boat' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'crafting_book_data' | 'resource_pack_receive' | 'advancement_tab' | 'held_item_slot' | 'set_creative_slot' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.12.1 */ {
    name: 'teleport_confirm' | 'tab_complete' | 'chat' | 'client_command' | 'settings' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'use_entity' | 'keep_alive' | 'flying' | 'position' | 'position_look' | 'look' | 'vehicle_move' | 'steer_boat' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'crafting_book_data' | 'resource_pack_receive' | 'advancement_tab' | 'held_item_slot' | 'set_creative_slot' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.13 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'chat' | 'client_command' | 'settings' | 'tab_complete' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'keep_alive' | 'flying' | 'position' | 'position_look' | 'look' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'crafting_book_data' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.14 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'chat' | 'client_command' | 'settings' | 'tab_complete' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'crafting_book_data' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.16 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'chat' | 'client_command' | 'settings' | 'tab_complete' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'crafting_book_data' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.16.2 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'chat' | 'client_command' | 'settings' | 'tab_complete' | 'transaction' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.17 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'chat' | 'client_command' | 'settings' | 'tab_complete' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.19 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'chat_command' | 'chat_message' | 'chat_preview' | 'client_command' | 'settings' | 'tab_complete' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.19.2 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_message' | 'chat_preview' | 'client_command' | 'settings' | 'tab_complete' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.19.3 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_message' | 'client_command' | 'settings' | 'tab_complete' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'chat_session_update' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.19.4 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_message' | 'chat_session_update' | 'client_command' | 'settings' | 'tab_complete' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.20.2 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_message' | 'chat_session_update' | 'chunk_batch_received' | 'client_command' | 'settings' | 'tab_complete' | 'configuration_acknowledged' | 'enchant_item' | 'window_click' | 'close_window' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'ping_request' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.20.3 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_message' | 'chat_session_update' | 'chunk_batch_received' | 'client_command' | 'settings' | 'tab_complete' | 'configuration_acknowledged' | 'enchant_item' | 'window_click' | 'close_window' | 'set_slot_state' | 'custom_payload' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'ping_request' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.20.5 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_command_signed' | 'chat_message' | 'chat_session_update' | 'chunk_batch_received' | 'client_command' | 'settings' | 'tab_complete' | 'configuration_acknowledged' | 'enchant_item' | 'window_click' | 'close_window' | 'set_slot_state' | 'cookie_response' | 'custom_payload' | 'debug_sample_subscription' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'ping_request' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'steer_vehicle' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.21.3 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'select_bundle_item' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_command_signed' | 'chat_message' | 'chat_session_update' | 'chunk_batch_received' | 'client_command' | 'tick_end' | 'settings' | 'tab_complete' | 'configuration_acknowledged' | 'enchant_item' | 'window_click' | 'close_window' | 'set_slot_state' | 'cookie_response' | 'custom_payload' | 'debug_sample_subscription' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item' | 'ping_request' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'player_input' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  } | /** 1.21.4 */ {
    name: 'teleport_confirm' | 'query_block_nbt' | 'select_bundle_item' | 'set_difficulty' | 'message_acknowledgement' | 'chat_command' | 'chat_command_signed' | 'chat_message' | 'chat_session_update' | 'chunk_batch_received' | 'client_command' | 'tick_end' | 'settings' | 'tab_complete' | 'configuration_acknowledged' | 'enchant_item' | 'window_click' | 'close_window' | 'set_slot_state' | 'cookie_response' | 'custom_payload' | 'debug_sample_subscription' | 'edit_book' | 'query_entity_nbt' | 'use_entity' | 'generate_structure' | 'keep_alive' | 'lock_difficulty' | 'position' | 'position_look' | 'look' | 'flying' | 'vehicle_move' | 'steer_boat' | 'pick_item_from_block' | 'pick_item_from_entity' | 'ping_request' | 'craft_recipe_request' | 'abilities' | 'block_dig' | 'entity_action' | 'player_input' | 'player_loaded' | 'pong' | 'recipe_book' | 'displayed_recipe' | 'name_item' | 'resource_pack_receive' | 'advancement_tab' | 'select_trade' | 'set_beacon_effect' | 'held_item_slot' | 'update_command_block' | 'update_command_block_minecart' | 'set_creative_slot' | 'update_jigsaw_block' | 'update_structure_block' | 'update_sign' | 'arm_animation' | 'spectate' | 'block_place' | 'use_item';
    params: any;
  };
  spectate: /** 1.8 */ {
    target: string;
  };
  resource_pack_receive: /** 1.8 */ {
    hash: string;
    result: number;
  } | /** 1.10 */ {
    result: number;
  } | /** 1.20.3 */ {
    uuid: string;
    result: number;
  };
  teleport_confirm: /** 1.9 */ {
    teleportId: number;
  };
  vehicle_move: /** 1.9 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
  } | /** 1.21.4 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  };
  steer_boat: /** 1.9 */ {
    leftPaddle: boolean;
    rightPaddle: boolean;
  };
  use_item: /** 1.9 */ {
    hand: number;
  } | /** 1.19 */ {
    hand: number;
    sequence: number;
  } | /** 1.21.1 */ {
    hand: number;
    sequence: number;
    rotation: any;
  };
  /** Removed in 1.12.1 */
  prepare_crafting_grid: /** 1.12 */ {
    windowId: number;
    actionNumber: number;
    returnEntry: {
    item: any;
    craftingSlot: number;
    playerSlot: number;
  }[];
    prepareEntry: {
    item: any;
    craftingSlot: number;
    playerSlot: number;
  }[];
  };
  /** Removed in 1.16.2 */
  crafting_book_data: /** 1.12 */ {
    type: number;
    data: {
    displayedRecipe: number;
  } | {
    craftingBookOpen: boolean;
    craftingFilter: boolean;
  };
  } | /** 1.13 */ {
    type: number;
    data: {
    displayedRecipe: string;
  } | {
    craftingBookOpen: boolean;
    craftingFilter: boolean;
    smeltingBookOpen: boolean;
    smeltingFilter: boolean;
  };
  } | /** 1.14 */ {
    type: number;
    data: {
    displayedRecipe: string;
  } | {
    craftingBookOpen: boolean;
    craftingFilter: boolean;
    smeltingBookOpen: boolean;
    smeltingFilter: boolean;
    blastingBookOpen: boolean;
    blastingFilter: boolean;
    smokingBookOpen: boolean;
    smokingFilter: boolean;
  };
  };
  advancement_tab: /** 1.12 */ {
    action: number;
    tabId: string | undefined;
  };
  craft_recipe_request: /** 1.12.1 */ {
    windowId: number;
    recipe: number;
    makeAll: boolean;
  } | /** 1.13 */ {
    windowId: number;
    recipe: string;
    makeAll: boolean;
  } | /** 1.21.1 */ {
    windowId: any;
    recipe: string;
    makeAll: boolean;
  } | /** 1.21.3 */ {
    windowId: any;
    recipeId: number;
    makeAll: boolean;
  };
  query_block_nbt: /** 1.13 */ {
    transactionId: number;
    location: { x: number, y: number, z: number };
  };
  edit_book: /** 1.13 */ {
    new_book: any;
    signing: boolean;
  } | /** 1.13.1 */ {
    new_book: any;
    signing: boolean;
    hand: number;
  } | /** 1.17.1 */ {
    hand: number;
    pages: string[];
    title: any | null;
  };
  query_entity_nbt: /** 1.13 */ {
    transactionId: number;
    entityId: number;
  };
  /** Removed in 1.21.4 */
  pick_item: /** 1.13 */ {
    slot: number;
  };
  name_item: /** 1.13 */ {
    name: string;
  };
  select_trade: /** 1.13 */ {
    slot: number;
  };
  set_beacon_effect: /** 1.13 */ {
    primary_effect: number;
    secondary_effect: number;
  } | /** 1.19 */ {
    primary_effect: any | null;
    secondary_effect: any | null;
  };
  update_command_block: /** 1.13 */ {
    location: { x: number, y: number, z: number };
    command: string;
    mode: number;
    flags: number;
  };
  update_command_block_minecart: /** 1.13 */ {
    entityId: number;
    command: string;
    track_output: boolean;
  };
  update_structure_block: /** 1.13 */ {
    location: { x: number, y: number, z: number };
    action: number;
    mode: number;
    name: string;
    offset_x: number;
    offset_y: number;
    offset_z: number;
    size_x: number;
    size_y: number;
    size_z: number;
    mirror: number;
    rotation: number;
    metadata: string;
    integrity: number;
    seed: any;
    flags: number;
  } | /** 1.19 */ {
    location: { x: number, y: number, z: number };
    action: number;
    mode: number;
    name: string;
    offset_x: number;
    offset_y: number;
    offset_z: number;
    size_x: number;
    size_y: number;
    size_z: number;
    mirror: number;
    rotation: number;
    metadata: string;
    integrity: number;
    seed: number;
    flags: number;
  };
  set_difficulty: /** 1.14 */ {
    newDifficulty: number;
  };
  lock_difficulty: /** 1.14 */ {
    locked: boolean;
  };
  update_jigsaw_block: /** 1.14 */ {
    location: { x: number, y: number, z: number };
    attachmentType: string;
    targetPool: string;
    finalState: string;
  } | /** 1.16 */ {
    location: { x: number, y: number, z: number };
    name: string;
    target: string;
    pool: string;
    finalState: string;
    jointType: string;
  } | /** 1.20.3 */ {
    location: { x: number, y: number, z: number };
    name: string;
    target: string;
    pool: string;
    finalState: string;
    jointType: string;
    selection_priority: number;
    placement_priority: number;
  };
  generate_structure: /** 1.16 */ {
    location: { x: number, y: number, z: number };
    levels: number;
    keepJigsaws: boolean;
  };
  displayed_recipe: /** 1.16.2 */ {
    recipeId: string;
  } | /** 1.21.3 */ {
    recipeId: number;
  };
  recipe_book: /** 1.16.2 */ {
    bookId: number;
    bookOpen: boolean;
    filterActive: boolean;
  };
  pong: /** 1.17 */ {
    id: number;
  };
  chat_command: /** 1.19 */ {
    command: string;
    timestamp: bigint;
    salt: bigint;
    argumentSignatures: {
    argumentName: string;
    signature: any;
  }[];
    signedPreview: boolean;
  } | /** 1.19.2 */ {
    command: string;
    timestamp: bigint;
    salt: bigint;
    argumentSignatures: {
    argumentName: string;
    signature: any;
  }[];
    signedPreview: boolean;
    previousMessages: any;
    lastRejectedMessage: any | null;
  } | /** 1.19.3 */ {
    command: string;
    timestamp: bigint;
    salt: bigint;
    argumentSignatures: {
    argumentName: string;
    signature: any;
  }[];
    messageCount: number;
    acknowledged: any;
  } | /** 1.20.5 */ {
    command: string;
  };
  chat_message: /** 1.19 */ {
    message: string;
    timestamp: bigint;
    salt: bigint;
    signature: any;
    signedPreview: boolean;
  } | /** 1.19.2 */ {
    message: string;
    timestamp: bigint;
    salt: bigint;
    signature: any;
    signedPreview: boolean;
    previousMessages: any;
    lastRejectedMessage: any | null;
  } | /** 1.19.3 */ {
    message: string;
    timestamp: bigint;
    salt: bigint;
    signature: any | null;
    offset: number;
    acknowledged: any;
  };
  /** Removed in 1.19.3 */
  chat_preview: /** 1.19 */ {
    query: number;
    message: string;
  };
  message_acknowledgement: /** 1.19.2 */ {
    previousMessages: any;
    lastRejectedMessage: any | null;
  } | /** 1.19.3 */ {
    count: number;
  };
  chat_session_update: /** 1.19.3 */ {
    sessionUUID: string;
    expireTime: bigint;
    publicKey: any;
    signature: any;
  };
  chunk_batch_received: /** 1.20.2 */ {
    chunksPerTick: number;
  };
  configuration_acknowledged: /** 1.20.2 */ {

  };
  ping_request: /** 1.20.2 */ {
    id: bigint;
  };
  set_slot_state: /** 1.20.3 */ {
    slot_id: number;
    window_id: number;
    state: boolean;
  } | /** 1.21.3 */ {
    slot_id: number;
    window_id: any;
    state: boolean;
  };
  chat_command_signed: /** 1.20.5 */ {
    command: string;
    timestamp: bigint;
    salt: bigint;
    argumentSignatures: {
    argumentName: string;
    signature: any;
  }[];
    messageCount: number;
    acknowledged: any;
  };
  debug_sample_subscription: /** 1.20.5 */ {
    type: number;
  };
  select_bundle_item: /** 1.21.3 */ {
    slotId: number;
    selectedItemIndex: number;
  };
  tick_end: /** 1.21.3 */ {

  };
  player_input: /** 1.21.3 */ {
    inputs: any;
  };
  pick_item_from_block: /** 1.21.4 */ {
    position: { x: number, y: number, z: number };
    includeData: boolean;
  };
  pick_item_from_entity: /** 1.21.4 */ {
    entityId: number;
    includeData: boolean;
  };
  player_loaded: /** 1.21.4 */ {

  };
}

export interface ClientOnMap {
  keep_alive: /** 1.7 */ {
    keepAliveId: number;
  } | /** 1.12.2 */ {
    keepAliveId: bigint;
  };
  login: /** 1.7 */ {
    entityId: number;
    gameMode: number;
    dimension: number;
    difficulty: number;
    maxPlayers: number;
    levelType: string;
  } | /** 1.8 */ {
    entityId: number;
    gameMode: number;
    dimension: number;
    difficulty: number;
    maxPlayers: number;
    levelType: string;
    reducedDebugInfo: boolean;
  } | /** 1.14 */ {
    entityId: number;
    gameMode: number;
    dimension: number;
    maxPlayers: number;
    levelType: string;
    viewDistance: number;
    reducedDebugInfo: boolean;
  } | /** 1.15 */ {
    entityId: number;
    gameMode: number;
    dimension: number;
    hashedSeed: bigint;
    maxPlayers: number;
    levelType: string;
    viewDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
  } | /** 1.16 */ {
    entityId: number;
    gameMode: number;
    previousGameMode: number;
    worldNames: string[];
    dimensionCodec: any;
    dimension: string;
    worldName: string;
    hashedSeed: bigint;
    maxPlayers: number;
    viewDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    isDebug: boolean;
    isFlat: boolean;
  } | /** 1.16.2 */ {
    entityId: number;
    isHardcore: boolean;
    gameMode: number;
    previousGameMode: number;
    worldNames: string[];
    dimensionCodec: any;
    dimension: any;
    worldName: string;
    hashedSeed: bigint;
    maxPlayers: number;
    viewDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    isDebug: boolean;
    isFlat: boolean;
  } | /** 1.18 */ {
    entityId: number;
    isHardcore: boolean;
    gameMode: number;
    previousGameMode: number;
    worldNames: string[];
    dimensionCodec: any;
    dimension: any;
    worldName: string;
    hashedSeed: bigint;
    maxPlayers: number;
    viewDistance: number;
    simulationDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    isDebug: boolean;
    isFlat: boolean;
  } | /** 1.19 */ {
    entityId: number;
    isHardcore: boolean;
    gameMode: number;
    previousGameMode: number;
    worldNames: string[];
    dimensionCodec: any;
    worldType: string;
    worldName: string;
    hashedSeed: bigint;
    maxPlayers: number;
    viewDistance: number;
    simulationDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    isDebug: boolean;
    isFlat: boolean;
    death: any | null;
  } | /** 1.20 */ {
    entityId: number;
    isHardcore: boolean;
    gameMode: number;
    previousGameMode: number;
    worldNames: string[];
    dimensionCodec: any;
    worldType: string;
    worldName: string;
    hashedSeed: bigint;
    maxPlayers: number;
    viewDistance: number;
    simulationDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    isDebug: boolean;
    isFlat: boolean;
    death: any | null;
    portalCooldown: number;
  } | /** 1.20.2 */ {
    entityId: number;
    isHardcore: boolean;
    worldNames: string[];
    maxPlayers: number;
    viewDistance: number;
    simulationDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    doLimitedCrafting: boolean;
    worldType: string;
    worldName: string;
    hashedSeed: bigint;
    gameMode: number;
    previousGameMode: number;
    isDebug: boolean;
    isFlat: boolean;
    death: any | null;
    portalCooldown: number;
  } | /** 1.20.5 */ {
    entityId: number;
    isHardcore: boolean;
    worldNames: string[];
    maxPlayers: number;
    viewDistance: number;
    simulationDistance: number;
    reducedDebugInfo: boolean;
    enableRespawnScreen: boolean;
    doLimitedCrafting: boolean;
    worldState: any;
    enforcesSecureChat: boolean;
  };
  /** Removed in 1.19 */
  chat: /** 1.7 */ {
    message: string;
  } | /** 1.8 */ {
    message: string;
    position: number;
  } | /** 1.16 */ {
    message: string;
    position: number;
    sender: string;
  };
  update_time: /** 1.7 */ {
    age: bigint;
    time: bigint;
  } | /** 1.21.3 */ {
    age: bigint;
    time: bigint;
    tickDayTime: boolean;
  };
  entity_equipment: /** 1.7 */ {
    entityId: number;
    slot: number;
    item: any;
  } | /** 1.16 */ {
    entityId: number;
    equipments: any;
  };
  spawn_position: /** 1.7 */ {
    location: any;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
  } | /** 1.17 */ {
    location: { x: number, y: number, z: number };
    angle: number;
  };
  update_health: /** 1.7 */ {
    health: number;
    food: number;
    foodSaturation: number;
  };
  respawn: /** 1.7 */ {
    dimension: number;
    difficulty: number;
    gamemode: number;
    levelType: string;
  } | /** 1.14 */ {
    dimension: number;
    gamemode: number;
    levelType: string;
  } | /** 1.15 */ {
    dimension: number;
    hashedSeed: bigint;
    gamemode: number;
    levelType: string;
  } | /** 1.16 */ {
    dimension: string;
    worldName: string;
    hashedSeed: bigint;
    gamemode: number;
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    copyMetadata: boolean;
  } | /** 1.16.2 */ {
    dimension: any;
    worldName: string;
    hashedSeed: bigint;
    gamemode: number;
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    copyMetadata: boolean;
  } | /** 1.19 */ {
    dimension: string;
    worldName: string;
    hashedSeed: bigint;
    gamemode: number;
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    copyMetadata: boolean;
    death: any | null;
  } | /** 1.20 */ {
    dimension: string;
    worldName: string;
    hashedSeed: bigint;
    gamemode: number;
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    copyMetadata: boolean;
    death: any | null;
    portalCooldown: number;
  } | /** 1.20.2 */ {
    dimension: string;
    worldName: string;
    hashedSeed: bigint;
    gamemode: number;
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    death: any | null;
    portalCooldown: number;
    copyMetadata: boolean;
  } | /** 1.20.5 */ {
    worldState: any;
    copyMetadata: number;
  };
  position: /** 1.7 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  } | /** 1.8 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    flags: number;
  } | /** 1.9 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    flags: number;
    teleportId: number;
  } | /** 1.17 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    flags: number;
    teleportId: number;
    dismountVehicle: boolean;
  } | /** 1.19.4 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    flags: number;
    teleportId: number;
  } | /** 1.20.5 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    flags: any;
    teleportId: number;
  } | /** 1.21.3 */ {
    teleportId: number;
    x: number;
    y: number;
    z: number;
    dx: number;
    dy: number;
    dz: number;
    yaw: number;
    pitch: number;
    flags: any;
  };
  held_item_slot: /** 1.7 */ {
    slot: number;
  };
  /** Removed in 1.14 */
  bed: /** 1.7 */ {
    entityId: number;
    location: any;
  } | /** 1.8 */ {
    entityId: number;
    location: { x: number, y: number, z: number };
  };
  animation: /** 1.7 */ {
    entityId: number;
    animation: number;
  };
  /** Removed in 1.20.2 */
  named_entity_spawn: /** 1.7 */ {
    entityId: number;
    playerUUID: string;
    playerName: string;
    data: {
    name: string;
    value: string;
    signature: string;
  }[];
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    currentItem: number;
    metadata: any;
  } | /** 1.8 */ {
    entityId: number;
    playerUUID: string;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    currentItem: number;
    metadata: any;
  } | /** 1.9 */ {
    entityId: number;
    playerUUID: string;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    metadata: any;
  } | /** 1.15 */ {
    entityId: number;
    playerUUID: string;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
  };
  collect: /** 1.7 */ {
    collectedEntityId: number;
    collectorEntityId: number;
  } | /** 1.11 */ {
    collectedEntityId: number;
    collectorEntityId: number;
    pickupItemCount: number;
  };
  spawn_entity: /** 1.7 */ {
    entityId: number;
    type: number;
    x: number;
    y: number;
    z: number;
    pitch: number;
    yaw: number;
    objectData: {
    intField: number;
    velocityX: undefined | number;
    velocityY: undefined | number;
    velocityZ: undefined | number;
  };
  } | /** 1.9 */ {
    entityId: number;
    objectUUID: string;
    type: number;
    x: number;
    y: number;
    z: number;
    pitch: number;
    yaw: number;
    objectData: number;
    velocityX: number;
    velocityY: number;
    velocityZ: number;
  } | /** 1.19 */ {
    entityId: number;
    objectUUID: string;
    type: number;
    x: number;
    y: number;
    z: number;
    pitch: number;
    yaw: number;
    headPitch: number;
    objectData: number;
    velocityX: number;
    velocityY: number;
    velocityZ: number;
  };
  /** Removed in 1.19 */
  spawn_entity_living: /** 1.7 */ {
    entityId: number;
    type: number;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    headPitch: number;
    velocityX: number;
    velocityY: number;
    velocityZ: number;
    metadata: any;
  } | /** 1.9 */ {
    entityId: number;
    entityUUID: string;
    type: number;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    headPitch: number;
    velocityX: number;
    velocityY: number;
    velocityZ: number;
    metadata: any;
  } | /** 1.15 */ {
    entityId: number;
    entityUUID: string;
    type: number;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    headPitch: number;
    velocityX: number;
    velocityY: number;
    velocityZ: number;
  };
  /** Removed in 1.19 */
  spawn_entity_painting: /** 1.7 */ {
    entityId: number;
    title: string;
    location: any;
    direction: number;
  } | /** 1.8 */ {
    entityId: number;
    title: string;
    location: { x: number, y: number, z: number };
    direction: number;
  } | /** 1.9 */ {
    entityId: number;
    entityUUID: string;
    title: string;
    location: { x: number, y: number, z: number };
    direction: number;
  } | /** 1.13 */ {
    entityId: number;
    entityUUID: string;
    title: number;
    location: { x: number, y: number, z: number };
    direction: number;
  };
  spawn_entity_experience_orb: /** 1.7 */ {
    entityId: number;
    x: number;
    y: number;
    z: number;
    count: number;
  };
  entity_velocity: /** 1.7 */ {
    entityId: number;
    velocityX: number;
    velocityY: number;
    velocityZ: number;
  };
  /** Removed in 1.17 */
  entity_destroy: /** 1.17.1 */ {
    entityIds: number[];
  };
  /** Removed in 1.17 */
  entity: /** 1.7 */ {
    entityId: number;
  };
  rel_entity_move: /** 1.7 */ {
    entityId: number;
    dX: number;
    dY: number;
    dZ: number;
  } | /** 1.8 */ {
    entityId: number;
    dX: number;
    dY: number;
    dZ: number;
    onGround: boolean;
  };
  entity_look: /** 1.7 */ {
    entityId: number;
    yaw: number;
    pitch: number;
  } | /** 1.8 */ {
    entityId: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  };
  entity_move_look: /** 1.7 */ {
    entityId: number;
    dX: number;
    dY: number;
    dZ: number;
    yaw: number;
    pitch: number;
  } | /** 1.8 */ {
    entityId: number;
    dX: number;
    dY: number;
    dZ: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  };
  entity_teleport: /** 1.7 */ {
    entityId: number;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
  } | /** 1.8 */ {
    entityId: number;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  };
  entity_head_rotation: /** 1.7 */ {
    entityId: number;
    headYaw: number;
  };
  entity_status: /** 1.7 */ {
    entityId: number;
    entityStatus: number;
  };
  attach_entity: /** 1.7 */ {
    entityId: number;
    vehicleId: number;
    leash: boolean;
  } | /** 1.9 */ {
    entityId: number;
    vehicleId: number;
  };
  entity_metadata: /** 1.7 */ {
    entityId: number;
    metadata: any;
  };
  entity_effect: /** 1.7 */ {
    entityId: number;
    effectId: number;
    amplifier: number;
    duration: number;
  } | /** 1.8 */ {
    entityId: number;
    effectId: number;
    amplifier: number;
    duration: number;
    hideParticles: boolean;
  } | /** 1.9 */ {
    entityId: number;
    effectId: number;
    amplifier: number;
    duration: number;
    hideParticles: number;
  } | /** 1.19 */ {
    entityId: number;
    effectId: number;
    amplifier: number;
    duration: number;
    hideParticles: number;
    factorCodec: any | null;
  } | /** 1.20.5 */ {
    entityId: number;
    effectId: number;
    amplifier: number;
    duration: number;
    flags: number;
  };
  remove_entity_effect: /** 1.7 */ {
    entityId: number;
    effectId: number;
  };
  experience: /** 1.7 */ {
    experienceBar: number;
    level: number;
    totalExperience: number;
  };
  /** Removed in 1.9 */
  update_attributes: /** 1.7 */ {
    entityId: number;
    properties: {
    key: string;
    value: number;
    modifiers: {
    uuid: string;
    amount: number;
    operation: number;
  }[];
  }[];
  };
  map_chunk: /** 1.7 */ {
    x: number;
    z: number;
    groundUp: boolean;
    bitMap: number;
    addBitMap: number;
    compressedChunkData: any;
  } | /** 1.8 */ {
    x: number;
    z: number;
    groundUp: boolean;
    bitMap: number;
    chunkData: any;
  } | /** 1.9.4 */ {
    x: number;
    z: number;
    groundUp: boolean;
    bitMap: number;
    chunkData: any;
    blockEntities: any[];
  } | /** 1.14 */ {
    x: number;
    z: number;
    groundUp: boolean;
    bitMap: number;
    heightmaps: any;
    chunkData: any;
    blockEntities: any[];
  } | /** 1.15 */ {
    x: number;
    z: number;
    groundUp: boolean;
    bitMap: number;
    heightmaps: any;
    biomes: undefined | number[];
    chunkData: any;
    blockEntities: any[];
  } | /** 1.16 */ {
    x: number;
    z: number;
    groundUp: boolean;
    ignoreOldData: boolean;
    bitMap: number;
    heightmaps: any;
    biomes: undefined | number[];
    chunkData: any;
    blockEntities: any[];
  } | /** 1.16.2 */ {
    x: number;
    z: number;
    groundUp: boolean;
    bitMap: number;
    heightmaps: any;
    biomes: undefined | number[];
    chunkData: any;
    blockEntities: any[];
  } | /** 1.17 */ {
    x: number;
    z: number;
    bitMap: bigint[];
    heightmaps: any;
    biomes: number[];
    chunkData: any;
    blockEntities: any[];
  } | /** 1.18 */ {
    x: number;
    z: number;
    heightmaps: any;
    chunkData: any;
    blockEntities: any[];
    trustEdges: boolean;
    skyLightMask: bigint[];
    blockLightMask: bigint[];
    emptySkyLightMask: bigint[];
    emptyBlockLightMask: bigint[];
    skyLight: number[][];
    blockLight: number[][];
  } | /** 1.20 */ {
    x: number;
    z: number;
    heightmaps: any;
    chunkData: any;
    blockEntities: any[];
    skyLightMask: bigint[];
    blockLightMask: bigint[];
    emptySkyLightMask: bigint[];
    emptyBlockLightMask: bigint[];
    skyLight: number[][];
    blockLight: number[][];
  };
  multi_block_change: /** 1.7 */ {
    chunkX: number;
    chunkZ: number;
    recordCount: any;
    dataLength: number;
    records: {
    y: number;
  }[];
  } | /** 1.8 */ {
    chunkX: number;
    chunkZ: number;
    records: {
    horizontalPos: number;
    y: number;
    blockId: number;
  }[];
  } | /** 1.16.2 */ {
    chunkCoordinates: any;
    notTrustEdges: boolean;
    records: any[];
  } | /** 1.19 */ {
    chunkCoordinates: any;
    notTrustEdges: boolean;
    records: number[];
  } | /** 1.19.2 */ {
    chunkCoordinates: any;
    suppressLightUpdates: boolean;
    records: number[];
  } | /** 1.20 */ {
    chunkCoordinates: any;
    records: number[];
  };
  block_change: /** 1.7 */ {
    location: any;
    type: number;
    metadata: number;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
    type: number;
  };
  block_action: /** 1.7 */ {
    location: any;
    byte1: number;
    byte2: number;
    blockId: number;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
    byte1: number;
    byte2: number;
    blockId: number;
  };
  block_break_animation: /** 1.7 */ {
    entityId: number;
    location: any;
    destroyStage: number;
  } | /** 1.8 */ {
    entityId: number;
    location: { x: number, y: number, z: number };
    destroyStage: number;
  };
  /** Removed in 1.9 */
  map_chunk_bulk: /** 1.7 */ {
    chunkColumnCount: any;
    dataLength: any;
    skyLightSent: boolean;
    compressedChunkData: any;
    meta: {
    x: number;
    z: number;
    bitMap: number;
    addBitMap: number;
  }[];
  } | /** 1.8 */ {
    skyLightSent: boolean;
    meta: {
    x: number;
    z: number;
    bitMap: number;
  }[];
    data: any;
  };
  explosion: /** 1.7 */ {
    x: number;
    y: number;
    z: number;
    radius: number;
    affectedBlockOffsets: {
    x: number;
    y: number;
    z: number;
  }[];
    playerMotionX: number;
    playerMotionY: number;
    playerMotionZ: number;
  } | /** 1.20.3 */ {
    x: number;
    y: number;
    z: number;
    radius: number;
    affectedBlockOffsets: {
    x: number;
    y: number;
    z: number;
  }[];
    playerMotionX: number;
    playerMotionY: number;
    playerMotionZ: number;
    block_interaction_type: number;
    small_explosion_particle: any;
    large_explosion_particle: any;
    sound: any;
  } | /** 1.21.3 */ {
    x: number;
    y: number;
    z: number;
    playerKnockback: any | null;
    explosionParticle: any;
    sound: any;
  };
  world_event: /** 1.7 */ {
    effectId: number;
    location: any;
    data: number;
    global: boolean;
  } | /** 1.8 */ {
    effectId: number;
    location: { x: number, y: number, z: number };
    data: number;
    global: boolean;
  };
  /** Removed in 1.19.3 */
  named_sound_effect: /** 1.7 */ {
    soundName: string;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;
  } | /** 1.9 */ {
    soundName: string;
    soundCategory: number;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;
  } | /** 1.19 */ {
    soundName: string;
    soundCategory: number;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;
    seed: bigint;
  };
  world_particles: /** 1.7 */ {
    particleName: string;
    x: number;
    y: number;
    z: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    particleData: number;
    particles: number;
  } | /** 1.8 */ {
    particleId: number;
    longDistance: boolean;
    x: number;
    y: number;
    z: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    particleData: number;
    particles: number;
    data: number[] | undefined;
  } | /** 1.13 */ {
    particleId: number;
    longDistance: boolean;
    x: number;
    y: number;
    z: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    particleData: number;
    particles: number;
    data: any;
  } | /** 1.20.5 */ {
    longDistance: boolean;
    x: number;
    y: number;
    z: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    velocityOffset: number;
    amount: number;
    particle: any;
  } | /** 1.21.4 */ {
    longDistance: boolean;
    alwaysShow: boolean;
    x: number;
    y: number;
    z: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    velocityOffset: number;
    amount: number;
    particle: any;
  };
  game_state_change: /** 1.7 */ {
    reason: number;
    gameMode: number;
  };
  /** Removed in 1.16 */
  spawn_entity_weather: /** 1.7 */ {
    entityId: number;
    type: number;
    x: number;
    y: number;
    z: number;
  };
  open_window: /** 1.7 */ {
    windowId: number;
    inventoryType: number;
    windowTitle: string;
    slotCount: number;
    useProvidedTitle: boolean;
    entityId: number | undefined;
  } | /** 1.8 */ {
    windowId: number;
    inventoryType: string;
    windowTitle: string;
    slotCount: number;
    entityId: number | undefined;
  } | /** 1.14 */ {
    windowId: number;
    inventoryType: number;
    windowTitle: string;
  } | /** 1.20.3 */ {
    windowId: number;
    inventoryType: number;
    windowTitle: any;
  };
  close_window: /** 1.7 */ {
    windowId: number;
  } | /** 1.20.5 */ {
    windowId: any;
  };
  set_slot: /** 1.7 */ {
    windowId: number;
    slot: number;
    item: any;
  } | /** 1.17.1 */ {
    windowId: number;
    stateId: number;
    slot: number;
    item: any;
  } | /** 1.20.5 */ {
    windowId: any;
    stateId: number;
    slot: number;
    item: any;
  };
  window_items: /** 1.7 */ {
    windowId: number;
    items: any[];
  } | /** 1.17.1 */ {
    windowId: number;
    stateId: number;
    items: any[];
    carriedItem: any;
  } | /** 1.20.5 */ {
    windowId: any;
    stateId: number;
    items: any[];
    carriedItem: any;
  };
  craft_progress_bar: /** 1.7 */ {
    windowId: number;
    property: number;
    value: number;
  } | /** 1.20.5 */ {
    windowId: any;
    property: number;
    value: number;
  };
  /** Removed in 1.17 */
  transaction: /** 1.7 */ {
    windowId: number;
    action: number;
    accepted: boolean;
  };
  /** Removed in 1.9.4 */
  update_sign: /** 1.7 */ {
    location: any;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
  map: /** 1.7 */ {
    itemDamage: number;
    data: any;
  } | /** 1.8 */ {
    itemDamage: number;
    scale: number;
    icons: {
    directionAndType: number;
    x: number;
    z: number;
  }[];
    columns: number;
    rows: undefined | number;
    x: undefined | number;
    y: undefined | number;
    data: undefined | any;
  } | /** 1.9 */ {
    itemDamage: number;
    scale: number;
    trackingPosition: boolean;
    icons: {
    directionAndType: number;
    x: number;
    z: number;
  }[];
    columns: number;
    rows: undefined | number;
    x: undefined | number;
    y: undefined | number;
    data: undefined | any;
  } | /** 1.13 */ {
    itemDamage: number;
    scale: number;
    trackingPosition: boolean;
    icons: {
    type: number;
    x: number;
    z: number;
    direction: number;
    displayName: any | null;
  }[];
    columns: number;
    rows: undefined | number;
    x: undefined | number;
    y: undefined | number;
    data: undefined | any;
  } | /** 1.14 */ {
    itemDamage: number;
    scale: number;
    trackingPosition: boolean;
    locked: boolean;
    icons: {
    type: number;
    x: number;
    z: number;
    direction: number;
    displayName: any | null;
  }[];
    columns: number;
    rows: undefined | number;
    x: undefined | number;
    y: undefined | number;
    data: undefined | any;
  } | /** 1.17 */ {
    itemDamage: number;
    scale: number;
    locked: boolean;
    icons: any | null;
    columns: number;
    rows: undefined | number;
    x: undefined | number;
    y: undefined | number;
    data: undefined | any;
  };
  tile_entity_data: /** 1.7 */ {
    location: any;
    action: number;
    nbtData: any;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
    action: number;
    nbtData: any;
  };
  open_sign_entity: /** 1.7 */ {
    location: any;
  } | /** 1.8 */ {
    location: { x: number, y: number, z: number };
  } | /** 1.20 */ {
    location: { x: number, y: number, z: number };
    isFrontText: boolean;
  };
  statistics: /** 1.7 */ {
    entries: {
    name: string;
    value: number;
  }[];
  } | /** 1.13 */ {
    entries: {
    categoryId: number;
    statisticId: number;
    value: number;
  }[];
  };
  player_info: /** 1.7 */ {
    playerName: string;
    online: boolean;
    ping: number;
  } | /** 1.8 */ {
    action: 'add_player' | 'update_game_mode' | 'update_latency' | 'update_display_name' | 'remove_player';
    data: {
    uuid: string;
any
  }[];
  } | /** 1.19.3 */ {
    action: any;
    data: {
    uuid: string;
    player: any;
    chatSession: any;
    gamemode: any;
    listed: any;
    latency: any;
    displayName: any;
  }[];
  } | /** 1.21.3 */ {
    action: any;
    data: {
    uuid: string;
    player: any;
    chatSession: any;
    gamemode: any;
    listed: any;
    latency: any;
    displayName: any;
    listPriority: any;
  }[];
  } | /** 1.21.4 */ {
    action: any;
    data: {
    uuid: string;
    player: any;
    chatSession: any;
    gamemode: any;
    listed: any;
    latency: any;
    displayName: any;
    listPriority: any;
    showHat: any;
  }[];
  };
  abilities: /** 1.7 */ {
    flags: number;
    flyingSpeed: number;
    walkingSpeed: number;
  };
  tab_complete: /** 1.7 */ {
    matches: string[];
  } | /** 1.13 */ {
    transactionId: number;
    start: number;
    length: number;
    matches: {
    match: string;
    tooltip: any | null;
  }[];
  };
  scoreboard_objective: /** 1.7 */ {
    name: string;
    displayText: string;
    action: number;
  } | /** 1.8 */ {
    name: string;
    action: number;
    displayText: string | undefined;
    type: string | undefined;
  } | /** 1.13 */ {
    name: string;
    action: number;
    displayText: string | undefined;
    type: number | undefined;
  } | /** 1.20.3 */ {
    name: string;
    action: number;
    displayText: any | undefined;
    type: number | undefined;
    number_format: any | null | undefined;
    styling: any | undefined;
  };
  scoreboard_score: /** 1.7 */ {
    itemName: string;
    action: number;
    scoreName: undefined | string;
    value: undefined | number;
  } | /** 1.8 */ {
    itemName: string;
    action: number;
    scoreName: string;
    value: undefined | number;
  } | /** 1.20.3 */ {
    itemName: string;
    scoreName: string;
    value: number;
    display_name: any | null;
    number_format: any | null;
    styling: any | undefined;
  };
  scoreboard_display_objective: /** 1.7 */ {
    position: number;
    name: string;
  };
  /** Removed in 1.9 */
  scoreboard_team: /** 1.7 */ {
    team: string;
    mode: number;
    name: string | undefined;
    prefix: string | undefined;
    suffix: string | undefined;
    friendlyFire: number | undefined;
    players: string[] | undefined;
  } | /** 1.8 */ {
    team: string;
    mode: number;
    name: string | undefined;
    prefix: string | undefined;
    suffix: string | undefined;
    friendlyFire: number | undefined;
    nameTagVisibility: string | undefined;
    color: number | undefined;
    players: string[] | undefined;
  };
  custom_payload: /** 1.7 */ {
    channel: string;
    data: any;
  };
  kick_disconnect: /** 1.7 */ {
    reason: string;
  } | /** 1.20.3 */ {
    reason: any;
  };
  packet: /** 1.7 */ {
    name: 'keep_alive' | 'login' | 'chat' | 'update_time' | 'entity_equipment' | 'spawn_position' | 'update_health' | 'respawn' | 'position' | 'held_item_slot' | 'bed' | 'animation' | 'named_entity_spawn' | 'collect' | 'spawn_entity' | 'spawn_entity_living' | 'spawn_entity_painting' | 'spawn_entity_experience_orb' | 'entity_velocity' | 'entity_destroy' | 'entity' | 'rel_entity_move' | 'entity_look' | 'entity_move_look' | 'entity_teleport' | 'entity_head_rotation' | 'entity_status' | 'attach_entity' | 'entity_metadata' | 'entity_effect' | 'remove_entity_effect' | 'experience' | 'update_attributes' | 'map_chunk' | 'multi_block_change' | 'block_change' | 'block_action' | 'block_break_animation' | 'map_chunk_bulk' | 'explosion' | 'world_event' | 'named_sound_effect' | 'world_particles' | 'game_state_change' | 'spawn_entity_weather' | 'open_window' | 'close_window' | 'set_slot' | 'window_items' | 'craft_progress_bar' | 'transaction' | 'update_sign' | 'map' | 'tile_entity_data' | 'open_sign_entity' | 'statistics' | 'player_info' | 'abilities' | 'tab_complete' | 'scoreboard_objective' | 'scoreboard_score' | 'scoreboard_display_objective' | 'scoreboard_team' | 'custom_payload' | 'kick_disconnect';
    params: any;
  } | /** 1.8 */ {
    name: 'keep_alive' | 'login' | 'chat' | 'update_time' | 'entity_equipment' | 'spawn_position' | 'update_health' | 'respawn' | 'position' | 'held_item_slot' | 'bed' | 'animation' | 'named_entity_spawn' | 'collect' | 'spawn_entity' | 'spawn_entity_living' | 'spawn_entity_painting' | 'spawn_entity_experience_orb' | 'entity_velocity' | 'entity_destroy' | 'entity' | 'rel_entity_move' | 'entity_look' | 'entity_move_look' | 'entity_teleport' | 'entity_head_rotation' | 'entity_status' | 'attach_entity' | 'entity_metadata' | 'entity_effect' | 'remove_entity_effect' | 'experience' | 'update_attributes' | 'map_chunk' | 'multi_block_change' | 'block_change' | 'block_action' | 'block_break_animation' | 'map_chunk_bulk' | 'explosion' | 'world_event' | 'named_sound_effect' | 'world_particles' | 'game_state_change' | 'spawn_entity_weather' | 'open_window' | 'close_window' | 'set_slot' | 'window_items' | 'craft_progress_bar' | 'transaction' | 'update_sign' | 'map' | 'tile_entity_data' | 'open_sign_entity' | 'statistics' | 'player_info' | 'abilities' | 'tab_complete' | 'scoreboard_objective' | 'scoreboard_score' | 'scoreboard_display_objective' | 'scoreboard_team' | 'custom_payload' | 'kick_disconnect' | 'difficulty' | 'combat_event' | 'camera' | 'world_border' | 'title' | 'set_compression' | 'playerlist_header' | 'resource_pack_send' | 'update_entity_nbt';
    params: any;
  } | /** 1.9 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'tab_complete' | 'chat' | 'multi_block_change' | 'transaction' | 'close_window' | 'open_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'login' | 'map' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_sign_entity' | 'abilities' | 'combat_event' | 'player_info' | 'position' | 'bed' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'world_border' | 'camera' | 'held_item_slot' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'update_sign' | 'sound_effect' | 'playerlist_header' | 'collect' | 'entity_teleport' | 'entity_update_attributes' | 'entity_effect';
    params: any;
  } | /** 1.9.4 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'tab_complete' | 'chat' | 'multi_block_change' | 'transaction' | 'close_window' | 'open_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'login' | 'map' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_sign_entity' | 'abilities' | 'combat_event' | 'player_info' | 'position' | 'bed' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'world_border' | 'camera' | 'held_item_slot' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'sound_effect' | 'playerlist_header' | 'collect' | 'entity_teleport' | 'entity_update_attributes' | 'entity_effect';
    params: any;
  } | /** 1.12 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'tab_complete' | 'chat' | 'multi_block_change' | 'transaction' | 'close_window' | 'open_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'login' | 'map' | 'entity' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_sign_entity' | 'abilities' | 'combat_event' | 'player_info' | 'position' | 'bed' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'sound_effect' | 'playerlist_header' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect';
    params: any;
  } | /** 1.12.1 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'tab_complete' | 'chat' | 'multi_block_change' | 'transaction' | 'close_window' | 'open_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'login' | 'map' | 'entity' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'position' | 'bed' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'sound_effect' | 'playerlist_header' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect';
    params: any;
  } | /** 1.13 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'multi_block_change' | 'tab_complete' | 'declare_commands' | 'transaction' | 'close_window' | 'open_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'nbt_query_response' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'login' | 'map' | 'entity' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'face_player' | 'position' | 'bed' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'stop_sound' | 'sound_effect' | 'playerlist_header' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.14 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'multi_block_change' | 'tab_complete' | 'declare_commands' | 'transaction' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.14.4 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'multi_block_change' | 'tab_complete' | 'declare_commands' | 'transaction' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags' | 'acknowledge_player_digging';
    params: any;
  } | /** 1.15 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_weather' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'multi_block_change' | 'tab_complete' | 'declare_commands' | 'transaction' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'spawn_position' | 'update_time' | 'title' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.16 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'multi_block_change' | 'tab_complete' | 'declare_commands' | 'transaction' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'update_time' | 'title' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.16.2 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'tab_complete' | 'declare_commands' | 'transaction' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'entity' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'craft_recipe_response' | 'abilities' | 'combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'world_border' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'update_time' | 'title' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.17 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'sculk_vibration_signal' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'destroy_entity' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.17.1 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'sculk_vibration_signal' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.18 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'spawn_entity_living' | 'spawn_entity_painting' | 'named_entity_spawn' | 'sculk_vibration_signal' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.19 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat_preview' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'custom_payload' | 'named_sound_effect' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'should_display_chat_preview' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.19.2 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chat_preview' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'named_sound_effect' | 'hide_message' | 'kick_disconnect' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'message_header' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'should_display_chat_preview' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.19.3 */ {
    name: 'spawn_entity' | 'spawn_entity_experience_orb' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'hide_message' | 'kick_disconnect' | 'profileless_chat' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_remove' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'feature_flags' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: any;
  } | /** 1.19.4 */ {
    name: 'bundle_delimiter' | 'spawn_entity' | 'spawn_entity_experience_orb' | 'named_entity_spawn' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chunk_biomes' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'damage_event' | 'hide_message' | 'kick_disconnect' | 'profileless_chat' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'hurt_animation' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_remove' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'stop_sound' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'feature_flags' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: undefined | any;
  } | /** 1.20.2 */ {
    name: 'bundle_delimiter' | 'spawn_entity' | 'spawn_entity_experience_orb' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chunk_batch_finished' | 'chunk_batch_start' | 'chunk_biomes' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'damage_event' | 'hide_message' | 'kick_disconnect' | 'profileless_chat' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'hurt_animation' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'ping_response' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_remove' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'resource_pack_send' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'start_configuration' | 'stop_sound' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: undefined | any;
  } | /** 1.20.3 */ {
    name: 'bundle_delimiter' | 'spawn_entity' | 'spawn_entity_experience_orb' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chunk_batch_finished' | 'chunk_batch_start' | 'chunk_biomes' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'damage_event' | 'hide_message' | 'kick_disconnect' | 'profileless_chat' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'hurt_animation' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'ping_response' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_remove' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'reset_score' | 'remove_resource_pack' | 'add_resource_pack' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'start_configuration' | 'stop_sound' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'set_ticking_state' | 'step_tick' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: undefined | any;
  } | /** 1.20.5 */ {
    name: 'bundle_delimiter' | 'spawn_entity' | 'spawn_entity_experience_orb' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chunk_batch_finished' | 'chunk_batch_start' | 'chunk_biomes' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'cookie_request' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'damage_event' | 'debug_sample' | 'hide_message' | 'kick_disconnect' | 'profileless_chat' | 'entity_status' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'hurt_animation' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'ping_response' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_remove' | 'player_info' | 'face_player' | 'position' | 'unlock_recipes' | 'entity_destroy' | 'remove_entity_effect' | 'reset_score' | 'remove_resource_pack' | 'add_resource_pack' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'held_item_slot' | 'update_view_position' | 'update_view_distance' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'scoreboard_objective' | 'set_passengers' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'start_configuration' | 'stop_sound' | 'store_cookie' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'set_ticking_state' | 'step_tick' | 'transfer' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags';
    params: undefined | any;
  } | /** 1.21.3 */ {
    name: 'bundle_delimiter' | 'spawn_entity' | 'spawn_entity_experience_orb' | 'animation' | 'statistics' | 'acknowledge_player_digging' | 'block_break_animation' | 'tile_entity_data' | 'block_action' | 'block_change' | 'boss_bar' | 'difficulty' | 'chunk_batch_finished' | 'chunk_batch_start' | 'chunk_biomes' | 'clear_titles' | 'tab_complete' | 'declare_commands' | 'close_window' | 'window_items' | 'craft_progress_bar' | 'set_slot' | 'cookie_request' | 'set_cooldown' | 'chat_suggestions' | 'custom_payload' | 'damage_event' | 'debug_sample' | 'hide_message' | 'kick_disconnect' | 'profileless_chat' | 'entity_status' | 'sync_entity_position' | 'explosion' | 'unload_chunk' | 'game_state_change' | 'open_horse_window' | 'hurt_animation' | 'initialize_world_border' | 'keep_alive' | 'map_chunk' | 'world_event' | 'world_particles' | 'update_light' | 'login' | 'map' | 'trade_list' | 'rel_entity_move' | 'entity_move_look' | 'move_minecart' | 'entity_look' | 'vehicle_move' | 'open_book' | 'open_window' | 'open_sign_entity' | 'ping' | 'ping_response' | 'craft_recipe_response' | 'abilities' | 'player_chat' | 'end_combat_event' | 'enter_combat_event' | 'death_combat_event' | 'player_remove' | 'player_info' | 'face_player' | 'position' | 'player_rotation' | 'recipe_book_add' | 'recipe_book_remove' | 'recipe_book_settings' | 'entity_destroy' | 'remove_entity_effect' | 'reset_score' | 'remove_resource_pack' | 'add_resource_pack' | 'respawn' | 'entity_head_rotation' | 'multi_block_change' | 'select_advancement_tab' | 'server_data' | 'action_bar' | 'world_border_center' | 'world_border_lerp_size' | 'world_border_size' | 'world_border_warning_delay' | 'world_border_warning_reach' | 'camera' | 'update_view_position' | 'update_view_distance' | 'set_cursor_item' | 'spawn_position' | 'scoreboard_display_objective' | 'entity_metadata' | 'attach_entity' | 'entity_velocity' | 'entity_equipment' | 'experience' | 'update_health' | 'held_item_slot' | 'scoreboard_objective' | 'set_passengers' | 'set_player_inventory' | 'teams' | 'scoreboard_score' | 'simulation_distance' | 'set_title_subtitle' | 'update_time' | 'set_title_text' | 'set_title_time' | 'entity_sound_effect' | 'sound_effect' | 'start_configuration' | 'stop_sound' | 'store_cookie' | 'system_chat' | 'playerlist_header' | 'nbt_query_response' | 'collect' | 'entity_teleport' | 'set_ticking_state' | 'step_tick' | 'transfer' | 'advancements' | 'entity_update_attributes' | 'entity_effect' | 'declare_recipes' | 'tags' | 'set_projectile_power' | 'custom_report_details' | 'server_links';
    params: undefined | any;
  };
  difficulty: /** 1.8 */ {
    difficulty: number;
  } | /** 1.14 */ {
    difficulty: number;
    difficultyLocked: boolean;
  };
  /** Removed in 1.17 */
  combat_event: /** 1.8 */ {
    event: number;
    duration: number | undefined;
    playerId: number | undefined;
    entityId: number | undefined;
    message: string | undefined;
  };
  camera: /** 1.8 */ {
    cameraId: number;
  };
  /** Removed in 1.17 */
  world_border: /** 1.8 */ {
    action: number;
    radius: number | undefined;
    x: number | undefined;
    z: number | undefined;
    old_radius: number | undefined;
    new_radius: number | undefined;
    speed: any | undefined;
    portalBoundary: number | undefined;
    warning_time: number | undefined;
    warning_blocks: number | undefined;
  };
  /** Removed in 1.17 */
  title: /** 1.8 */ {
    action: number;
    text: string | undefined;
    fadeIn: number | undefined;
    stay: number | undefined;
    fadeOut: number | undefined;
  };
  /** Removed in 1.9 */
  set_compression: /** 1.8 */ {
    threshold: number;
  };
  playerlist_header: /** 1.8 */ {
    header: string;
    footer: string;
  } | /** 1.20.3 */ {
    header: any;
    footer: any;
  };
  /** Removed in 1.20.3 */
  resource_pack_send: /** 1.8 */ {
    url: string;
    hash: string;
  } | /** 1.17 */ {
    url: string;
    hash: string;
    forced: boolean;
    promptMessage: any | null;
  };
  /** Removed in 1.9 */
  update_entity_nbt: /** 1.8 */ {
    entityId: number;
    tag: any;
  };
  boss_bar: /** 1.9 */ {
    entityUUID: string;
    action: number;
    title: string | undefined;
    health: number | undefined;
    color: number | undefined;
    dividers: number | undefined;
    flags: number | undefined;
  } | /** 1.20.3 */ {
    entityUUID: string;
    action: number;
    title: any | undefined;
    health: number | undefined;
    color: number | undefined;
    dividers: number | undefined;
    flags: number | undefined;
  };
  set_cooldown: /** 1.9 */ {
    itemID: number;
    cooldownTicks: number;
  } | /** 1.21.3 */ {
    cooldownGroup: string;
    cooldownTicks: number;
  };
  unload_chunk: /** 1.9 */ {
    chunkX: number;
    chunkZ: number;
  } | /** 1.20.2 */ {
    chunkZ: number;
    chunkX: number;
  };
  vehicle_move: /** 1.9 */ {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
  };
  set_passengers: /** 1.9 */ {
    entityId: number;
    passengers: number[];
  };
  teams: /** 1.9 */ {
    team: string;
    mode: number;
    name: string | undefined;
    prefix: string | undefined;
    suffix: string | undefined;
    friendlyFire: number | undefined;
    nameTagVisibility: string | undefined;
    collisionRule: string | undefined;
    color: number | undefined;
    players: string[] | undefined;
  } | /** 1.13 */ {
    team: string;
    mode: number;
    name: string | undefined;
    friendlyFire: number | undefined;
    nameTagVisibility: string | undefined;
    collisionRule: string | undefined;
    formatting: number | undefined;
    prefix: string | undefined;
    suffix: string | undefined;
    players: string[] | undefined;
  } | /** 1.20.3 */ {
    team: string;
    mode: number;
    name: any | undefined;
    friendlyFire: number | undefined;
    nameTagVisibility: string | undefined;
    collisionRule: string | undefined;
    formatting: number | undefined;
    prefix: any | undefined;
    suffix: any | undefined;
    players: string[] | undefined;
  };
  sound_effect: /** 1.9 */ {
    soundId: number;
    soundCategory: number;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;
  } | /** 1.19 */ {
    soundId: number;
    soundCategory: number;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;
    seed: bigint;
  } | /** 1.19.3 */ {
    sound: any;
    soundCategory: any;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;
    seed: bigint;
  };
  entity_update_attributes: /** 1.9 */ {
    entityId: number;
    properties: {
    key: string;
    value: number;
    modifiers: {
    uuid: string;
    amount: number;
    operation: number;
  }[];
  }[];
  } | /** 1.17 */ {
    entityId: number;
    properties: {
    name: string;
    value: number;
    modifiers: {
    uuid: string;
    amount: number;
    operation: number;
  }[];
  }[];
  } | /** 1.20.5 */ {
    entityId: number;
    properties: {
    key: 'generic.armor' | 'generic.armor_toughness' | 'generic.attack_damage' | 'generic.attack_knockback' | 'generic.attack_speed' | 'player.block_break_speed' | 'player.block_interaction_range' | 'player.entity_interaction_range' | 'generic.fall_damage_multiplier' | 'generic.flying_speed' | 'generic.follow_range' | 'generic.gravity' | 'generic.jump_strength' | 'generic.knockback_resistance' | 'generic.luck' | 'generic.max_absorption' | 'generic.max_health' | 'generic.movement_speed' | 'generic.safe_fall_distance' | 'generic.scale' | 'zombie.spawn_reinforcements' | 'generic.step_height';
    value: number;
    modifiers: {
    uuid: string;
    amount: number;
    operation: number;
  }[];
  }[];
  };
  advancements: /** 1.12 */ {
    reset: boolean;
    advancementMapping: {
    key: string;
    value: {
    parentId: any | null;
    displayData: any | null;
    criteria: {
    key: string;
    value: undefined;
  }[];
    requirements: string[][];
  };
  }[];
    identifiers: string[];
    progressMapping: {
    key: string;
    value: {
    criterionIdentifier: string;
    criterionProgress: any | null;
  }[];
  }[];
  } | /** 1.20 */ {
    reset: boolean;
    advancementMapping: {
    key: string;
    value: {
    parentId: any | null;
    displayData: any | null;
    criteria: {
    key: string;
    value: undefined;
  }[];
    requirements: string[][];
    sendsTelemtryData: boolean;
  };
  }[];
    identifiers: string[];
    progressMapping: {
    key: string;
    value: {
    criterionIdentifier: string;
    criterionProgress: any | null;
  }[];
  }[];
  } | /** 1.20.2 */ {
    reset: boolean;
    advancementMapping: {
    key: string;
    value: {
    parentId: any | null;
    displayData: any | null;
    requirements: string[][];
    sendsTelemtryData: boolean;
  };
  }[];
    identifiers: string[];
    progressMapping: {
    key: string;
    value: {
    criterionIdentifier: string;
    criterionProgress: any | null;
  }[];
  }[];
  };
  /** Removed in 1.21.3 */
  unlock_recipes: /** 1.12 */ {
    action: number;
    craftingBookOpen: boolean;
    filteringCraftable: boolean;
    recipes1: number[];
    recipes2: number[] | undefined;
  } | /** 1.13 */ {
    action: number;
    craftingBookOpen: boolean;
    filteringCraftable: boolean;
    smeltingBookOpen: boolean;
    filteringSmeltable: boolean;
    recipes1: string[];
    recipes2: string[] | undefined;
  } | /** 1.16.2 */ {
    action: number;
    craftingBookOpen: boolean;
    filteringCraftable: boolean;
    smeltingBookOpen: boolean;
    filteringSmeltable: boolean;
    blastFurnaceOpen: boolean;
    filteringBlastFurnace: boolean;
    smokerBookOpen: boolean;
    filteringSmoker: boolean;
    recipes1: string[];
    recipes2: string[] | undefined;
  };
  select_advancement_tab: /** 1.12 */ {
    id: any | null;
  };
  craft_recipe_response: /** 1.12.1 */ {
    windowId: number;
    recipe: number;
  } | /** 1.13 */ {
    windowId: number;
    recipe: string;
  } | /** 1.20.5 */ {
    windowId: any;
    recipe: string;
  } | /** 1.21.3 */ {
    windowId: any;
    recipeDisplay: any;
  };
  declare_commands: /** 1.13 */ {
    nodes: any[];
    rootIndex: number;
  };
  face_player: /** 1.13 */ {
    feet_eyes: number;
    x: number;
    y: number;
    z: number;
    isEntity: boolean;
    entityId: number | undefined;
    entity_feet_eyes: string | undefined;
  } | /** 1.20.3 */ {
    feet_eyes: number;
    x: number;
    y: number;
    z: number;
    isEntity: boolean;
    entityId: number | undefined;
    entity_feet_eyes: number | undefined;
  };
  nbt_query_response: /** 1.13 */ {
    transactionId: number;
    nbt: any;
  };
  stop_sound: /** 1.13 */ {
    flags: number;
    source: number | undefined;
    sound: string | undefined;
  };
  declare_recipes: /** 1.13 */ {
    recipes: {
    recipeId: string;
    type: string;
    data: {
    group: string;
    ingredients: any[];
    result: any;
  } | {
    width: number;
    height: number;
    group: string;
    ingredients: any[][];
    result: any;
  } | undefined | {
    group: string;
    ingredient: any;
    result: any;
    experience: number;
    cookTime: number;
  };
  }[];
  } | /** 1.14 */ {
    recipes: {
    type: string;
    recipeId: string;
    data: {
    group: string;
    ingredients: any[];
    result: any;
  } | {
    width: number;
    height: number;
    group: string;
    ingredients: any[][];
    result: any;
  } | undefined | any | {
    group: string;
    ingredient: any;
    result: any;
  };
  }[];
  } | /** 1.16 */ {
    recipes: {
    type: string;
    recipeId: string;
    data: {
    group: string;
    ingredients: any[];
    result: any;
  } | {
    width: number;
    height: number;
    group: string;
    ingredients: any[][];
    result: any;
  } | undefined | any | {
    group: string;
    ingredient: any;
    result: any;
  } | {
    base: any;
    addition: any;
    result: any;
  };
  }[];
  } | /** 1.19.3 */ {
    recipes: {
    type: string;
    recipeId: string;
    data: {
    group: string;
    category: number;
    ingredients: any[];
    result: any;
  } | {
    width: number;
    height: number;
    group: string;
    category: number;
    ingredients: any[][];
    result: any;
  } | any | {
    group: string;
    ingredient: any;
    result: any;
  } | {
    base: any;
    addition: any;
    result: any;
  };
  }[];
  } | /** 1.19.4 */ {
    recipes: {
    type: string;
    recipeId: string;
    data: {
    group: string;
    category: number;
    ingredients: any[];
    result: any;
  } | {
    width: number;
    height: number;
    group: string;
    category: number;
    ingredients: any[][];
    result: any;
    showNotification: boolean;
  } | any | {
    group: string;
    ingredient: any;
    result: any;
  } | {
    base: any;
    addition: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
  };
  }[];
  } | /** 1.20 */ {
    recipes: {
    type: string;
    recipeId: string;
    data: {
    group: string;
    category: number;
    ingredients: any[];
    result: any;
  } | {
    width: number;
    height: number;
    group: string;
    category: number;
    ingredients: any[][];
    result: any;
    showNotification: boolean;
  } | any | {
    group: string;
    ingredient: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
  };
  }[];
  } | /** 1.20.3 */ {
    recipes: {
    type: string;
    recipeId: string;
    data: {
    group: string;
    category: number;
    ingredients: any[];
    result: any;
  } | {
    group: string;
    category: number;
    width: number;
    height: number;
    ingredients: any[][];
    result: any;
    showNotification: boolean;
  } | any | {
    group: string;
    ingredient: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
  };
  }[];
  } | /** 1.20.5 */ {
    recipes: {
    name: string;
    type: 'minecraft:crafting_shaped' | 'minecraft:crafting_shapeless' | 'minecraft:crafting_special_armordye' | 'minecraft:crafting_special_bookcloning' | 'minecraft:crafting_special_mapcloning' | 'minecraft:crafting_special_mapextending' | 'minecraft:crafting_special_firework_rocket' | 'minecraft:crafting_special_firework_star' | 'minecraft:crafting_special_firework_star_fade' | 'minecraft:crafting_special_tippedarrow' | 'minecraft:crafting_special_bannerduplicate' | 'minecraft:crafting_special_shielddecoration' | 'minecraft:crafting_special_shulkerboxcoloring' | 'minecraft:crafting_special_suspiciousstew' | 'minecraft:crafting_special_repairitem' | 'minecraft:smelting' | 'minecraft:blasting' | 'minecraft:smoking' | 'minecraft:campfire_cooking' | 'minecraft:stonecutting' | 'minecraft:smithing_transform' | 'minecraft:smithing_trim' | 'minecraft:crafting_decorated_pot';
    data: {
    group: string;
    category: number;
    ingredients: any[];
    result: any;
  } | {
    group: string;
    category: number;
    gridWidth: number;
    gridHeight: number;
    ingredients: any[][];
    result: any;
    showNotification: boolean;
  } | any | {
    group: string;
    ingredient: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
    result: any;
  } | {
    template: any;
    base: any;
    addition: any;
  };
  }[];
  } | /** 1.21.3 */ {
    recipes: {
    name: string;
    items: number[];
  }[];
    stoneCutterRecipes: {
    input: any;
    slotDisplay: any;
  }[];
  };
  tags: /** 1.13 */ {
    blockTags: any;
    itemTags: any;
    fluidTags: any;
  } | /** 1.14 */ {
    blockTags: any;
    itemTags: any;
    fluidTags: any;
    entityTags: any;
  } | /** 1.17 */ {
    tags: {
    tagType: string;
    tags: any;
  }[];
  };
  open_horse_window: /** 1.14 */ {
    windowId: number;
    nbSlots: number;
    entityId: number;
  } | /** 1.20.5 */ {
    windowId: any;
    nbSlots: number;
    entityId: number;
  };
  update_light: /** 1.14 */ {
    chunkX: number;
    chunkZ: number;
    skyLightMask: number;
    blockLightMask: number;
    emptySkyLightMask: number;
    emptyBlockLightMask: number;
    data: any;
  } | /** 1.16 */ {
    chunkX: number;
    chunkZ: number;
    trustEdges: boolean;
    skyLightMask: number;
    blockLightMask: number;
    emptySkyLightMask: number;
    emptyBlockLightMask: number;
    data: any;
  } | /** 1.17 */ {
    chunkX: number;
    chunkZ: number;
    trustEdges: boolean;
    skyLightMask: bigint[];
    blockLightMask: bigint[];
    emptySkyLightMask: bigint[];
    emptyBlockLightMask: bigint[];
    skyLight: number[][];
    blockLight: number[][];
  } | /** 1.20 */ {
    chunkX: number;
    chunkZ: number;
    skyLightMask: bigint[];
    blockLightMask: bigint[];
    emptySkyLightMask: bigint[];
    emptyBlockLightMask: bigint[];
    skyLight: number[][];
    blockLight: number[][];
  };
  trade_list: /** 1.14 */ {
    windowId: number;
    trades: {
    inputItem1: any;
    outputItem: any;
    inputItem2: any | null;
    tradeDisabled: boolean;
    nbTradeUses: number;
    maximumNbTradeUses: number;
    xp: number;
    specialPrice: number;
    priceMultiplier: number;
  }[];
    villagerLevel: number;
    experience: number;
    isRegularVillager: boolean;
  } | /** 1.14.3 */ {
    windowId: number;
    trades: {
    inputItem1: any;
    outputItem: any;
    inputItem2: any | null;
    tradeDisabled: boolean;
    nbTradeUses: number;
    maximumNbTradeUses: number;
    xp: number;
    specialPrice: number;
    priceMultiplier: number;
  }[];
    villagerLevel: number;
    experience: number;
    isRegularVillager: boolean;
    canRestock: boolean;
  } | /** 1.14.4 */ {
    windowId: number;
    trades: {
    inputItem1: any;
    outputItem: any;
    inputItem2: any | null;
    tradeDisabled: boolean;
    nbTradeUses: number;
    maximumNbTradeUses: number;
    xp: number;
    specialPrice: number;
    priceMultiplier: number;
    demand: number;
  }[];
    villagerLevel: number;
    experience: number;
    isRegularVillager: boolean;
    canRestock: boolean;
  } | /** 1.19 */ {
    windowId: number;
    trades: {
    inputItem1: any;
    outputItem: any;
    inputItem2: any;
    tradeDisabled: boolean;
    nbTradeUses: number;
    maximumNbTradeUses: number;
    xp: number;
    specialPrice: number;
    priceMultiplier: number;
    demand: number;
  }[];
    villagerLevel: number;
    experience: number;
    isRegularVillager: boolean;
    canRestock: boolean;
  } | /** 1.20.5 */ {
    windowId: any;
    trades: {
    inputItem1: {
    itemId: number;
    itemCount: number;
    addedComponentCount: number;
    components: any[];
  };
    outputItem: any;
    inputItem2: any | null;
    tradeDisabled: boolean;
    nbTradeUses: number;
    maximumNbTradeUses: number;
    xp: number;
    specialPrice: number;
    priceMultiplier: number;
    demand: number;
  }[];
    villagerLevel: number;
    experience: number;
    isRegularVillager: boolean;
    canRestock: boolean;
  };
  open_book: /** 1.14 */ {
    hand: number;
  };
  update_view_position: /** 1.14 */ {
    chunkX: number;
    chunkZ: number;
  };
  update_view_distance: /** 1.14 */ {
    viewDistance: number;
  };
  entity_sound_effect: /** 1.14 */ {
    soundId: number;
    soundCategory: number;
    entityId: number;
    volume: number;
    pitch: number;
  } | /** 1.19 */ {
    soundId: number;
    soundCategory: number;
    entityId: number;
    volume: number;
    pitch: number;
    seed: bigint;
  } | /** 1.19.3 */ {
    soundId: number;
    soundEvent: {
    resource: string;
    range: any | null;
  } | undefined;
    soundCategory: any;
    entityId: number;
    volume: number;
    pitch: number;
    seed: bigint;
  } | /** 1.20.5 */ {
    sound: any;
    soundCategory: any;
    entityId: number;
    volume: number;
    pitch: number;
    seed: bigint;
  };
  acknowledge_player_digging: /** 1.14.4 */ {
    location: { x: number, y: number, z: number };
    block: number;
    status: number;
    successful: boolean;
  } | /** 1.19 */ {
    sequenceId: number;
  };
  end_combat_event: /** 1.17 */ {
    duration: number;
    entityId: number;
  } | /** 1.20 */ {
    duration: number;
  };
  enter_combat_event: /** 1.17 */ {

  };
  death_combat_event: /** 1.17 */ {
    playerId: number;
    entityId: number;
    message: string;
  } | /** 1.20 */ {
    playerId: number;
    message: string;
  } | /** 1.20.3 */ {
    playerId: number;
    message: any;
  };
  /** Removed in 1.17.1 */
  destroy_entity: /** 1.17 */ {
    entityId: number;
  };
  /** Removed in 1.19 */
  sculk_vibration_signal: /** 1.17 */ {
    sourcePosition: { x: number, y: number, z: number };
    destinationIdentifier: string;
    destination: { x: number, y: number, z: number } | number | undefined;
    arrivalTicks: number;
  };
  clear_titles: /** 1.17 */ {
    reset: boolean;
  };
  initialize_world_border: /** 1.17 */ {
    x: number;
    z: number;
    oldDiameter: number;
    newDiameter: number;
    speed: any;
    portalTeleportBoundary: number;
    warningBlocks: number;
    warningTime: number;
  } | /** 1.19 */ {
    x: number;
    z: number;
    oldDiameter: number;
    newDiameter: number;
    speed: number;
    portalTeleportBoundary: number;
    warningBlocks: number;
    warningTime: number;
  };
  action_bar: /** 1.17 */ {
    text: string;
  } | /** 1.20.3 */ {
    text: any;
  };
  world_border_center: /** 1.17 */ {
    x: number;
    z: number;
  };
  world_border_lerp_size: /** 1.17 */ {
    oldDiameter: number;
    newDiameter: number;
    speed: any;
  } | /** 1.19 */ {
    oldDiameter: number;
    newDiameter: number;
    speed: number;
  };
  world_border_size: /** 1.17 */ {
    diameter: number;
  };
  world_border_warning_delay: /** 1.17 */ {
    warningTime: number;
  };
  world_border_warning_reach: /** 1.17 */ {
    warningBlocks: number;
  };
  ping: /** 1.17 */ {
    id: number;
  };
  set_title_subtitle: /** 1.17 */ {
    text: string;
  } | /** 1.20.3 */ {
    text: any;
  };
  set_title_text: /** 1.17 */ {
    text: string;
  } | /** 1.20.3 */ {
    text: any;
  };
  set_title_time: /** 1.17 */ {
    fadeIn: number;
    stay: number;
    fadeOut: number;
  };
  simulation_distance: /** 1.18 */ {
    distance: number;
  };
  /** Removed in 1.19.3 */
  chat_preview: /** 1.19 */ {
    queryId: number;
    message: any | null;
  };
  player_chat: /** 1.19 */ {
    signedChatContent: string;
    unsignedChatContent: any | null;
    type: number;
    senderUuid: string;
    senderName: string;
    senderTeam: any | null;
    timestamp: bigint;
    salt: bigint;
    signature: any;
  } | /** 1.19.2 */ {
    previousSignature: any | null;
    senderUuid: string;
    signature: any;
    plainMessage: string;
    formattedMessage: any | null;
    timestamp: bigint;
    salt: bigint;
    previousMessages: any;
    unsignedChatContent: any | null;
    filterType: number;
    filterTypeMask: bigint[] | undefined;
    type: number;
    networkName: string;
    networkTargetName: any | null;
  } | /** 1.19.3 */ {
    senderUuid: string;
    index: number;
    signature: any | null;
    plainMessage: string;
    timestamp: bigint;
    salt: bigint;
    previousMessages: any;
    unsignedChatContent: any | null;
    filterType: number;
    filterTypeMask: bigint[] | undefined;
    type: number;
    networkName: string;
    networkTargetName: any | null;
  } | /** 1.20.3 */ {
    senderUuid: string;
    index: number;
    signature: any | null;
    plainMessage: string;
    timestamp: bigint;
    salt: bigint;
    previousMessages: any;
    unsignedChatContent: any | null;
    filterType: number;
    filterTypeMask: bigint[] | undefined;
    type: number;
    networkName: any;
    networkTargetName: any | null;
  } | /** 1.21.1 */ {
    senderUuid: string;
    index: number;
    signature: any | null;
    plainMessage: string;
    timestamp: bigint;
    salt: bigint;
    previousMessages: any;
    unsignedChatContent: any | null;
    filterType: number;
    filterTypeMask: bigint[] | undefined;
    type: any;
    networkName: any;
    networkTargetName: any | null;
  };
  /** Removed in 1.19.3 */
  should_display_chat_preview: /** 1.19 */ {
    should_display_chat_preview: boolean;
  };
  system_chat: /** 1.19 */ {
    content: string;
    type: number;
  } | /** 1.19.2 */ {
    content: string;
    isActionBar: boolean;
  } | /** 1.20.3 */ {
    content: any;
    isActionBar: boolean;
  };
  server_data: /** 1.19 */ {
    motd: any | null;
    icon: any | null;
    previewsChat: boolean;
  } | /** 1.19.2 */ {
    motd: any | null;
    icon: any | null;
    previewsChat: boolean;
    enforcesSecureChat: boolean;
  } | /** 1.19.3 */ {
    motd: any | null;
    icon: any | null;
    enforcesSecureChat: boolean;
  } | /** 1.19.4 */ {
    motd: string;
    iconBytes: any | null;
    enforcesSecureChat: boolean;
  } | /** 1.20.3 */ {
    motd: any;
    iconBytes: any | null;
    enforcesSecureChat: boolean;
  } | /** 1.20.5 */ {
    motd: any;
    iconBytes: any | null;
  };
  chat_suggestions: /** 1.19.2 */ {
    action: number;
    entries: string[];
  };
  hide_message: /** 1.19.2 */ {
    signature: any;
  } | /** 1.19.3 */ {
    id: number;
    signature: any | undefined;
  };
  /** Removed in 1.19.3 */
  message_header: /** 1.19.2 */ {
    previousSignature: any | null;
    senderUuid: string;
    signature: any;
    messageHash: any;
  };
  profileless_chat: /** 1.19.3 */ {
    message: string;
    type: number;
    name: string;
    target: any | null;
  } | /** 1.20.3 */ {
    message: any;
    type: number;
    name: any;
    target: any | null;
  } | /** 1.21.1 */ {
    message: any;
    type: any;
    name: any;
    target: any | null;
  };
  player_remove: /** 1.19.3 */ {
    players: string[];
  };
  /** Removed in 1.20.2 */
  feature_flags: /** 1.19.3 */ {
    features: string[];
  };
  chunk_biomes: /** 1.19.4 */ {
    biomes: {
    position: any;
    data: any;
  }[];
  };
  damage_event: /** 1.19.4 */ {
    entityId: number;
    sourceTypeId: number;
    sourceCauseId: number;
    sourceDirectId: number;
    sourcePosition: any | null;
  };
  hurt_animation: /** 1.19.4 */ {
    entityId: number;
    yaw: number;
  };
  chunk_batch_finished: /** 1.20.2 */ {
    batchSize: number;
  };
  chunk_batch_start: /** 1.20.2 */ {

  };
  ping_response: /** 1.20.2 */ {
    id: bigint;
  };
  start_configuration: /** 1.20.2 */ {

  };
  reset_score: /** 1.20.3 */ {
    entity_name: string;
    objective_name: any | null;
  };
  /** Removed in 1.20.5 */
  remove_resource_pack: /** 1.20.3 */ {
    uuid: any | null;
  };
  /** Removed in 1.20.5 */
  add_resource_pack: /** 1.20.3 */ {
    uuid: string;
    url: string;
    hash: string;
    forced: boolean;
    promptMessage: any | null;
  };
  set_ticking_state: /** 1.20.3 */ {
    tick_rate: number;
    is_frozen: boolean;
  };
  step_tick: /** 1.20.3 */ {
    tick_steps: number;
  };
  SpawnInfo: /** 1.20.5 */ {
    dimension: number;
    name: string;
    hashedSeed: bigint;
    gamemode: 'survival' | 'creative' | 'adventure' | 'spectator';
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    death: any | null;
    portalCooldown: number;
  } | /** 1.21.3 */ {
    dimension: number;
    name: string;
    hashedSeed: bigint;
    gamemode: 'survival' | 'creative' | 'adventure' | 'spectator';
    previousGamemode: number;
    isDebug: boolean;
    isFlat: boolean;
    death: any | null;
    portalCooldown: number;
    seaLevel: number;
  };
  debug_sample: /** 1.20.5 */ {
    sample: bigint[];
    type: number;
  };
  ChatType: /** 1.20.5 */ {
    translationKey: string;
    parameters: any[];
    style: any;
  };
  ChatTypes: /** 1.20.5 */ {
    chat: any;
    narration: any;
  };
  set_projectile_power: /** 1.20.5 */ {
    id: number;
    power: any;
  } | /** 1.21.1 */ {
    id: number;
    accelerationPower: number;
  };
  SlotDisplay: /** 1.21.3 */ {
    type: 'empty' | 'any_fuel' | 'item' | 'item_stack' | 'tag' | 'smithing_trim' | 'with_remainder' | 'composite';
    data: undefined | number | any | string | {
    base: any;
    material: any;
    pattern: any;
  } | {
    input: any;
    remainder: any;
  } | any[];
  };
  RecipeDisplay: /** 1.21.3 */ {
    type: 'crafting_shapeless' | 'crafting_shaped' | 'furnace' | 'stonecutter' | 'smithing';
    data: {
    ingredients: any[];
    result: any;
    craftingStation: any;
  } | {
    width: number;
    height: number;
    ingredients: any[];
    result: any;
    craftingStation: any;
  } | {
    ingredient: any;
    fuel: any;
    result: any;
    craftingStation: any;
    duration: number;
    experience: number;
  } | {
    ingredient: any;
    result: any;
    craftingStation: any;
  } | {
    template: any;
    base: any;
    addition: any;
    result: any;
    craftingStation: any;
  };
  };
  sync_entity_position: /** 1.21.3 */ {
    entityId: number;
    x: number;
    y: number;
    z: number;
    dx: number;
    dy: number;
    dz: number;
    yaw: number;
    pitch: number;
    onGround: boolean;
  };
  move_minecart: /** 1.21.3 */ {
    entityId: number;
    steps: {
    position: any;
    movement: any;
    yaw: number;
    pitch: number;
    weight: number;
  }[];
  };
  player_rotation: /** 1.21.3 */ {
    yaw: number;
    pitch: number;
  };
  recipe_book_add: /** 1.21.3 */ {
    entries: {
    recipe: {
    displayId: number;
    display: any;
    group: any;
    category: 'crafting_building_blocks' | 'crafting_redstone' | 'crafting_equipment' | 'crafting_misc' | 'furnace_food' | 'furnace_blocks' | 'furnace_misc' | 'blast_furnace_blocks' | 'blast_furnace_misc' | 'smoker_food' | 'stonecutter' | 'smithing' | 'campfire';
    craftingRequirements: any | null;
  };
    flags: any;
  }[];
    replace: boolean;
  };
  recipe_book_remove: /** 1.21.3 */ {
    recipeIds: number[];
  };
  recipe_book_settings: /** 1.21.3 */ {
    craftingGuiOpen: boolean;
    craftingFilteringCraftable: boolean;
    smeltingGuiOpen: boolean;
    smeltingFilteringCraftable: boolean;
    blastGuiOpen: boolean;
    blastFilteringCraftable: boolean;
    smokerGuiOpen: boolean;
    smokerFilteringCraftable: boolean;
  };
  set_cursor_item: /** 1.21.3 */ {
    contents: any | null;
  };
  set_player_inventory: /** 1.21.3 */ {
    slotId: number;
    contents: any | null;
  };
}

