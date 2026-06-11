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
                duration: 150,
                chance: 0.2,
                chanceIncreasePerTier: 0.0,
            });
        });

    // 添加 botania:fertilizer 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:bone_meal" }],
        output: { item: "botania:fertilizer" },
        aboveFluid: "strainers:purified_water_fluid",
        minMeshTier: 1,
        duration: 150,
        chance: 1.0,
        chanceIncreasePerTier: 0.0,
    });
});
