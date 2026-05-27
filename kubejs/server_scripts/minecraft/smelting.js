ServerEvents.recipes((event) => {
    // 添加配方
    // smelting
    // 添加 minecraft:brick 的配方
    event.smelting("minecraft:nether_brick", "gtceu:netherrack_dust");

    // 添加 minecraft:coal 的配方
    event.smelting("minecraft:coal", "gtceu:raw_coal");

    // 添加 minecraft:copper_ingot 的配方
    event.smelting("minecraft:copper_ingot", "minecraft:raw_copper");

    // 添加 minecraft:redstone 的配方
    event.smelting("5x minecraft:redstone", "gtceu:raw_redstone");

    // 添加 minecraft:lapis_lazuli 的配方
    event.smelting("6x minecraft:lapis_lazuli", "gtceu:raw_lapis");
});
