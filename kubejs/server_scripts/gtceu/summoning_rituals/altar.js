ServerEvents.recipes((event) => {
    // 添加配方
    // summoningrituals:altar
    // 添加 gtceu:copper_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:orange_petal", 6))
        .input(Item.of("botania:orange_petal_block", 2))
        .itemOutput(Item.of("gtceu:copper_ore", 2));

    // 添加 gtceu:iron_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:white_petal", 6))
        .input(Item.of("botania:white_petal_block", 2))
        .itemOutput(Item.of("gtceu:iron_ore", 2));

    // 添加 gtceu:coal_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:black_petal", 6))
        .input(Item.of("botania:black_petal_block", 2))
        .itemOutput(Item.of("gtceu:coal_ore", 2));

    // 添加 gtceu:graphite_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:white_petal", 3))
        .input(Item.of("botania:black_petal", 3))
        .input(Item.of("botania:white_petal_block", 1))
        .input(Item.of("botania:black_petal_block", 1))
        .itemOutput(Item.of("gtceu:graphite_ore", 2));

    // 添加 gtceu:redstone_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:red_petal", 6))
        .input(Item.of("botania:red_petal_block", 2))
        .itemOutput(Item.of("gtceu:redstone_ore", 2));

    // 添加 gtceu:lapis_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:blue_petal", 3))
        .input(Item.of("botania:white_petal", 3))
        .input(Item.of("botania:blue_petal_block", 1))
        .input(Item.of("botania:white_petal_block", 1))
        .itemOutput(Item.of("gtceu:lapis_ore", 2));

    // 添加 gtceu:sulfur_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:yellow_petal", 6))
        .input(Item.of("botania:yellow_petal_block", 2))
        .itemOutput(Item.of("gtceu:sulfur_ore", 2));

    // 添加 gtceu:saltpeter_ore 的配方
    event.recipes.summoningrituals
        .altar("minecraft:stone")
        .input(Item.of("botania:light_gray_petal", 3))
        .input(Item.of("botania:white_petal", 3))
        .input(Item.of("botania:light_gray_petal_block", 1))
        .input(Item.of("botania:white_petal_block", 1))
        .itemOutput(Item.of("gtceu:saltpeter_ore", 2));
});
