LootJS.modifiers((event) => {
    // modifier_loot
    // 修改 minecraft:clay 的 loot
    event
        .addBlockLootModifier("minecraft:clay")
        .removeLoot("minecraft:clay_ball")
        .addLoot("minecraft:clay");
});
