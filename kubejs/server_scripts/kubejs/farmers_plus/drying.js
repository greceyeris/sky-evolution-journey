ServerEvents.recipes((event) => {
    // 添加配方
    // farmersplus:drying
    // 添加 kubejs:dirt_pile 的配方
    event.custom({
        type: "farmersplus:drying",
        dryingtime: 50,
        ingredients: [
            {
                item: "kubejs:humus_pile",
            },
        ],
        result: {
            item: "kubejs:dirt_pile",
        },
    });
});
