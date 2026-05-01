ServerEvents.recipes((event) => {
    // 添加配方
    // brewinandchewin:fermenting
    // 添加 kubejs:humus_pile 的配方
    event.custom({
        type: "brewinandchewin:fermenting",
        ingredients: [
            {
                tag: "kubejs:organic_matters",
            },
        ],
        result: {
            item: "kubejs:humus_pile",
            count: 1,
        },
        fermentingtime: 100,
        temperature: 3,
    });
});
