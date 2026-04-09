ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 kubejs:organic_matter_pile 的配方
    event.shaped("kubejs:organic_matter_pile", [" A ", "AAA", " A "], {
        A: "#kubejs:organic_matters",
    });

    // 添加 kubejs:flint_saw 的配方
    event.shaped("kubejs:flint_saw", ["AAB", "BBB"], {
        A: "minecraft:flint",
        B: "#forge:rods/wooden",
    });
});
