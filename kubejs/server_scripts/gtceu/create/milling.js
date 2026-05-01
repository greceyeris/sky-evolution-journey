ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 gtceu:crushed_iron_ore 的配方
    event.recipes.create.milling(
        "gtceu:crushed_iron_ore",
        "minecraft:raw_iron",
    );

    // 添加 gtceu:iron_dust 的配方
    event.recipes.create.milling("gtceu:iron_dust", "minecraft:iron_ingot");

    // 添加 gtceu:paper_dust 的配方
    event.recipes.create.milling("gtceu:paper_dust", "minecraft:sugar_cane");
});
