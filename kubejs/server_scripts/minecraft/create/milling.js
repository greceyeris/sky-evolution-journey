ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 minecraft:nether_wart 的配方
    event.recipes.create
        .milling(
            [Item.of("minecraft:nether_wart").withChance(0.25)],
            "minecraft:nether_wart_block",
        )
        .processingTime(100);

    // 添加 minecraft:cobblestone 的配方
    event.recipes.create
        .milling("minecraft:cobblestone", "minecraft:stone")
        .processingTime(100);

    // 添加 minecraft:gravel 的配方
    event.recipes.create
        .milling("minecraft:gravel", "minecraft:cobblestone")
        .processingTime(100);

    // 添加 minecraft:sand 的配方
    event.recipes.create
        .milling("minecraft:sand", "minecraft:gravel")
        .processingTime(100);
});
