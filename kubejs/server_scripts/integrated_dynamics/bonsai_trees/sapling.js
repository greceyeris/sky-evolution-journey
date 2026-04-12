ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:sapling
    // 添加 integrateddynamics:menril_log, integrateddynamics:crystalized_menril_chunk, integrateddynamics:menril_leaves, minecraft:stick, integrateddynamics:menril_sapling, integrateddynamics:menril_berries 的配方
    event.custom({
        type: "bonsaitrees3:sapling",
        sapling: { item: "integrateddynamics:menril_sapling" },
        compatibleSoilTags: ["dirt", "grass"],
        drops: [
            {
                result: { item: "integrateddynamics:menril_log" },
                rolls: 1,
                chance: 0.8,
            },
            {
                result: { item: "integrateddynamics:crystalized_menril_chunk" },
                rolls: 1,
                chance: 0.8,
            },
            {
                result: { item: "integrateddynamics:menril_leaves" },
                rolls: 1,
                chance: 0.4,
            },
            { result: { item: "minecraft:stick" }, rolls: 2, chance: 0.25 },
            {
                result: { item: "integrateddynamics:menril_sapling" },
                rolls: 1,
                chance: 0.15,
            },
            {
                result: { item: "integrateddynamics:menril_berries" },
                rolls: 1,
                chance: 0.05,
            },
        ],
    });
});
