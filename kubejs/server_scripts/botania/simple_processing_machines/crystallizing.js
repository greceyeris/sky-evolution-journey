ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:crystallizing
    // 添加 botania:fertilizer 的配方
    event.custom({
        type: "simpleprocessingmachines:crystallizing",
        inputs: { ingredients: { items: { item: "minecraft:bone_meal" } } },
        input_fluids: {
            fluid_ingredients: {
                fluid_stack: {
                    fluid: "strainers:purified_water_fluid",
                    amount: 250,
                },
                consumption_per_operation: 2,
            },
        },
        results: { items: { item: "botania:fertilizer" } },
        crafting_time: 200,
    });
});
