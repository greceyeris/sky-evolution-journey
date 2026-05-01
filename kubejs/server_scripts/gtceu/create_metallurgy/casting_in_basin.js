ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_basin
    // 添加 gtceu:andesite_alloy_block 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "gtceu:andesite_alloy_block",
        Fluid.of("gtceu:andesite_alloy", 1296),
        200,
    );
});
