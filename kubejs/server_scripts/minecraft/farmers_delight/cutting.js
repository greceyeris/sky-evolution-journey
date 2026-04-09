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
            tag: "minecraft:axes",
        },
        result: [
            {
                item: "minecraft:oak_planks",
                count: 2,
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
            tag: "minecraft:axes",
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
});
