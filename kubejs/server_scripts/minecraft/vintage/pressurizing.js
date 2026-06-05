ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:pressurizing
    // 添加 minecraft:diamond 的配方
    event.recipes.vintage
        .pressurizing("minecraft:diamond", [Item.of("minecraft:coal_block", 9)])
        .heated()
        .processingTime(200);
});
