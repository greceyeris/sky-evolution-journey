ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:crystallizing
    // 添加 minecraft:mud 的配方
    event.custom({
        type: "simpleprocessingmachines:crystallizing",
        inputs: {
            ingredients: {
                items: {
                    item: "minecraft:dirt",
                },
            },
        },
        input_fluids: {
            fluid_ingredients: {
                consumption_per_operation: 2,
                fluid_stack: { fluid: "minecraft:water", amount: 250 },
            },
        },
        results: {
            items: {
                item: "minecraft:mud",
            },
        },
        crafting_time: 100,
    });

    // 添加 minecraft:redstone 的配方
    event.custom({
        type: "simpleprocessingmachines:crystallizing",
        inputs: {
            ingredients: {
                items: {
                    item: "gtceu:pure_redstone_dust",
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
                item: "minecraft:redstone",
            },
        },
        crafting_time: 100,
    });
});
