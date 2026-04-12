ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:crushing
    // 添加 minecraft:gravel 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:cobblestone",
                },
            },
        },
        results: {
            items: {
                item: "minecraft:gravel",
            },
        },
        crafting_time: 100,
    });

    // 添加 minecraft:sand 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:gravel",
                },
            },
        },
        results: {
            items: {
                item: "minecraft:sand",
            },
        },
        crafting_time: 100,
    });

    // 添加 minecraft:bone_meal 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:calcite",
                },
            },
        },
        results: {
            items: {
                item: "minecraft:bone_meal",
            },
        },
        crafting_time: 100,
    });

    // 添加 minecraft:white_dye 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:bone_meal",
                },
            },
        },
        results: {
            items: {
                item: "minecraft:white_dye",
                count: 2,
            },
        },
        crafting_time: 100,
    });
});
