ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 minecraft:nether_wart 的配方
    event.recipes.create.milling(
        [Item.of("minecraft:nether_wart").withChance(0.25)],
        "minecraft:nether_wart_block",
    );

    // 添加 minecraft:cobblestone 的配方
    event.recipes.create.milling("minecraft:cobblestone", "minecraft:stone");

    // 添加 minecraft:gravel 的配方
    event.recipes.create.milling("minecraft:gravel", "minecraft:cobblestone");

    // 添加 minecraft:sand 的配方
    event.recipes.create.milling("minecraft:sand", "minecraft:gravel");

    // 添加 minecraft:lime_dye 的配方
    event.recipes.create.milling("minecraft:lime_dye", "botania:lime_petal");

    // 添加 minecraft:green_dye 的配方
    event.recipes.create.milling("minecraft:green_dye", "botania:green_petal");

    // 添加 minecraft:black_dye 的配方
    event.recipes.create.milling("minecraft:black_dye", "botania:black_petal");

    // 添加 minecraft:red_dye 的配方
    event.recipes.create.milling("minecraft:red_dye", "botania:red_petal");

    // 添加 minecraft:orange_dye 的配方
    event.recipes.create.milling(
        "minecraft:orange_dye",
        "botania:orange_petal",
    );
});
