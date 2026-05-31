ServerEvents.recipes((event) => {
    // 定义 addRecipesUsedShapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "botanypots:terracotta_hopper_botany_pot",
            inputs: [
                "botanypots:terracotta_botany_pot",
                "woodenhopper:wooden_hopper",
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
