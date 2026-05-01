ServerEvents.recipes((event) => {
    // 添加配方
    // brewinandchewin:fermenting
    // 添加 kubejs:humus_pile 的配方
    event.custom({
        type: "brewinandchewin:fermenting",
        ingredients: [
            {
                item: "minecraft:bone_meal",
            },
        ],
        basefluid: {
            fluid: "strainers:purified_water_fluid",
            count: 250,
        },
        result: {
            item: "botania:fertilizer",
            count: 1,
        },
        fermentingtime: 200,
        temperature: 3,
    });
});
