ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 createmetallurgy:casting_basin 的配方
    event.shaped("createmetallurgy:casting_basin", ["A A", "B B", "AAA"], {
        A: "minecraft:nether_brick",
        B: "minecraft:copper_ingot",
    });

    // 添加 createmetallurgy:casting_table 的配方
    event.shaped("createmetallurgy:casting_table", ["AAA", "B B", "A A"], {
        A: "minecraft:nether_brick",
        B: "minecraft:copper_ingot",
    });
});
