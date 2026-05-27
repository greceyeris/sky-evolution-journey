ServerEvents.recipes((event) => {
    // 定义 addRecipesUsedShapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "9x ftbmaterials:sulfur",
            inputs: ["ftbmaterials:sulfur_block"],
        },
        {
            output: "9x ftbmaterials:niter",
            inputs: ["ftbmaterials:niter_block"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
