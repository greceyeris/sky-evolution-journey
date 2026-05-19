ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 kubejs:organic_matter_clump 的配方
    event.shaped("kubejs:organic_matter_clump", ["AAA", "A A", "AAA"], {
        A: "#kubejs:organic_matters",
    });
});
