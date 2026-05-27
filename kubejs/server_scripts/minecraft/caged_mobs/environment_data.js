ServerEvents.recipes((event) => {
    // 添加配方
    // cagedmobs:environment_data
    // 添加 minecraft:cobblestone 的环境
    event.custom({
        type: "cagedmobs:environment_data",
        input: {
            item: "minecraft:cobblestone",
        },
        render: "minecraft:cobblestone",
        growModifier: 1.0,
        categories: ["cave"],
    });

    // 添加 minecraft:mossy_cobblestone 的环境
    event.custom({
        type: "cagedmobs:environment_data",
        input: {
            item: "minecraft:mossy_cobblestone",
        },
        render: "minecraft:mossy_cobblestone",
        growModifier: 1.5,
        categories: ["cave"],
    });

    // 添加 minecraft:dirt 的环境
    event.custom({
        type: "cagedmobs:environment_data",
        input: {
            item: "minecraft:dirt",
        },
        render: "minecraft:dirt",
        growModifier: 1.0,
        categories: ["plain"],
    });

    // 添加 minecraft:grass_block 的环境
    event.custom({
        type: "cagedmobs:environment_data",
        input: {
            item: "minecraft:grass_block",
        },
        render: "minecraft:grass_block",
        growModifier: 1.5,
        categories: ["plain"],
    });
});
