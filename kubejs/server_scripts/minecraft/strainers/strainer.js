ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 minecraft:calcite 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 1.0,
        chanceIncreasePerTier: 0.0,
        duration: 240,
        ingredients: [
            {
                item: "minecraft:diorite",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "minecraft:calcite",
        },
    });
});
