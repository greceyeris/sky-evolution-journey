ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 gtceu:crushed_iron_ore 和 gtceu:stone_dust 的配方
    event.recipes.create.milling(
        ["2x gtceu:crushed_iron_ore", "gtceu:stone_dust"],
        "minecraft:raw_iron",
    );

    // 添加 gtceu:iron_dust 的配方
    event.recipes.create.milling("gtceu:iron_dust", "minecraft:iron_ingot");

    // 添加 gtceu:paper_dust 的配方
    event.recipes.create.milling("gtceu:paper_dust", "minecraft:sugar_cane");

    // 添加 gtceu:crushed_copper_ore 和 gtceu:stone_dust 的配方
    event.recipes.create.milling(
        ["2x gtceu:crushed_copper_ore", "gtceu:stone_dust"],
        "minecraft:raw_copper",
    );

    // 添加 gtceu:wood_dust 的配方
    event.recipes.create.milling("6x gtceu:wood_dust", "#minecraft:planks");

    // 添加 gtceu:wheat_dust 的配方
    event.recipes.create.milling("gtceu:wheat_dust", "minecraft:wheat");

    // 添加 gtceu:copper_dust 的配方
    event.recipes.create.milling("gtceu:copper_dust", "minecraft:copper_ingot");

    // 添加 gtceu:andesite_dust 的配方
    event.recipes.create.milling("gtceu:andesite_dust", "minecraft:andesite");

    // 添加 gtceu:crushed_sphalerite_ore 和 gtceu:stone_dust 的配方
    event.recipes.create.milling(
        ["2x gtceu:crushed_sphalerite_ore", "gtceu:stone_dust"],
        "gtceu:raw_sphalerite",
    );

    // 添加 gtceu:crushed_gold_ore 和 gtceu:stone_dust 的配方
    event.recipes.create.milling(
        ["2x gtceu:crushed_gold_ore", "gtceu:stone_dust"],
        "minecraft:raw_gold",
    );

    // 添加 gtceu:obsidian_dust 的配方
    event.recipes.create.milling(["gtceu:obsidian_dust"], "minecraft:obsidian");
});
