ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_squeezer
    // 添加 gtceu:quartz_sand_dust 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:sand",
        result: {
            items: [
                {
                    item: "gtceu:quartz_sand_dust",
                },
            ],
        },
        duration: 50,
    });

    // 添加 gtceu:flint_dust 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:flint",
        result: {
            items: [
                {
                    item: "gtceu:flint_dust",
                },
            ],
        },
        duration: 50,
    });

    // 添加 gtceu:crushed_copper_ore 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:raw_copper",
        result: {
            items: [
                {
                    item: "gtceu:crushed_copper_ore",
                },
            ],
        },
        duration: 100,
    });

    // 添加 gtceu:pure_copper_dust 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "gtceu:purified_copper_ore",
        result: {
            items: [
                {
                    item: "gtceu:pure_copper_dust",
                },
            ],
        },
        duration: 100,
    });
});
