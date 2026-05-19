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
});
