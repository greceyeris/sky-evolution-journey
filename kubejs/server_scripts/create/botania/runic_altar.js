ServerEvents.recipes((event) => {
    // 添加配方
    // runic_altar
    // 添加 create:copper_casing 的配方
    event.recipes.botania.runic_altar(
        "create:copper_casing",
        [
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "#forge:stripped_logs",
            "#forge:stripped_logs",
            "#forge:stripped_logs",
            "#forge:stripped_logs",
        ],
        8000,
    );
});
