ServerEvents.recipes((event) => {
    // 定义 shapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "botania:vivid_grass",
            inputs: ["minecraft:dirt", "botania:vivid_seeds"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
