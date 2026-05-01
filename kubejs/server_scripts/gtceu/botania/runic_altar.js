ServerEvents.recipes((event) => {
    // 添加配方
    // botania:runic_altar
    // 添加 botania:mana_pool 的配方
    event.recipes.botania.runic_altar(
        "botania:mana_pool",
        [
            "gtceu:andesite_alloy_ingot",
            "gtceu:andesite_alloy_ingot",
            "gtceu:andesite_alloy_ingot",
            "botania:livingrock",
            "botania:diluted_pool",
            "botania:livingrock",
            "botania:livingrock",
            "botania:livingrock",
            "botania:livingrock",
        ],
        8000,
    );
});
