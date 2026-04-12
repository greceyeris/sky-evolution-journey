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
});
