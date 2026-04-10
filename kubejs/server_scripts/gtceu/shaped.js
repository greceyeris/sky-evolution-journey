ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 gtceu:flint_axe 的配方
    event.shaped("gtceu:flint_axe", ["AA", "AB"], {
        A: "minecraft:flint",
        B: "minecraft:stick",
    });

    // 添加 gtceu:flint_block 的配方
    event.shaped("gtceu:flint_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:flint",
    });
});
