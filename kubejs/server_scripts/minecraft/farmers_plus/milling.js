ServerEvents.recipes((event) => {
    // 添加配方
    // farmersplus:milling
    // 添加 minecraft:bone_meal 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:calcite",
            },
        ],
        result: [
            {
                item: "minecraft:bone_meal",
                chance: 0.75,
            },
        ],
    });

    // 添加 minecraft:white_dye 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:bone_meal",
            },
        ],
        result: [
            {
                item: "minecraft:white_dye",
                count: 2,
            },
        ],
    });
});
