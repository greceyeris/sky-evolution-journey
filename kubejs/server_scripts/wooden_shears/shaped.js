ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 woodenshears:wooden_shears 的配方
    event.shaped("woodenshears:wooden_shears", ["A A", " B ", "C C"], {
        A: "#minecraft:planks",
        B: "#minecraft:saplings",
        C: "#forge:rods/wooden",
    });
});
