ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_squeezer
    // 添加 minecraft:gravel 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:cobblestone",
        result: {
            items: [
                {
                    item: "minecraft:gravel",
                },
            ],
        },
        duration: 100,
    });

    // 添加 minecraft:sand 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:gravel",
        result: {
            items: [
                {
                    item: "minecraft:sand",
                },
            ],
        },
        duration: 100,
    });

    // 添加 minecraft:bone_meal 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:calcite",
        result: {
            items: [
                {
                    item: "minecraft:bone_meal",
                    chance: 0.75,
                },
            ],
        },
        duration: 100,
    });

    // 添加 minecraft:white_dye 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
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
        duration: 100,
    });
});
