ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:centrifugation
    // 添加 create_netherless:coal_rod 的配方
    event.recipes.vintage
        .polishing("create_netherless:coal_rod", "minecraft:coal_block")
        .processingTime(100)
        .speedLimits(1);
});
