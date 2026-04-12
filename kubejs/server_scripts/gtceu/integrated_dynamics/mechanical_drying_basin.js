ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_drying_basin
    // 添加 gtceu:purified_copper_ore 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        item: "gtceu:crushed_copper_ore",
        fluid: {
            fluid: "minecraft:water",
            amount: 125,
        },
        result: {
            item: "gtceu:purified_copper_ore",
        },
        duration: 100,
    });

    // 添加 gtceu:copper_dust 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        item: "gtceu:pure_copper_dust",
        fluid: {
            fluid: "minecraft:water",
            amount: 125,
        },
        result: {
            item: "gtceu:copper_dust",
        },
        duration: 100,
    });
});
