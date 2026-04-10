ServerEvents.recipes((event) => {
    // 添加配方
    // farmersplus:milling
    // 添加 gtceu:quartz_sand_dust 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:sand",
                count: 1,
            },
        ],
        result: [
            {
                item: "gtceu:quartz_sand_dust",
                count: 1,
            },
        ],
    });

    // 添加 gtceu:flint_dust 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:flint",
                count: 1,
            },
        ],
        result: [
            {
                item: "gtceu:flint_dust",
                count: 1,
            },
        ],
    });

    // 添加 gtceu:crushed_copper_ore 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:raw_copper",
                count: 1,
            },
        ],
        result: [
            {
                item: "gtceu:crushed_copper_ore",
                count: 2,
            },
        ],
    });

    // 添加 gtceu:pure_copper_dust 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "gtceu:purified_copper_ore",
                count: 1,
            },
        ],
        result: [
            {
                item: "gtceu:pure_copper_dust",
                count: 1,
            },
        ],
    });
});
