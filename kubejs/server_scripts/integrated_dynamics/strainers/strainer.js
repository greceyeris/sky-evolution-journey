ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 integrateddynamics:menril_sapling 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "strainers:purified_water_fluid",
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:oak_sapling",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "integrateddynamics:menril_sapling",
        },
    });
});
