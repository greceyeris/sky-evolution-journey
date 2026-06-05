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

    // 添加 minecraft:white_wool 的配方
    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:orange_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:magenta_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:light_blue_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:yellow_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:lime_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:pink_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:gray_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:light_gray_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:cyan_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:purple_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:blue_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:brown_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:green_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:red_wool",
    );

    event.recipes.create.splashing(
        "minecraft:white_wool",
        "minecraft:black_wool",
    );
});
