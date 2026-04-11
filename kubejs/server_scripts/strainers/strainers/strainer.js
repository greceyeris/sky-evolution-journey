ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 strainers:stone_pebble 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 1.0,
        chanceIncreasePerTier: 0.05,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "strainers:stone_pebble",
        },
    });

    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 0.8,
        chanceIncreasePerTier: 0.05,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "strainers:stone_pebble",
        },
    });

    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 0.6,
        chanceIncreasePerTier: 0.05,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "strainers:stone_pebble",
        },
    });

    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 0.4,
        chanceIncreasePerTier: 0.05,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "strainers:stone_pebble",
        },
    });

    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 0.2,
        chanceIncreasePerTier: 0.05,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "strainers:stone_pebble",
        },
    });
});
