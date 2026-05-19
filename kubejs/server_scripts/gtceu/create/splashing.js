ServerEvents.recipes((event) => {
    // 添加配方
    // create:splashing
    // 添加 gtceu:purified_iron_ore, gtceu:stone_dust 和 gtceu:tiny_nickel_dust 的配方
    event.recipes.create.splashing(
        [
            "gtceu:purified_iron_ore",
            "gtceu:stone_dust",
            Item.of("gtceu:tiny_nickel_dust").withChance(0.16),
        ],
        "gtceu:crushed_iron_ore",
    );

    // 添加 gtceu:purified_copper_ore, gtceu:stone_dust 和 gtceu:tiny_cobalt_dust 的配方
    event.recipes.create.splashing(
        [
            "gtceu:purified_copper_ore",
            "gtceu:stone_dust",
            Item.of("gtceu:tiny_cobalt_dust").withChance(0.16),
        ],
        "gtceu:crushed_copper_ore",
    );
});
