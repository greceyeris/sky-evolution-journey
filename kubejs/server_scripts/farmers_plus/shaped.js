ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 farmersplus:millstone 的配方
    event.shaped("farmersplus:millstone", ["ABA", "ACA", "DDD"], {
        A: "#forge:rods/wooden",
        B: "minecraft:andesite",
        C: "minecraft:granite",
        D: "minecraft:smooth_stone_slab",
    });
});
