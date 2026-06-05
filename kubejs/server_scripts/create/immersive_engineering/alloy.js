ServerEvents.recipes((event) => {
    // 添加配方
    // immersiveengineering:alloy
    // 添加 create:andesite_casing 的配方
    event.recipes.immersiveengineering.alloy(
        "create:andesite_casing",
        Ingredient.of("gtceu:andesite_alloy_ingot", 4),
        "#forge:stripped_logs",
    );

    // 添加 create:brass_casing 的配方
    event.recipes.immersiveengineering.alloy(
        "create:brass_casing",
        Ingredient.of("gtceu:brass_ingot", 4),
        "#forge:stripped_logs",
    );
});
