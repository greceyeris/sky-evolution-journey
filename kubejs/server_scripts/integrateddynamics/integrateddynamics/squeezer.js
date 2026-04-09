ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:squeezer
    // 添加 integrateddynamics:liquid_chorus 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:popped_chorus_fruit",
        result: {
            fluid: {
                fluid: "integrateddynamics:liquid_chorus",
                amount: 125,
            },
        },
    });

    event.custom({
        type: "integrateddynamics:squeezer",
        item: "integrateddynamics:proto_chorus",
        result: {
            fluid: {
                fluid: "integrateddynamics:liquid_chorus",
                amount: 125,
            },
        },
    });

    // 添加 integrateddynamics:menril_resin 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "integrateddynamics:menril_log",
        result: {
            fluid: {
                fluid: "integrateddynamics:menril_resin",
                amount: 1000,
            },
        },
    });

    event.custom({
        type: "integrateddynamics:squeezer",
        item: "integrateddynamics:menril_planks",
        result: {
            fluid: {
                fluid: "integrateddynamics:menril_resin",
                amount: 250,
            },
        },
    });
});
