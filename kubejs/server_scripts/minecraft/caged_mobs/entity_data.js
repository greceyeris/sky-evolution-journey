ServerEvents.recipes((event) => {
    // 添加配方
    // cagedmobs:entity_data
    // 添加 minecraft:creeper 的掉落物
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

    // 添加 minecraft:chicken 的掉落物
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
                chance: 0.35,
                output: {
                    item: "minecraft:egg",
                },
                output_cooked: {
                    item: "farmersdelight:fried_egg",
                },
                minAmount: 0,
                maxAmount: 1,
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

    // 添加 minecraft:spider 的掉落物
    event.custom({
        type: "cagedmobs:entity_data",
        entity: "minecraft:spider",
        samplerTier: 1,
        environments: ["cave"],
        growTicks: 900,
        results: [
            {
                chance: 1.0,
                output: {
                    item: "minecraft:string",
                },
                minAmount: 0,
                maxAmount: 2,
            },
            {
                chance: 0.33,
                output: {
                    item: "minecraft:spider_eye",
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

    // 添加 minecraft:cow 的掉落物
    event.custom({
        type: "cagedmobs:entity_data",
        entity: "minecraft:cow",
        samplerTier: 1,
        environments: ["plain"],
        growTicks: 900,
        results: [
            {
                chance: 1.0,
                output: {
                    item: "minecraft:leather",
                },
                minAmount: 0,
                maxAmount: 2,
            },
            {
                chance: 1.0,
                output: {
                    item: "minecraft:beef",
                },
                output_cooked: {
                    item: "minecraft:cooked_beef",
                },
                minAmount: 1,
                maxAmount: 3,
            },
            {
                chance: 1.0,
                output: {
                    item: "cagedmobs:milk_drop",
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
