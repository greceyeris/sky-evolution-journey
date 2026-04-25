ServerEvents.recipes((event) => {
    // 定义 addRecipesUsedShapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "minecraft:string",
            inputs: [
                "opolisutilities:leafy_string",
                "opolisutilities:leafy_string",
                "opolisutilities:leafy_string",
            ],
        },
        {
            output: "9x minecraft:redstone",
            inputs: ["minecraft:redstone_block"],
        },
        {
            output: "9x minecraft:bone_meal",
            inputs: ["minecraft:bone_block"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
