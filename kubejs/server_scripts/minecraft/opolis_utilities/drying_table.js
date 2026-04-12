ServerEvents.recipes((event) => {
    // 添加配方
    // opolisutilities:drying_table
    // 添加 minecraft:clay 的配方
    event.custom({
        type: "opolisutilities:drying_table",
        ingredient: [
            {
                item: "minecraft:mud",
            },
        ],
        count: 1,
        output: {
            item: "minecraft:clay",
        },
        duration: 100,
    });
});
