ServerEvents.recipes((event) => {
    // 添加配方
    // smelting
    // 添加 minecraft:nether_brick 的配方
    event.smelting("minecraft:nether_brick", "gtceu:netherrack_dust");

    // 添加 minecraft:coal 的配方
    event.smelting("2x minecraft:coal", "gtceu:raw_coal");

    // 添加 minecraft:copper_ingot 的配方
    event.smelting("minecraft:copper_ingot", "minecraft:raw_copper");

    // 添加 minecraft:redstone 的配方
    event.smelting("5x minecraft:redstone", "gtceu:raw_redstone");

    // 添加 minecraft:lapis_lazuli 的配方
    event.smelting("6x minecraft:lapis_lazuli", "gtceu:raw_lapis");

    // 添加 minecraft:brick 的配方
    event.smelting("minecraft:brick", "gtceu:compressed_clay");

    // 添加 minecraft:terracotta 的配方
    event.smelting("minecraft:terracotta", "minecraft:clay");

    // 添加 minecraft:baked_potato 的配方
    event.smelting("minecraft:baked_potato", "minecraft:potato");

    // 添加 minecraft:stone 的配方
    event.smelting("minecraft:stone", "minecraft:cobblestone");

    // 添加 minecraft:smooth_stone 的配方
    event.smelting("minecraft:smooth_stone", "minecraft:stone");
});
