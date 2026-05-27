ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_basin
    // 添加 gtceu:andesite_alloy_dust 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "gtceu:andesite_alloy_dust",
        [Fluid.of("gtceu:copper", 144), "gtceu:andesite_dust"],
        200,
        true,
    );

    // 添加 gtceu:andesite_alloy_ingot 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "gtceu:andesite_alloy_ingot",
        [Fluid.of("gtceu:andesite_alloy", 144), "gtceu:ingot_casting_mold"],
        200,
    );

    // 添加 gtceu:manasteel_dust 的配方
    event.recipes.createmetallurgy.casting_in_table(
        "gtceu:manasteel_dust",
        [Fluid.of("manaliquidizer:mana_fluid", 144), "gtceu:iron_dust"],
        200,
    );
});
