ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 botania:mystical_flowers 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "strainers:strainer",
                ingredients: [{ item: "botania:fertilizer" }],
                output: { item: item },
                aboveFluid: "minecraft:water",
                minMeshTier: 1,
                duration: 200,
                chance: 0.05,
                chanceIncreasePerTier: 0.0,
            });
        });
});
