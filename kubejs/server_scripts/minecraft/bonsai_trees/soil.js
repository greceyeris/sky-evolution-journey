ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:soil
    // 添加 minecraft:dirt 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:dirt" },
        tickModifier: 6.0,
        compatibleSoilTags: ["dirt"],
        display: { block: "minecraft:dirt" },
    });

    // 添加 minecraft:grass_block 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:grass_block" },
        tickModifier: 4.0,
        compatibleSoilTags: ["grass"],
        display: { block: "minecraft:grass_block" },
    });
});
