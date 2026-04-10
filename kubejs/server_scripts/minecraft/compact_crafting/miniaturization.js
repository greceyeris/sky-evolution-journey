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
                    ["C", "C", "C"],
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
                block: "gtceu:flint_block",
            },
        },
        catalyst: "minecraft:flint",
        outputs: ["minecraft:furnace"],
    });
});
