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

    // 添加 minecraft:magma_block 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "minecraft:magma_block",
        [Fluid.of("minecraft:lava", 500), "minecraft:blackstone"],
        200,
        true,
    );

    // 添加 minecraft:netherrack 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "minecraft:netherrack",
        [Fluid.of("minecraft:water", 1000), "minecraft:magma_block"],
        200,
        true,
    );
});
