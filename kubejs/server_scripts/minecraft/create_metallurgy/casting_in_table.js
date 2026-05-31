ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_table
    // 添加 minecraft:iron_ingot 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "minecraft:iron_ingot",
        [Fluid.of("gtceu:iron", 144), "gtceu:ingot_casting_mold"],
        150,
    );

    // 添加 minecraft:paper 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "minecraft:paper",
        [Fluid.of("minecraft:water", 125), "gtceu:paper_dust"],
        100,
        true,
    );

    // 添加 minecraft:copper_ingot 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "minecraft:copper_ingot",
        [Fluid.of("gtceu:copper", 144), "gtceu:ingot_casting_mold"],
        150,
    );
});
