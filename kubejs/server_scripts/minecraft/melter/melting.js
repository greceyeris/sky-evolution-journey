ServerEvents.recipes((event) => {
    // 添加配方
    // melter:melting
    // 添加 minecraft:water 的配方
    event.recipes
        .melterMelting(Fluid.of("minecraft:water", 125), "#minecraft:leaves")
        .processingTime(200)
        .minimumHeat(1);

    // 添加 minecraft:lava 的配方
    event.recipes
        .melterMelting(Fluid.of("minecraft:lava", 100), "#forge:cobblestone")
        .processingTime(800)
        .minimumHeat(2);
});
