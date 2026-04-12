ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:crushing
    // 添加 gtceu:quartz_sand_dust 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:sand",
                },
            },
        },
        results: {
            items: {
                item: "gtceu:quartz_sand_dust",
            },
        },
        crafting_time: 100,
    });

    // 添加 gtceu:flint_dust 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:flint",
                },
            },
        },
        results: {
            items: {
                item: "gtceu:flint_dust",
            },
        },
        crafting_time: 100,
    });

    // 添加 gtceu:crushed_copper_ore 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:raw_copper",
                },
            },
        },
        results: {
            items: {
                item: "gtceu:crushed_copper_ore",
            },
        },
        crafting_time: 100,
    });

    // 添加 gtceu:pure_copper_dust 的配方
    event.custom({
        type: "simpleprocessingmachines:crushing",
        inputs: {
            ingredients: {
                items: {
                    item: "gtceu:purified_copper_ore",
                },
            },
        },
        results: {
            items: {
                item: "gtceu:pure_copper_dust",
            },
        },
        crafting_time: 100,
    });
});
