ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:drying_basin
    // 添加 kubejs:humus_pile 的配方
    event.custom({
        type: "integrateddynamics:drying_basin",
        item: "kubejs:organic_matter_pile",
        fluid: {
            fluid: "minecraft:water",
            amount: 250,
        },
        duration: 100,
        result: {
            item: "kubejs:humus_pile",
        },
    });

    // 添加 kubejs:dirt_pile 的配方
    event.custom({
        type: "integrateddynamics:drying_basin",
        item: "kubejs:humus_pile",
        duration: 100,
        result: {
            item: "kubejs:dirt_pile",
        },
    });
});
