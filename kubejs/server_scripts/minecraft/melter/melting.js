ServerEvents.recipes((event) => {
    // 添加配方
    // melter:melting
    // 添加 minecraft:lava 的配方
    event.recipes
        .melterMelting(Fluid.of("minecraft:lava", 100), "#kubejs:cobblestones")
        .processingTime(800)
        .minimumHeat(2);

    event.recipes
        .melterMelting(Fluid.of("minecraft:lava", 125), "#kubejs:stones")
        .processingTime(800)
        .minimumHeat(2);

    event.recipes
        .melterMelting(Fluid.of("minecraft:lava", 200), "#kubejs:netherracks")
        .processingTime(800)
        .minimumHeat(2);
});
