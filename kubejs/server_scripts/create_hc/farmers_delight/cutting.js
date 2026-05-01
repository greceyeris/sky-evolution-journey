ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 create_hc:gear_small 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:wooden_slabs" }],
        result: [{ item: "create_hc:gear_small" }],
        tool: { tag: "minecraft:axes" },
    });

    // 添加 create_hc:gear_large 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:planks" }],
        result: [{ item: "create_hc:gear_large" }],
        tool: { tag: "minecraft:axes" },
    });

    // 添加 create_hc:shaft 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "forge:stripped_logs" }],
        result: [{ item: "create_hc:shaft" }],
        tool: { tag: "minecraft:axes" },
    });
});
