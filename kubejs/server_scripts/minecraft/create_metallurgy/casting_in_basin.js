ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_basin
    // 添加 minecraft:copper_block 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "minecraft:copper_block",
        Fluid.of("gtceu:copper", 1296),
        200,
    );

    // 添加 minecraft:iron_block 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "minecraft:iron_block",
        Fluid.of("gtceu:iron", 1296),
        200,
    );
});
