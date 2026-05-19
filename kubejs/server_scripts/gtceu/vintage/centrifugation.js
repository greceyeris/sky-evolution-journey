ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:centrifugation
    // 添加 gtceu:refined_iron_ore, gtceu:stone_dust 和 gtceu:tiny_tin_dust 的配方
    event.recipes.vintage
        .centrifugation(
            [
                "gtceu:refined_iron_ore",
                "gtceu:stone_dust",
                Item.of("gtceu:tiny_tin_dust").withChance(0.16),
            ],
            "gtceu:purified_iron_ore",
        )
        .processingTime(200)
        .minimalRPM(128);

    // 添加 gtceu:refined_copper_ore, gtceu:stone_dust 和 gtceu:tiny_gold_dust 的配方
    event.recipes.vintage
        .centrifugation(
            [
                "gtceu:refined_copper_ore",
                "gtceu:stone_dust",
                Item.of("gtceu:tiny_gold_dust").withChance(0.16),
            ],
            "gtceu:purified_copper_ore",
        )
        .processingTime(200)
        .minimalRPM(128);
});
