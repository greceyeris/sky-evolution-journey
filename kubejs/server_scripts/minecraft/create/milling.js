ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 minecraft:nether_wart 的配方
    event.recipes.create.milling(
        [Item.of("minecraft:nether_wart").withChance(0.25)],
        "minecraft:nether_wart_block",
    );
});
