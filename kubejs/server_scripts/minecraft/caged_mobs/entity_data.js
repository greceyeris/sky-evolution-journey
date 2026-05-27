ServerEvents.recipes((event) => {
    // 添加配方
    // cagedmobs:entity_data
    // 添加 minecraft:gunpowder 和 create:experience_nugget 的配方
    event.custom({
        type: "cagedmobs:entity_data",
        entity: "minecraft:creeper",
        samplerTier: 1,
        environments: ["cave"],
        growTicks: 900,
        results: [
            {
                chance: 1.0,
                output: {
                    item: "minecraft:gunpowder",
                },
                minAmount: 0,
                maxAmount: 2,
            },
            {
                chance: 1.0,
                output: {
                    item: "create:experience_nugget",
                },
                minAmount: 1,
                maxAmount: 1,
            },
        ],
    });

    // 添加 minecraft:feather, minecraft:chicken, minecraft:cooked_chicken 和 create:experience_nugget 的配方
    event.custom({
        type: "cagedmobs:entity_data",
        entity: "minecraft:chicken",
        samplerTier: 1,
        environments: ["plain"],
        growTicks: 900,
        results: [
            {
                chance: 1.0,
                output: {
                    item: "minecraft:feather",
                },
                minAmount: 0,
                maxAmount: 2,
            },
            {
                chance: 1.0,
                output: {
                    item: "minecraft:chicken",
                },
                output_cooked: {
                    item: "minecraft:cooked_chicken",
                },
                minAmount: 1,
                maxAmount: 1,
            },
            {
                chance: 1.0,
                output: {
                    item: "create:experience_nugget",
                },
                minAmount: 1,
                maxAmount: 1,
            },
        ],
    });
});
