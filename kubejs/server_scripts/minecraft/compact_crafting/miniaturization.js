ServerEvents.recipes((event) => {
    // 添加配方
    // compactcrafting:miniaturization
    // 添加 minecraft:furnace 的配方
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A"],
                    ["A", "A", "A"],
                    ["A", "A", "A"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A"],
                    ["A", "B", "A"],
                    ["A", "", "A"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["C", "C", "C"],
                    ["C", "D", "C"],
                    ["C", "C", "C"],
                ],
            },
        ],
        components: {
            A: {
                type: "compactcrafting:block",
                block: "minecraft:cobblestone",
            },
            B: {
                type: "compactcrafting:block",
                block: "minecraft:campfire",
            },
            C: {
                type: "compactcrafting:block",
                block: "minecraft:smooth_stone",
            },
            D: {
                type: "compactcrafting:block",
                block: "gtceu:flint_block",
            },
        },
        catalyst: "minecraft:flint",
        outputs: ["minecraft:furnace"],
    });

    // 添加 minecraft:chicken_spawn_egg 的配方
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 3,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A"],
                    ["A", "A", "A"],
                    ["B", "A", "B"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A"],
                    ["A", "C", "A"],
                    ["D", "D", "D"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A"],
                    ["A", "A", "A"],
                    ["A", "E", "A"],
                ],
            },
        ],
        components: {
            A: {
                type: "compactcrafting:block",
                block: "minecraft:white_wool",
            },
            B: {
                type: "compactcrafting:block",
                block: "minecraft:black_wool",
            },
            C: {
                type: "compactcrafting:block",
                block: "minecraft:hay_block",
            },
            D: {
                type: "compactcrafting:block",
                block: "minecraft:orange_wool",
            },
            E: {
                type: "compactcrafting:block",
                block: "minecraft:red_wool",
            },
        },
        catalyst: "mysticalagriculture:soulium_gemstone",
        outputs: ["minecraft:chicken_spawn_egg"],
    });

    // 添加 minecraft:creeper_spawn_egg 的配方
    event.custom({
        type: "compactcrafting:miniaturization",
        recipeSize: 5,
        layers: [
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A"],
                    ["B", "B", "A", "B", "B"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A", "A", "A"],
                    ["A", "C", "D", "C", "A"],
                    ["A", "D", "C", "D", "A"],
                    ["A", "C", "D", "C", "A"],
                    ["B", "B", "A", "B", "B"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A", "A", "A"],
                    ["A", "D", "C", "D", "A"],
                    ["A", "C", "E", "C", "A"],
                    ["A", "D", "C", "D", "A"],
                    ["A", "A", "B", "A", "A"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A", "A", "A"],
                    ["A", "C", "D", "C", "A"],
                    ["A", "D", "C", "D", "A"],
                    ["A", "C", "D", "C", "A"],
                    ["A", "B", "B", "B", "A"],
                ],
            },
            {
                type: "compactcrafting:mixed",
                pattern: [
                    ["A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A"],
                    ["A", "B", "A", "B", "A"],
                ],
            },
        ],
        components: {
            A: {
                type: "compactcrafting:block",
                block: "minecraft:green_wool",
            },
            B: {
                type: "compactcrafting:block",
                block: "minecraft:black_wool",
            },
            C: {
                type: "compactcrafting:block",
                block: "ftbmaterials:sulfur_block",
            },
            D: {
                type: "compactcrafting:block",
                block: "ftbmaterials:niter_block",
            },
            E: {
                type: "compactcrafting:block",
                block: "minecraft:coal_block",
            },
        },
        catalyst: "mysticalagriculture:soulium_gemstone",
        outputs: ["minecraft:creeper_spawn_egg"],
    });
});
