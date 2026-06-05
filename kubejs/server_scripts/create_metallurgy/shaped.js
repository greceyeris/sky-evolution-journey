ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 createmetallurgy:casting_basin 的配方
    event.shaped("createmetallurgy:casting_basin", ["A A", "B B", "AAA"], {
        A: "minecraft:brick",
        B: "minecraft:copper_ingot",
    });

    // 添加 createmetallurgy:casting_table 的配方
    event.shaped("createmetallurgy:casting_table", ["AAA", "B B", "A A"], {
        A: "minecraft:brick",
        B: "minecraft:copper_ingot",
    });

    // 添加 createmetallurgy:sturdy_whisk 的配方
    event.shaped("createmetallurgy:sturdy_whisk", [" A ", "BAB", "BBB"], {
        A: "mythicbotany:alfsteel_ingot",
        B: "gtceu:obsidian_plate",
    });
});
