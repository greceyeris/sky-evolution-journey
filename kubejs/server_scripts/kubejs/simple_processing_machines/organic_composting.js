ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:organic_composting
    // 添加 kubejs:humus_pile 的配方
    event.custom({
        type: "simpleprocessingmachines:organic_composting",
        inputs: {
            ingredients: {
                items: { tag: "kubejs:organic_matters" },
                count: 4,
            },
        },
        results: {
            items: { item: "kubejs:humus_pile" },
        },
        crafting_time: 100,
    });
});
