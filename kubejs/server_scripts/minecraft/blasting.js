ServerEvents.recipes((event) => {
    // 添加配方
    // blasting
    // 添加 minecraft:copper_ingot 的配方
    event
        .blasting("minecraft:copper_ingot", "minecraft:raw_copper")
        .cookingTime(100);
});
