ServerEvents.recipes((event) => {
    // 添加配方
    // mysticalagriculture:infusion
    // 添加 gtceu:copper_ore 的配方
    event.recipes.mysticalagriculture.infusion(
        "gtceu:copper_ore",
        "minecraft:stone",
        [
            Item.of("botania:mana_powder", 2),
            Item.of("botania:orange_petal", 4),
            Item.of("botania:orange_petal_block", 2),
        ],
    );

    // 添加 gtceu:iron_ore 的配方
    event.recipes.mysticalagriculture.infusion(
        "gtceu:iron_ore",
        "minecraft:stone",
        [
            Item.of("botania:mana_powder", 2),
            Item.of("botania:white_petal", 4),
            Item.of("botania:white_petal_block", 2),
        ],
    );

    // 添加 gtceu:coal_ore 的配方
    event.recipes.mysticalagriculture.infusion(
        "gtceu:coal_ore",
        "minecraft:stone",
        [
            Item.of("botania:mana_powder", 2),
            Item.of("botania:black_petal", 4),
            Item.of("botania:black_petal_block", 2),
        ],
    );

    // 添加 gtceu:graphite_ore 的配方
    event.recipes.mysticalagriculture.infusion(
        "gtceu:graphite_ore",
        "minecraft:stone",
        [
            Item.of("botania:mana_powder", 2),
            Item.of("botania:white_petal", 2),
            Item.of("botania:black_petal", 2),
            Item.of("botania:white_petal_block", 1),
            Item.of("botania:black_petal_block", 1),
        ],
    );

    // 添加 gtceu:redstone_ore 的配方
    event.recipes.mysticalagriculture.infusion(
        "gtceu:redstone_ore",
        "minecraft:stone",
        [
            Item.of("botania:mana_powder", 2),
            Item.of("botania:red_petal", 4),
            Item.of("botania:red_petal_block", 2),
        ],
    );
});
