ServerEvents.recipes((event) => {
    // 添加配方
    // melterMelting
    // 添加 minecraft:lava 的配方
    event.recipes
        .melterMelting(Fluid.of("minecraft:lava", 100), "#forge:cobblestone")
        .processingTime(800)
        .minimumHeat(2);
});
