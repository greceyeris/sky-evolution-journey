ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 minecraft:calcite 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 1.0,
        chanceIncreasePerTier: 0.0,
        duration: 200,
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

    // 添加 minecraft:granite 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "strainers:purified_water_fluid",
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:stone",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "minecraft:granite",
        },
    });

    // 添加 minecraft:diorite 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "strainers:purified_water_fluid",
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:stone",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "minecraft:diorite",
        },
    });

    // 添加 minecraft:andesite 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "strainers:purified_water_fluid",
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:stone",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "minecraft:andesite",
        },
    });

    // 添加 minecraft:flint 的配方
    event.custom({
        type: "strainers:strainer",
        aboveFluid: "minecraft:water",
        chance: 0.25,
        chanceIncreasePerTier: 0.05,
        duration: 200,
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        minMeshTier: 1,
        output: {
            item: "minecraft:flint",
        },
    });

    // 添加 minecraft:all_small_flowers 的配方
    Ingredient.of("#minecraft:all_small_flowers")
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
                        item: "minecraft:bone_meal",
                    },
                ],
                minMeshTier: 1,
                output: {
                    item: item,
                },
            });
        });

    // 添加 minecraft:all_seeds 的配方
    Ingredient.of("#minecraft:all_seeds")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "strainers:strainer",
                aboveFluid: "minecraft:water",
                chance: 0.2,
                chanceIncreasePerTier: 0.0,
                duration: 200,
                ingredients: [
                    {
                        item: "strainers:mulch",
                    },
                ],
                minMeshTier: 1,
                output: {
                    item: item,
                },
            });
        });
});
