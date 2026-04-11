ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:drying_basin
    // 添加 minecraft:mud 的配方
    event.custom({
        type: "integrateddynamics:drying_basin",
        item: "minecraft:dirt",
        fluid: {
            fluid: "minecraft:water",
            amount: 250,
        },
        duration: 100,
        result: {
            item: "minecraft:mud",
        },
    });
});
