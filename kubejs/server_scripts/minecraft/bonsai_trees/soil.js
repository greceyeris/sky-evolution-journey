ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:soil
    // 添加 minecraft:dirt 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:dirt" },
        tickModifier: 4.5,
        compatibleSoilTags: ["dirt"],
        display: { block: "minecraft:dirt" },
    });

    // 添加 minecraft:grass_block 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:grass_block" },
        tickModifier: 3.0,
        compatibleSoilTags: ["grass"],
        display: { block: "minecraft:grass_block" },
    });

    // 添加 minecraft:sand 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:sand" },
        tickModifier: 4.5,
        compatibleSoilTags: ["sand"],
        display: { block: "minecraft:sand" },
    });

    // 添加 minecraft:red_sand 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:red_sand" },
        tickModifier: 4.5,
        compatibleSoilTags: ["sand"],
        display: { block: "minecraft:red_sand" },
    });

    // 添加 minecraft:netherrack 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:netherrack" },
        tickModifier: 4.5,
        compatibleSoilTags: ["netherrack"],
        display: { block: "minecraft:netherrack" },
    });

    // 添加 minecraft:crimson_nylium 的配方
    event.custom({
        type: "bonsaitrees3:soil",
        soil: { item: "minecraft:crimson_nylium" },
        tickModifier: 3.0,
        compatibleSoilTags: ["crimson_nylium"],
        display: { block: "minecraft:crimson_nylium" },
    });
});
