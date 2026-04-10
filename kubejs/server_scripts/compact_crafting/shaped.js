ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 compactcrafting:base 的配方
    event.shaped("4x compactcrafting:base", [" A ", "BCB", "DDD"], {
        A: "#forge:rods/wooden",
        B: "minecraft:brick",
        C: "minecraft:stone_slab",
        D: "#minecraft:wooden_pressure_plates",
    });

    // 添加 compactcrafting:projector_dish 的配方
    event.shaped("4x compactcrafting:projector_dish", ["AB ", "A B", "AB "], {
        A: "#forge:glass_panes",
        B: "minecraft:brick",
    });
});
