ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_squeezer
    // 添加 integrateddynamics:liquid_chorus 和 integrateddynamics:crystalized_chorus_chunk 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "minecraft:popped_chorus_fruit",
        result: {
            fluid: {
                fluid: "integrateddynamics:liquid_chorus",
                amount: 125,
            },
            items: [
                {
                    item: {
                        item: "integrateddynamics:crystalized_chorus_chunk",
                        count: 2,
                    },
                },
                {
                    item: "integrateddynamics:crystalized_chorus_chunk",
                    chance: 0.5,
                },
                {
                    item: "integrateddynamics:crystalized_chorus_chunk",
                    chance: 0.5,
                },
            ],
        },
        duration: 15,
    });

    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "integrateddynamics:proto_chorus",
        result: {
            fluid: {
                fluid: "integrateddynamics:liquid_chorus",
                amount: 125,
            },
            items: [
                {
                    item: "integrateddynamics:crystalized_chorus_chunk",
                    chance: 0.5,
                },
                {
                    item: "integrateddynamics:crystalized_chorus_chunk",
                    chance: 0.5,
                },
            ],
        },
        duration: 15,
    });

    // 添加 integrateddynamics:menril_resin 和 integrateddynamics:crystalized_menril_chunk 的配方
    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "integrateddynamics:menril_log",
        result: {
            fluid: {
                fluid: "integrateddynamics:menril_resin",
                amount: 1000,
            },
            items: [
                {
                    item: {
                        item: "integrateddynamics:crystalized_menril_chunk",
                        count: 2,
                    },
                },
                {
                    item: "integrateddynamics:crystalized_menril_chunk",
                    chance: 0.5,
                },
                {
                    item: "integrateddynamics:crystalized_menril_chunk",
                    chance: 0.5,
                },
            ],
        },
        duration: 15,
    });

    event.custom({
        type: "integrateddynamics:mechanical_squeezer",
        item: "integrateddynamics:menril_planks",
        result: {
            fluid: {
                fluid: "integrateddynamics:menril_resin",
                amount: 250,
            },
            items: [
                {
                    item: "integrateddynamics:crystalized_menril_chunk",
                },
            ],
        },
        duration: 15,
    });
});
