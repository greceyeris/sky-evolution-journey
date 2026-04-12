ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 integrateddynamics:menril_log_stripped, farmersdelight:tree_bark 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:menril_log",
            },
        ],
        tool: {
            tag: "minecraft:axes",
        },
        result: [
            {
                item: "integrateddynamics:menril_log_stripped",
            },
            {
                item: "farmersdelight:tree_bark",
            },
        ],
    });

    // 添加 integrateddynamics:menril_log_stripped, integrateddynamics:crystalized_menril_chunk, farmersdelight:tree_bark 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:menril_log_filled",
            },
        ],
        tool: {
            tag: "minecraft:axes",
        },
        result: [
            {
                item: "integrateddynamics:menril_log_stripped",
            },
            {
                item: "farmersdelight:tree_bark",
            },
            {
                item: "integrateddynamics:crystalized_menril_chunk",
            },
        ],
    });

    // 添加 integrateddynamics:menril_wood_stripped, farmersdelight:tree_bark 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:menril_wood",
            },
        ],
        tool: {
            tag: "minecraft:axes",
        },
        result: [
            {
                item: "integrateddynamics:menril_wood_stripped",
            },
            {
                item: "farmersdelight:tree_bark",
            },
        ],
    });

    // 添加 integrateddynamics:menril_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "integrateddynamics:stripped_menril_logs",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "integrateddynamics:menril_planks",
                count: 4,
            },
        ],
    });

    // 添加 integrateddynamics:menril_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:menril_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "integrateddynamics:menril_slab",
                count: 2,
            },
        ],
    });

    // 添加 integrateddynamics:crystalized_menril_block_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:crystalized_menril_block",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "integrateddynamics:crystalized_menril_block_slab",
            },
        ],
    });

    // 添加 integrateddynamics:crystalized_menril_brick_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:crystalized_menril_brick",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "integrateddynamics:crystalized_menril_brick_slab",
            },
        ],
    });

    // 添加 integrateddynamics:crystalized_chorus_block_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:crystalized_chorus_block",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "integrateddynamics:crystalized_chorus_block_slab",
            },
        ],
    });

    // 添加 integrateddynamics:crystalized_chorus_brick_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "integrateddynamics:crystalized_chorus_brick",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "integrateddynamics:crystalized_chorus_brick_slab",
            },
        ],
    });
});
