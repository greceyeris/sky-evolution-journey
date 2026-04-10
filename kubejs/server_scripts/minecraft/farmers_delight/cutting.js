ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
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
});
