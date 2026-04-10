ServerEvents.recipes((event) => {
    // 添加配方
    // campfireCooking
    // 添加 minecraft:brick 的配方
    event.campfireCooking("minecraft:brick", "gtceu:compressed_clay", 0.3, 400);

    // 添加 minecraft:stone 的配方
    event.campfireCooking("minecraft:stone", "minecraft:cobblestone", 0.3, 400);

    // 添加 minecraft:smooth_stone 的配方
    event.campfireCooking("minecraft:smooth_stone", "minecraft:stone", 0.3, 400);

    // 添加 minecraft:glass 的配方
    event.campfireCooking("minecraft:glass", "gtceu:glass_dust", 0.3, 400);
});
