ServerEvents.recipes((event) => {
    // 定义 shapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "9x minecraft:flint",
            inputs: ["gtceu:flint_block"],
        },
        {
            output: "9x gtceu:copper_nugget",
            inputs: ["minecraft:copper_ingot"],
        },
        {
            output: "9x gtceu:andesite_alloy_nugget",
            inputs: ["gtceu:andesite_alloy_ingot"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
