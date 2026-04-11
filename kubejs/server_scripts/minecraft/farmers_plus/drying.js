ServerEvents.recipes((event) => {
    // 添加配方
    // farmersplus:drying
    // 添加 minecraft:clay 的配方
    event.custom({
        type: "farmersplus:drying",
        dryingtime: 100,
        ingredients: [
            {
                item: "minecraft:mud",
            },
        ],
        result: {
            item: "minecraft:clay",
        },
    });
});
