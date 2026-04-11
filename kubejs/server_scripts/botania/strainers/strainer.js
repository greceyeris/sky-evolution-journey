ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 botania:mystical_flowers 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "strainers:strainer",
                aboveFluid: "minecraft:water",
                chance: 0.05,
                chanceIncreasePerTier: 0.0,
                duration: 200,
                ingredients: [
                    {
                        item: "botania:fertilizer",
                    },
                ],
                minMeshTier: 1,
                output: {
                    item: item,
                },
            });
        });
});
