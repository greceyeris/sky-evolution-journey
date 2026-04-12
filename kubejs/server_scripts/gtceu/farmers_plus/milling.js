ServerEvents.recipes((event) => {
    // 添加配方
    // farmersplus:milling
    // 添加 gtceu:quartz_sand_dust 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:sand",
            },
        ],
        result: [
            {
                item: "gtceu:quartz_sand_dust",
            },
        ],
    });

    // 添加 gtceu:flint_dust 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "minecraft:flint",
            },
        ],
        result: [
            {
                item: "gtceu:flint_dust",
            },
        ],
    });

    // 添加 gtceu:crushed_redstone_ore 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "gtceu:raw_redstone",
            },
        ],
        result: [
            {
                item: "gtceu:crushed_redstone_ore",
                count: 5,
            },
        ],
    });

    // 添加 gtceu:pure_redstone_dust 的配方
    event.custom({
        type: "farmersplus:milling",
        ingredients: [
            {
                item: "gtceu:purified_redstone_ore",
            },
        ],
        result: [
            {
                item: "gtceu:pure_redstone_dust",
            },
        ],
    });
});
