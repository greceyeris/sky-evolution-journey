ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:crystallizing
    // 添加 gtceu:purified_copper_ore 的配方
    event.custom({
        type: "simpleprocessingmachines:crystallizing",
        inputs: {
            ingredients: {
                items: {
                    item: "gtceu:crushed_copper_ore",
                },
            },
        },
        input_fluids: {
            fluid_ingredients: {
                consumption_per_operation: 2,
                fluid_stack: { fluid: "minecraft:water", amount: 125 },
            },
        },
        results: {
            items: {
                item: "gtceu:purified_copper_ore",
            },
        },
        crafting_time: 100,
    });

    // 添加 gtceu:copper_dust 的配方
    event.custom({
        type: "simpleprocessingmachines:crystallizing",
        inputs: {
            ingredients: {
                items: {
                    item: "gtceu:pure_copper_dust",
                },
            },
        },
        input_fluids: {
            fluid_ingredients: {
                consumption_per_operation: 2,
                fluid_stack: { fluid: "minecraft:water", amount: 125 },
            },
        },
        results: {
            items: {
                item: "gtceu:copper_dust",
            },
        },
        crafting_time: 100,
    });
});
