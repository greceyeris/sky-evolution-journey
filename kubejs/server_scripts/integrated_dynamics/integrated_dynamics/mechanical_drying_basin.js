ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_drying_basin
    // 添加 integrateddynamics:crystalized_chorus_block 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        fluid: {
            fluid: "integrateddynamics:liquid_chorus",
            amount: 1000,
        },
        result: {
            item: "integrateddynamics:crystalized_chorus_block",
        },
        duration: 30,
    });

    // 添加 integrateddynamics:crystalized_menril_block 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        fluid: {
            fluid: "integrateddynamics:menril_resin",
            amount: 1000,
        },
        result: {
            item: "integrateddynamics:crystalized_menril_block",
        },
        duration: 15,
    });
});
