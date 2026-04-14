ServerEvents.tags("item", (event) => {
    // 定义 addItemTags 数组
    const addItemTags = [
        {
            tag: "kubejs:organic_matters",
            items: [
                "#minecraft:leaves",
                "#minecraft:saplings",
                "farmersdelight:tree_bark",
            ],
        },
        {
            tag: "forge:tools/saws",
            items: ["kubejs:flint_saw"],
        },
        {
            tag: "botania:all_mystical_flowers",
            items: [
                "#botania:mystical_flowers",
                "#botania:double_mystical_flowers",
            ],
        },
        {
            tag: "botania:orange_mystical_flowers",
            items: [
                "botania:orange_mystical_flower",
                "botania:orange_double_flower",
            ],
        },
        {
            tag: "botania:white_mystical_flowers",
            items: [
                "botania:white_mystical_flower",
                "botania:white_double_flower",
            ],
        },
        {
            tag: "botania:red_mystical_flowers",
            items: ["botania:red_mystical_flower", "botania:red_double_flower"],
        },
        {
            tag: "minecraft:all_logs_and_woods",
            items: [
                "minecraft:oak_log",
                "minecraft:spruce_log",
                "minecraft:birch_log",
                "minecraft:jungle_log",
                "minecraft:acacia_log",
                "minecraft:dark_oak_log",
                "minecraft:mangrove_log",
                "minecraft:cherry_log",
                "minecraft:crimson_stem",
                "minecraft:warped_stem",
                "minecraft:oak_wood",
                "minecraft:spruce_wood",
                "minecraft:birch_wood",
                "minecraft:jungle_wood",
                "minecraft:acacia_wood",
                "minecraft:dark_oak_wood",
                "minecraft:mangrove_wood",
                "minecraft:cherry_wood",
                "minecraft:crimson_hyphae",
                "minecraft:warped_hyphae",
            ],
        },
        {
            tag: "minecraft:stripped_oak_logs",
            items: [
                "minecraft:stripped_oak_log",
                "minecraft:stripped_oak_wood",
            ],
        },
        {
            tag: "minecraft:stripped_spruce_logs",
            items: [
                "minecraft:stripped_spruce_log",
                "minecraft:stripped_spruce_wood",
            ],
        },
        {
            tag: "minecraft:stripped_birch_logs",
            items: [
                "minecraft:stripped_birch_log",
                "minecraft:stripped_birch_wood",
            ],
        },
        {
            tag: "minecraft:stripped_jungle_logs",
            items: [
                "minecraft:stripped_jungle_log",
                "minecraft:stripped_jungle_wood",
            ],
        },
        {
            tag: "minecraft:stripped_acacia_logs",
            items: [
                "minecraft:stripped_acacia_log",
                "minecraft:stripped_acacia_wood",
            ],
        },
        {
            tag: "minecraft:stripped_dark_oak_logs",
            items: [
                "minecraft:stripped_dark_oak_log",
                "minecraft:stripped_dark_oak_wood",
            ],
        },
        {
            tag: "minecraft:stripped_mangrove_logs",
            items: [
                "minecraft:stripped_mangrove_log",
                "minecraft:stripped_mangrove_wood",
            ],
        },
        {
            tag: "minecraft:stripped_cherry_logs",
            items: [
                "minecraft:stripped_cherry_log",
                "minecraft:stripped_cherry_wood",
            ],
        },
        {
            tag: "minecraft:stripped_crimson_logs",
            items: [
                "minecraft:stripped_crimson_stem",
                "minecraft:stripped_crimson_hyphae",
            ],
        },
        {
            tag: "minecraft:stripped_warped_logs",
            items: [
                "minecraft:stripped_warped_stem",
                "minecraft:stripped_warped_hyphae",
            ],
        },
        {
            tag: "minecraft:all_small_flowers",
            items: [
                "minecraft:dandelion",
                "minecraft:poppy",
                "minecraft:blue_orchid",
                "minecraft:allium",
                "minecraft:azure_bluet",
                "minecraft:red_tulip",
                "minecraft:orange_tulip",
                "minecraft:white_tulip",
                "minecraft:pink_tulip",
                "minecraft:oxeye_daisy",
                "minecraft:cornflower",
                "minecraft:lily_of_the_valley",
            ],
        },
        {
            tag: "minecraft:all_seeds",
            items: [
                "minecraft:wheat_seeds",
                "minecraft:pumpkin_seeds",
                "minecraft:melon_seeds",
                "minecraft:beetroot_seeds",
                "minecraft:torchflower_seeds",
                "minecraft:glow_berries",
                "minecraft:sweet_berries",
                "minecraft:carrot",
                "minecraft:potato",
                "minecraft:pitcher_pod",
            ],
        },
        {
            tag: "integrateddynamics:stripped_menril_logs",
            items: [
                "integrateddynamics:menril_log_stripped",
                "integrateddynamics:menril_wood_stripped",
            ],
        },
        // {
        //     tag: "forge:dough",
        //     items: ["gtceu:dough"],
        // },
    ];
    // addItemTags
    addItemTags.forEach((obj) => {
        // add
        event.add(obj.tag, obj.items);
    });
});
