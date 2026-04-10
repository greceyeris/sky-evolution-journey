ServerEvents.recipes((event) => {
    // 添加配方
    // farmersplus:milling
    // 添加 minecraft:bone_meal 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:calcite",
                count: 1,
            },
        ],
        result: [
            {
                item: "minecraft:bone_meal",
                count: 1,
            },
        ],
    });
});
