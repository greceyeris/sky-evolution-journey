ServerEvents.recipes((event) => {
    // 添加配方
    // melter:melting
    // 添加 gtceu:copper 的配方
    event.recipes
        .melterMelting(Fluid.of("gtceu:copper", 144), "minecraft:copper_ingot")
        .processingTime(400)
        .minimumHeat(3);

    event.recipes
        .melterMelting(Fluid.of("gtceu:copper", 1296), "minecraft:copper_block")
        .processingTime(400)
        .minimumHeat(3);

    // 添加 gtceu:andesite_alloy 的配方
    event.recipes
        .melterMelting(
            Fluid.of("gtceu:andesite_alloy", 144),
            "gtceu:andesite_alloy_ingot",
        )
        .processingTime(400)
        .minimumHeat(3);

    event.recipes
        .melterMelting(
            Fluid.of("gtceu:andesite_alloy", 1296),
            "gtceu:andesite_alloy_block",
        )
        .processingTime(400)
        .minimumHeat(3);
});
