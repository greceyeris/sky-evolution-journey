ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:squeezer
    // 添加 gtceu:quartz_sand_dust 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:sand",
        result: {
            items: [
                {
                    item: "gtceu:quartz_sand_dust",
                },
            ],
        },
    });

    // 添加 gtceu:flint_dust 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:flint",
        result: {
            items: [
                {
                    item: "gtceu:flint_dust",
                },
            ],
        },
    });

    // 添加 gtceu:crushed_redstone_ore 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "gtceu:raw_redstone",
        result: {
            items: [
                {
                    item: {
                        item: "gtceu:crushed_redstone_ore",
                        count: 5,
                    },
                },
            ],
        },
    });

    // 添加 gtceu:pure_redstone_dust 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "gtceu:purified_redstone_ore",
        result: {
            items: [
                {
                    item: "gtceu:pure_redstone_dust",
                },
            ],
        },
    });

    // 添加 gtceu:wheat_dust 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:wheat",
        result: {
            items: [
                {
                    item: "gtceu:wheat_dust",
                },
            ],
        },
    });
});
