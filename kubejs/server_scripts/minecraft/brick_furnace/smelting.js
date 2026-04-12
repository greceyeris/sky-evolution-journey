ServerEvents.recipes((event) => {
    // 添加配方
    // brickfurnace:smelting
    // 添加 minecraft:brick 的配方
    event.custom({
        type: "brickfurnace:smelting",
        ingredient: {
            item: "gtceu:compressed_clay",
        },
        result: "minecraft:brick",
        experience: 0.3,
        cookingtime: 300,
    });

    // 添加 minecraft:stone 的配方
    event.custom({
        type: "brickfurnace:smelting",
        ingredient: {
            item: "minecraft:cobblestone",
        },
        result: "minecraft:stone",
        experience: 0.3,
        cookingtime: 300,
    });

    // 添加 minecraft:smooth_stone 的配方
    event.custom({
        type: "brickfurnace:smelting",
        ingredient: {
            item: "minecraft:stone",
        },
        result: "minecraft:smooth_stone",
        experience: 0.3,
        cookingtime: 300,
    });

    // 添加 minecraft:glass 的配方
    event.custom({
        type: "brickfurnace:smelting",
        ingredient: {
            item: "gtceu:glass_dust",
        },
        result: "minecraft:glass",
        experience: 0.3,
        cookingtime: 300,
    });
});
