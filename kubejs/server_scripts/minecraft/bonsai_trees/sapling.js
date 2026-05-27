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

    // 添加 minecraft:sugar_cane 的配方
    event.custom({
        type: "bonsaitrees3:sapling",
        sapling: { item: "minecraft:sugar_cane" },
        drops: [
            {
                result: { item: "minecraft:sugar_cane" },
                rolls: 1,
                chance: 1.0,
            },
        ],
        compatibleSoilTags: ["dirt", "grass", "sand"],
    });

    // 添加 minecraft:crimson_stem, minecraft:nether_wart_block, minecraft:crimson_roots, minecraft:shroomlight 和 minecraft:crimson_fungus 的配方
    event.custom({
        type: "bonsaitrees3:sapling",
        sapling: { item: "minecraft:crimson_fungus" },
        drops: [
            {
                result: { item: "minecraft:crimson_stem" },
                rolls: 1,
                chance: 1.0,
            },
            {
                result: { item: "minecraft:nether_wart_block" },
                rolls: 1,
                chance: 0.6,
            },
            {
                result: { item: "minecraft:crimson_roots" },
                rolls: 1,
                chance: 0.25,
            },
            {
                result: { item: "minecraft:shroomlight" },
                rolls: 1,
                chance: 0.15,
            },
            {
                result: { item: "minecraft:crimson_fungus" },
                rolls: 1,
                chance: 0.1,
            },
        ],
        compatibleSoilTags: ["netherrack", "crimson_nylium"],
    });
});
