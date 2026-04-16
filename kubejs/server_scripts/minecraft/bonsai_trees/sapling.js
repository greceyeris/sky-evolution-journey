ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:sapling
    // 添加 minecraft:oak_log, minecraft:oak_leaves, minecraft:stick, minecraft:oak_sapling, minecraft:apple 的配方
    event.custom({
        type: "bonsaitrees3:sapling",
        sapling: { item: "minecraft:oak_sapling" },
        drops: [
            { result: { item: "minecraft:oak_log" }, rolls: 1, chance: 0.8 },
            { result: { item: "minecraft:oak_leaves" }, rolls: 1, chance: 0.4 },
            { result: { item: "minecraft:stick" }, rolls: 2, chance: 0.25 },
            {
                result: { item: "minecraft:oak_sapling" },
                rolls: 1,
                chance: 0.15,
            },
            { result: { item: "minecraft:apple" }, rolls: 1, chance: 0.05 },
        ],
        compatibleSoilTags: ["dirt", "grass"],
    });
});
