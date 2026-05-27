ServerEvents.recipes((event) => {
    // 添加配方
    // summoningrituals:altar
    // 添加 mysticalagriculture:prosperity_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:cyan_petal", 3))
        .input(Item.of("botania:white_petal", 3))
        .input(Item.of("botania:cyan_petal_block", 1))
        .input(Item.of("botania:white_petal_block", 1))
        .itemOutput(Item.of("mysticalagriculture:prosperity_ore", 2));

    // 添加 mysticalagriculture:soulium_ore 的配方
    event.recipes.summoningrituals
        .altar("mysticalagriculture:soulstone")
        .input(Item.of("botania:brown_petal", 6))
        .input(Item.of("botania:brown_petal_block", 2))
        .itemOutput(Item.of("mysticalagriculture:soulium_ore", 2));
});
