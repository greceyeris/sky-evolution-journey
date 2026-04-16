ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:crystallizing
    // 添加 minecraft:mud 的配方
    event.custom({
        type: "simpleprocessingmachines:crystallizing",
        inputs: { ingredients: { items: { item: "minecraft:dirt" } } },
        results: { items: { item: "minecraft:mud" } },
        input_fluids: {
            fluid_ingredients: {
                fluid_stack: { fluid: "minecraft:water", amount: 250 },
                consumption_per_operation: 2,
            },
        },
        crafting_time: 100,
    });
});
