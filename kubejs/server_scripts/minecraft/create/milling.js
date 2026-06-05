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

    // 添加 minecraft:white_dye 的配方
    event.recipes.create.milling("minecraft:white_dye", "botania:white_petal");

    // 添加 minecraft:magenta_dye 的配方
    event.recipes.create.milling(
        "minecraft:magenta_dye",
        "botania:magenta_petal",
    );

    // 添加 minecraft:light_blue_dye 的配方
    event.recipes.create.milling(
        "minecraft:light_blue_dye",
        "botania:light_blue_petal",
    );

    // 添加 minecraft:yellow_dye 的配方
    event.recipes.create.milling(
        "minecraft:yellow_dye",
        "botania:yellow_petal",
    );

    // 添加 minecraft:pink_dye 的配方
    event.recipes.create.milling("minecraft:pink_dye", "botania:pink_petal");

    // 添加 minecraft:gray_dye 的配方
    event.recipes.create.milling("minecraft:gray_dye", "botania:gray_petal");

    // 添加 minecraft:light_gray_dye 的配方
    event.recipes.create.milling(
        "minecraft:light_gray_dye",
        "botania:light_gray_petal",
    );

    // 添加 minecraft:cyan_dye 的配方
    event.recipes.create.milling("minecraft:cyan_dye", "botania:cyan_petal");

    // 添加 minecraft:purple_dye 的配方
    event.recipes.create.milling(
        "minecraft:purple_dye",
        "botania:purple_petal",
    );

    // 添加 minecraft:blue_dye 的配方
    event.recipes.create.milling("minecraft:blue_dye", "botania:blue_petal");

    // 添加 minecraft:brown_dye 的配方
    event.recipes.create.milling("minecraft:brown_dye", "botania:brown_petal");
});
