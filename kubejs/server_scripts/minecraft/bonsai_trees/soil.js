ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:soil
    // 添加 minecraft:dirt 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:dirt" },
        tickModifier: 3.0,
        compatibleSoilTags: ["dirt"],
        display: { block: "minecraft:dirt" },
    });

    // 添加 minecraft:l 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:grass_block" },
        tickModifier: 2.5,
        compatibleSoilTags: ["grass", "dirt"],
        display: { block: "minecraft:grass_block" },
    });
});
