ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:squeezer
    // 添加 minecraft:gravel 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:cobblestone",
        result: {
            items: [
                {
                    item: "minecraft:gravel",
                },
            ],
        },
    });

    // 添加 minecraft:sand 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:gravel",
        result: {
            items: [
                {
                    item: "minecraft:sand",
                },
            ],
        },
    });

    // 添加 minecraft:bone_meal 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:calcite",
        result: {
            items: [
                {
                    item: "minecraft:bone_meal",
                },
            ],
        },
    });

    // 添加 minecraft:white_dye 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:bone_meal",
        result: {
            items: [
                {
                    item: {
                        item: "minecraft:white_dye",
                        count: 2,
                    },
                },
            ],
        },
    });
});
