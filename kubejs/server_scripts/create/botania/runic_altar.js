ServerEvents.recipes((event) => {
    // 添加配方
    // botania:runic_altar
    // 添加 create:copper_casing 的配方
    event.recipes.botania.runic_altar(
        "create:copper_casing",
        [
            "#forge:stripped_logs",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "gtceu:copper_nugget",
            "gtceu:copper_nugget",
            "gtceu:copper_nugget",
            "gtceu:copper_nugget",
        ],
        8000,
    );
});
