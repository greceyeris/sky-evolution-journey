ServerEvents.recipes((event) => {
    // 定义 addRecipesUsedShapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "minecraft:stick",
            inputs: ["kubejs:twig"],
        },
        {
            output: "minecraft:string",
            inputs: [
                "opolisutilities:leafy_string",
                "opolisutilities:leafy_string",
                "opolisutilities:leafy_string",
            ],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
