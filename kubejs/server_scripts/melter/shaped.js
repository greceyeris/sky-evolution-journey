ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 melter:melter 的配方
    event.shaped("melter:melter", ["A A", "B B", "ACA"], {
        A: "minecraft:stone",
        B: "minecraft:copper_ingot",
        C: "minecraft:stone_slab",
    });
});
