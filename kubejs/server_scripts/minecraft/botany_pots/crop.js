ServerEvents.recipes((event) => {
    // 添加作物
    // botanypots:crop
    // 添加 minecraft:oak_sapling 的作物
    event.recipes.botanypots.crop(
        "minecraft:oak_sapling",
        ["dirt", "grass"],
        { block: "minecraft:oak_sapling" },
        [
            Item.of("minecraft:oak_log").withChance(1).withRolls(2, 3),
            Item.of("minecraft:oak_leaves").withChance(0.35).withRolls(1, 2),
            Item.of("minecraft:stick").withChance(0.2).withRolls(1, 1),
            Item.of("minecraft:oak_sapling").withChance(0.1).withRolls(1, 1),
            Item.of("minecraft:apple").withChance(0.05).withRolls(1, 1),
        ],
        1200,
        1,
    );

    // 添加 minecraft:sugar_cane 的作物
    event.recipes.botanypots.crop(
        "minecraft:sugar_cane",
        ["sand"],
        { block: "minecraft:sugar_cane" },
        [Item.of("minecraft:sugar_cane").withChance(1).withRolls(1, 2)],
        900,
        1,
    );

    // 添加 minecraft:crimson_fungus 的作物
    event.recipes.botanypots.crop(
        "minecraft:crimson_fungus",
        ["netherrack", "crimson_nylium"],
        { block: "minecraft:crimson_fungus" },
        [
            Item.of("minecraft:crimson_stem").withChance(1).withRolls(2, 3),
            Item.of("minecraft:nether_wart_block")
                .withChance(0.5)
                .withRolls(1, 2),
            Item.of("minecraft:weeping_vines").withChance(0.15).withRolls(1, 1),
            Item.of("minecraft:shroomlight").withChance(0.08).withRolls(1, 1),
            Item.of("minecraft:crimson_fungus").withChance(0.1).withRolls(1, 1),
        ],
        1200,
        1,
    );

    // 添加 minecraft:melon_seeds 的作物
    event.recipes.botanypots.crop(
        "minecraft:melon_seeds",
        ["dirt", "grass"],
        { block: "minecraft:melon" },
        [Item.of("minecraft:melon_slice").withChance(1).withRolls(3, 7)],
        900,
        1,
    );
});
