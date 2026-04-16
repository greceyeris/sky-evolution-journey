ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 ae2cs:quartz_grindstone 的配方
    event.shaped("ae2cs:quartz_grindstone", ["ABA", "ACA", "ADA"], {
        A: "minecraft:smooth_stone",
        B: "#forge:rods/wooden",
        C: "minecraft:flint",
        D: "minecraft:smooth_stone_slab",
    });
});
