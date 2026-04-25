ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:soil
    // 添加 botania:vivid_grass 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "botania:vivid_grass" },
        tickModifier: 4.0,
        compatibleSoilTags: ["vivid_grass"],
        display: { block: "botania:vivid_grass" },
    });
});
