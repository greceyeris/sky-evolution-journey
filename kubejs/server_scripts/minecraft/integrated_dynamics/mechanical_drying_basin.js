ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_drying_basin
    // 添加 minecraft:mud 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        item: "minecraft:dirt",
        fluid: {
            fluid: "minecraft:water",
            amount: 250,
        },
        result: {
            item: "minecraft:mud",
        },
        duration: 50,
    });

    // 添加 minecraft:clay 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        item: "minecraft:mud",
        result: {
            item: "minecraft:clay",
        },
        duration: 50,
    });
});
