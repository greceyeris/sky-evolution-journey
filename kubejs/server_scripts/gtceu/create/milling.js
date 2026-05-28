ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 gtceu:crushed_iron_ore 和 gtceu:stone_dust 的配方
    event.recipes.create
        .milling(
            ["2x gtceu:crushed_iron_ore", "gtceu:stone_dust"],
            "minecraft:raw_iron",
        )
        .processingTime(100);

    // 添加 gtceu:iron_dust 的配方
    event.recipes.create
        .milling("gtceu:iron_dust", "minecraft:iron_ingot")
        .processingTime(100);

    // 添加 gtceu:paper_dust 的配方
    event.recipes.create
        .milling("gtceu:paper_dust", "minecraft:sugar_cane")
        .processingTime(100);

    // 添加 gtceu:crushed_copper_ore 和 gtceu:stone_dust 的配方
    event.recipes.create
        .milling(
            ["2x gtceu:crushed_copper_ore", "gtceu:stone_dust"],
            "minecraft:raw_copper",
        )
        .processingTime(100);

    // 添加 gtceu:wood_dust 的配方
    event.recipes.create
        .milling("6x gtceu:wood_dust", "#minecraft:planks")
        .processingTime(100);

    // 添加 gtceu:wheat_dust 的配方
    event.recipes.create
        .milling("gtceu:wheat_dust", "minecraft:wheat")
        .processingTime(100);

    // 添加 gtceu:copper_dust 的配方
    event.recipes.create
        .milling("gtceu:copper_dust", "minecraft:copper_ingot")
        .processingTime(100);

    // 添加 gtceu:andesite_dust 的配方
    event.recipes.create
        .milling("gtceu:andesite_dust", "minecraft:andesite")
        .processingTime(100);
});
