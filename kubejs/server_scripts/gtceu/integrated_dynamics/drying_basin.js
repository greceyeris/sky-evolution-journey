ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:drying_basin
    // 添加 gtceu:purified_redstone_ore 的配方
    event.custom({
        type: "integrateddynamics:drying_basin",
        item: "gtceu:crushed_redstone_ore",
        fluid: {
            fluid: "minecraft:water",
            amount: 125,
        },
        result: {
            item: "gtceu:purified_redstone_ore",
        },
        duration: 200,
    });
});
