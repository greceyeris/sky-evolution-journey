ServerEvents.recipes((event) => {
    // 添加配方
    // mana_infusion
    // 添加 minecraft:ender_pearl 的配方
    event.recipes.botania.mana_infusion(
        "minecraft:ender_pearl",
        "minecraft:slime_ball",
        8000,
    );
});
