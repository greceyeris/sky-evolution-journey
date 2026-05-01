ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_table
    // 添加 minecraft:iron_ingot 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "minecraft:iron_ingot",
        [Fluid.of("gtceu:iron", 144), "createmetallurgy:graphite_ingot_mold"],
        200,
    );
});
