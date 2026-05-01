ServerEvents.recipes((event) => {
    // 添加配方
    // botania:runic_altar
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

    // 添加 gtceu:iron_ore 的配方
    event.recipes.botania.runic_altar(
        "gtceu:iron_ore",
        [
            "botania:white_petal",
            "botania:white_petal",
            "botania:white_petal",
            "botania:white_petal",
            "botania:white_petal_block",
            "botania:white_petal_block",
            "botania:white_petal_block",
            "botania:white_petal_block",
        ],
        12000,
    );

    // 添加 gtceu:coal_ore 的配方
    event.recipes.botania.runic_altar(
        "gtceu:coal_ore",
        [
            "botania:black_petal",
            "botania:black_petal",
            "botania:black_petal",
            "botania:black_petal",
            "botania:black_petal_block",
            "botania:black_petal_block",
            "botania:black_petal_block",
            "botania:black_petal_block",
        ],
        6000,
    );

    // 添加 gtceu:graphite_ore 的配方
    event.recipes.botania.runic_altar(
        "gtceu:graphite_ore",
        [
            "botania:white_petal",
            "botania:white_petal",
            "botania:black_petal",
            "botania:black_petal",
            "botania:white_petal_block",
            "botania:white_petal_block",
            "botania:black_petal_block",
            "botania:black_petal_block",
        ],
        10000,
    );
});
