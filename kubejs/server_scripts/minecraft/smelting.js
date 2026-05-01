ServerEvents.recipes((event) => {
    // 添加配方
    // smelting
    // 添加 minecraft:brick 的配方
    event.smelting("minecraft:nether_brick", "gtceu:netherrack_dust");

    // 添加 minecraft:coal 的配方
    event.smelting("minecraft:coal", "gtceu:raw_coal");
});
