ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 compactcrafting:base 的配方
    event.shaped("4x compactcrafting:base", [" A ", "BBB", "CCC"], {
        A: "#forge:rods/wooden",
        B: "minecraft:brick",
        C: "minecraft:stone_slab",
    });

    // 添加 compactcrafting:projector_dish 的配方
    event.shaped("4x compactcrafting:projector_dish", ["AB ", "AB ", "AB "], {
        A: "#forge:glass_panes",
        B: "minecraft:brick",
    });
});
