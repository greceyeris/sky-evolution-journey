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
});
