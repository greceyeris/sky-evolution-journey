ServerEvents.recipes((event) => {
    // 添加配方
    // runic_altar
    // 添加 gtceu:copper_ore 的配方
    event.recipes.botania.runic_altar(
        "gtceu:copper_ore",
        [
            "botania:orange_petal",
            "botania:orange_petal",
            "botania:orange_petal",
            "botania:orange_petal",
            "botania:orange_petal_block",
            "botania:orange_petal_block",
            "botania:orange_petal_block",
            "botania:orange_petal_block",
        ],
        8000,
    );
});
