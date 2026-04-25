ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 strainers:stone_pebble 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:dirt" }],
        output: { item: "strainers:stone_pebble" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.6,
        chanceIncreasePerTier: 0.03,
    });

    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:dirt" }],
        output: { item: "strainers:stone_pebble" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.5,
        chanceIncreasePerTier: 0.03,
    });

    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:dirt" }],
        output: { item: "strainers:stone_pebble" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.4,
        chanceIncreasePerTier: 0.02,
    });

    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:dirt" }],
        output: { item: "strainers:stone_pebble" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.3,
        chanceIncreasePerTier: 0.02,
    });

    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:dirt" }],
        output: { item: "strainers:stone_pebble" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.2,
        chanceIncreasePerTier: 0.01,
    });
});
