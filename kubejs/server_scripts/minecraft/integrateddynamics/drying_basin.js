ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:drying_basin
    // 添加 minecraft:clay 的配方
    event.custom({
        type: "integrateddynamics:drying_basin",
        item: "minecraft:mud",
        duration: 100,
        result: {
            item: "minecraft:clay",
        },
    });
});
