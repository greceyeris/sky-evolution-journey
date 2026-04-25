ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_basin
    // 添加 create:andesite_casing 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "create:andesite_casing",
        [Fluid.of("gtceu:andesite_alloy", 864), "#forge:stripped_logs"],
        200,
        true,
    );
});
