ServerEvents.recipes((event) => {
    // 添加配方
    // strainers:strainer
    // 添加 minecraft:andesite 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:stone" }],
        output: { item: "minecraft:andesite" },
        aboveFluid: "strainers:purified_water_fluid",
        minMeshTier: 1,
        duration: 200,
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
    });

    // 添加 minecraft:granite 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:stone" }],
        output: { item: "minecraft:granite" },
        aboveFluid: "strainers:purified_water_fluid",
        minMeshTier: 1,
        duration: 200,
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
    });

    // 添加 minecraft:diorite 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:stone" }],
        output: { item: "minecraft:diorite" },
        aboveFluid: "strainers:purified_water_fluid",
        minMeshTier: 1,
        duration: 200,
        chance: 0.35,
        chanceIncreasePerTier: 0.02,
    });

    // 添加 minecraft:calcite 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:diorite" }],
        output: { item: "minecraft:calcite" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.6,
        chanceIncreasePerTier: 0.05,
    });

    // 添加 minecraft:flint 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:dirt" }],
        output: { item: "minecraft:flint" },
        aboveFluid: "minecraft:water",
        minMeshTier: 1,
        duration: 200,
        chance: 0.25,
        chanceIncreasePerTier: 0.05,
    });

    // 添加 minecraft:all_small_flowers 的配方
    Ingredient.of("#minecraft:all_small_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "strainers:strainer",
                ingredients: [{ item: "minecraft:bone_meal" }],
                output: { item: item },
                aboveFluid: "minecraft:water",
                minMeshTier: 1,
                duration: 200,
                chance: 0.05,
                chanceIncreasePerTier: 0.0,
            });
        });

    // 添加 minecraft:all_seeds 的配方
    Ingredient.of("#minecraft:all_seeds")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "strainers:strainer",
                ingredients: [{ item: "strainers:mulch" }],
                output: { item: item },
                aboveFluid: "minecraft:water",
                minMeshTier: 1,
                duration: 200,
                chance: 0.2,
                chanceIncreasePerTier: 0.0,
            });
        });

    // 添加 minecraft:kelp 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:sand" }],
        output: { item: "minecraft:kelp" },
        aboveFluid: "minecraft:water",
        minMeshTier: 2,
        duration: 200,
        chance: 0.05,
        chanceIncreasePerTier: 0.01,
    });

    // 添加 minecraft:cactus 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:sand" }],
        output: { item: "minecraft:cactus" },
        aboveFluid: "minecraft:water",
        minMeshTier: 2,
        duration: 200,
        chance: 0.05,
        chanceIncreasePerTier: 0.01,
    });

    // 添加 minecraft:seagrass 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:sand" }],
        output: { item: "minecraft:seagrass" },
        aboveFluid: "minecraft:water",
        minMeshTier: 2,
        duration: 200,
        chance: 0.05,
        chanceIncreasePerTier: 0.01,
    });

    // 添加 minecraft:sea_pickle 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:sand" }],
        output: { item: "minecraft:sea_pickle" },
        aboveFluid: "minecraft:water",
        minMeshTier: 2,
        duration: 200,
        chance: 0.05,
        chanceIncreasePerTier: 0.01,
    });

    // 添加 minecraft:sugar_cane 的配方
    event.custom({
        type: "strainers:strainer",
        ingredients: [{ item: "minecraft:sand" }],
        output: { item: "minecraft:sugar_cane" },
        aboveFluid: "minecraft:water",
        minMeshTier: 2,
        duration: 200,
        chance: 0.05,
        chanceIncreasePerTier: 0.01,
    });
});
