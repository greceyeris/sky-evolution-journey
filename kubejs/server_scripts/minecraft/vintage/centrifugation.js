ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:centrifugation
    // 添加 minecraft:raw_copper, productivebees:wax 和 create:honey 的配方
    event.recipes.vintage
        .centrifugation(
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
        .processingTime(150)
        .minimalRPM(128);

    event.recipes.vintage
        .centrifugation(
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
        .processingTime(400)
        .minimalRPM(128);

    // 添加 minecraft:mushrooms 的配方
    event.recipes.vintage
        .centrifugation(
            Ingredient.of("#minecraft:mushrooms")
                .getItemIds()
                .map((item) => Item.of(item).withChance(0.2)),
            "minecraft:mycelium",
        )
        .processingTime(150)
        .minimalRPM(64);
});
