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
        result: {
            item: "minecraft:mud",
        },
        duration: 100,
    });

    // 添加 minecraft:redstone 的配方
    event.custom({
        type: "integrateddynamics:drying_basin",
        item: "gtceu:pure_redstone_dust",
        fluid: {
            fluid: "minecraft:water",
            amount: 125,
        },
        result: {
            item: "minecraft:redstone",
        },
        duration: 200,
    });
});
