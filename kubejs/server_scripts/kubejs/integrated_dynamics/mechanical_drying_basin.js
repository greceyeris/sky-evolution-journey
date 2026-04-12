ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:mechanical_drying_basin
    // 添加 kubejs:humus_pile 的配方
    Ingredient.of("#kubejs:organic_matters")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "integrateddynamics:mechanical_drying_basin",
                item: item,
                result: {
                    item: "kubejs:humus_pile",
                },
                duration: 40,
            });
        });

    // 添加 kubejs:dirt_pile 的配方
    event.custom({
        type: "integrateddynamics:mechanical_drying_basin",
        item: "kubejs:humus_pile",
        result: {
            item: "kubejs:dirt_pile",
        },
        duration: 40,
    });
});
