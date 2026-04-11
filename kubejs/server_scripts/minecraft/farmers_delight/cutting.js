ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 minecraft:bowl 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:planks",
            },
        ],
        tool: {
            tag: "forge:tools/knives",
        },
        result: [
            {
                item: "minecraft:bowl",
            },
        ],
    });

    // 添加 minecraft:stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:stone_slab",
            },
        ],
    });

    // 添加 minecraft:smooth_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:smooth_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:smooth_stone_slab",
            },
        ],
    });

    // 添加 minecraft:glass_pane 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:glass",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:glass_pane",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:all_logs_and_woods, farmersdelight:tree_bark 的配方
    Ingredient.of("#minecraft:all_logs_and_woods")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: item,
                    },
                ],
                tool: {
                    tag: "minecraft:axes",
                },
                result: [
                    {
                        item: item.replace("minecraft:", "minecraft:stripped_"),
                    },
                    {
                        item: "farmersdelight:tree_bark",
                    },
                ],
            });
        });

    // 添加 minecraft:stripped_bamboo_block, farmersdelight:straw 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:bamboo_block",
            },
        ],
        tool: {
            tag: "minecraft:axes",
        },
        result: [
            {
                item: "minecraft:stripped_bamboo_block",
            },
            {
                item: "farmersdelight:straw",
            },
        ],
    });

    // 添加 minecraft:oak_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_oak_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:oak_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:spruce_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_spruce_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:spruce_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:birch_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_birch_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:birch_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:jungle_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_jungle_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:jungle_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:acacia_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_acacia_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:acacia_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:dark_oak_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_dark_oak_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:dark_oak_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:mangrove_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_mangrove_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:mangrove_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:cherry_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_cherry_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:cherry_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:crimson_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_crimson_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:crimson_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:warped_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:stripped_warped_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:warped_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:bamboo_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:stripped_bamboo_block",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:bamboo_planks",
                count: 4,
            },
        ],
    });

    // 添加 minecraft:oak_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:oak_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:oak_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:spruce_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:spruce_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:spruce_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:birch_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:birch_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:birch_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:jungle_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:jungle_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:jungle_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:acacia_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:acacia_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:acacia_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:dark_oak_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:dark_oak_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:dark_oak_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:mangrove_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:mangrove_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:mangrove_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:cherry_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:cherry_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:cherry_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:crimson_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:crimson_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:crimson_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:warped_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:warped_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:warped_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:bamboo_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:bamboo_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:bamboo_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:bamboo_mosaic_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:bamboo_mosaic",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "minecraft:bamboo_mosaic_slab",
                count: 2,
            },
        ],
    });

    // 添加 minecraft:clay_ball 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "minecraft:clay",
            },
        ],
        tool: {
            tag: "forge:tools/shovels",
        },
        result: [
            {
                item: "minecraft:clay_ball",
                count: 4,
            },
        ],
    });
});
