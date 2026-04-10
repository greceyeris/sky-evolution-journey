ServerEvents.recipes((event) => {
    // 定义 shapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "9x minecraft:flint",
            inputs: ["gtceu:flint_block"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
