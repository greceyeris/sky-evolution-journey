ServerEvents.recipes((event) => {
    // 添加配方
    // opolisutilities:drying_table
    // 添加 kubejs:dirt_pile 的配方
    event.custom({
        type: "opolisutilities:drying_table",
        ingredient: [
            {
                item: "kubejs:humus_pile",
            },
        ],
        count: 1,
        output: {
            item: "kubejs:dirt_pile",
        },
        duration: 100,
    });
});
