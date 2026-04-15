LootJS.modifiers((event) => {
    // modifier_loot
    // 修改 minecraft:clay 的 loot
    event
        .addBlockLootModifier("minecraft:clay")
        .removeLoot("minecraft:clay_ball")
        .addLoot("minecraft:clay");

    // 修改 minecraft:campfire 的 loot
    event
        .addBlockLootModifier("minecraft:campfire")
        .removeLoot("minecraft:charcoal");

    // 修改 minecraft:grass 的 loot
    event
        .addBlockLootModifier("minecraft:grass")
        .removeLoot("minecraft:charcoal");

    // 修改 minecraft:tall_grass 的 loot
    event
        .addBlockLootModifier("minecraft:tall_grass")
        .removeLoot("minecraft:charcoal");
});
