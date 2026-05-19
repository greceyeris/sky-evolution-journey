ServerEvents.recipes((event) => {
    // 添加配方
    // thermal:centrifuge
    // 添加 minecraft:raw_copper, productivebees:wax 和 create:honey 的配方
    event.recipes.thermal
        .centrifuge(
            [
                "minecraft:raw_copper",
                "productivebees:wax",
                Fluid.of("create:honey", 250),
            ],
            Item.of(
                "productivebees:configurable_honeycomb",
                '{EntityTag:{type:"productivebees:copper"}}',
            ).strongNBT(),
        )
        .energy(8000);

    event.recipes.thermal
        .centrifuge(
            [
                "4x minecraft:raw_copper",
                "4x productivebees:wax",
                Fluid.of("create:honey", 1000),
            ],
            Item.of(
                "productivebees:configurable_comb",
                '{EntityTag:{type:"productivebees:copper"}}',
            ).strongNBT(),
        )
        .energy(12000);
});
