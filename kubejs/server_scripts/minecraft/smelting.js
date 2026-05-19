ServerEvents.recipes((event) => {
    // 添加配方
    // smelting
    // 添加 minecraft:brick 的配方
    event.smelting("minecraft:nether_brick", "gtceu:netherrack_dust");

    // 添加 minecraft:coal 的配方
    event.smelting("minecraft:coal", "gtceu:raw_coal");

    // 添加 minecraft:copper_ingot 的配方
    event.smelting("minecraft:copper_ingot", "minecraft:raw_copper");

    // 添加 minecraft:torch 的配方
    event.smelting("minecraft:torch", "#forge:rods/wooden");

    // 添加 minecraft:redstone 的配方
    event.smelting("minecraft:redstone", "gtceu:raw_redstone");
});
