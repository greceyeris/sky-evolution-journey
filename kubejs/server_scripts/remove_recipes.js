// priority: -999

ServerEvents.recipes((event) => {
    console.log("#####", Ingredient.of("@opolisutilities").getItemIds());

    // 定义 removeRecipesUsedRecipeId 数组
    const removeRecipesUsedRecipeId = [
        //gtceu
        "gtceu:shaped/stick_normal",
        "gtceu:shapeless/oak_planks",
        "gtceu:shaped/bowl",
        "gtceu:shaped/oak_planks_saw",
        "gtceu:shaped/oak_slab_saw",

        // opolisutilities
        "opolisutilities:sticks",
        "opolisutilities:charcoal",
        "opolisutilities:mini_charcoal",

        // strainers
        "strainers:dirt",

        // farmersdelight
        "farmersdelight:flint_knife",
        "farmersdelight:iron_knife",
    ];

    // 定义 removeRecipesUsedItemInput 数组
    const removeRecipesUsedItemInput = [];

    // 定义 removeRecipesUsedItemOutput 数组
    const removeRecipesUsedItemOutput = [
        // farmersdelight
        "farmersdelight:cutting_board",

        // integrateddynamics
        "integrateddynamics:squeezer",
        "integrateddynamics:drying_basin",

        // gtceu
        "gtceu:flint_axe",
        "gtceu:empty_wooden_form",
        "gtceu:brick_wooden_form",

        // minecraft
        "minecraft:campfire",
        "minecraft:furnace",

        // strainers
        "strainers:purifying_salt_mulch",
        "strainers:flint_mesh",

        // opolisutilities
        "opolisutilities:leafy_string",
    ];

    // 定义 removeRecipesUsedItemInputAndOutput 数组
    const removeRecipesUsedItemInputAndOutput = [
        // c
        "#c:hidden_from_recipe_viewers",
    ];

    // 定义 removeRecipesUsedType 数组
    const removeRecipesUsedType = [
        // integrateddynamics
        "integrateddynamics:drying_basin",
        "integrateddynamics:squeezer",
        "integrateddynamics:mechanical_drying_basin",
        "integrateddynamics:mechanical_squeezer",
    ];

    // 定义 removeRecipesUsedTypeAndInput 数组
    const removeRecipesUsedTypeAndInput = [];

    // 定义 removeRecipesUsedTypeAndOutput 数组
    const removeRecipesUsedTypeAndOutput = [];

    // 删除配方
    // removeRecipesUsedRecipeId
    removeRecipesUsedRecipeId.forEach((id) => {
        // remove id
        event.remove({ id: id });
    });

    // removeRecipesUsedItemInput
    removeRecipesUsedItemInput.forEach((item) => {
        // remove input
        event.remove({ input: item });
    });

    // removeRecipesUsedItemOutput
    removeRecipesUsedItemOutput.forEach((item) => {
        // remove output
        event.remove({ output: item });
    });

    // removeRecipesUsedItemInputAndOutput
    removeRecipesUsedItemInputAndOutput.forEach((item) => {
        // remove input
        event.remove({ input: item });

        // remove output
        event.remove({ output: item });
    });

    // // c:hidden_from_recipe_viewers
    // // remove input
    // event.remove({ input: Ingredient.of("#c:hidden_from_recipe_viewers") });

    // // remove output
    // event.remove({ output: Ingredient.of("#c:hidden_from_recipe_viewers") });

    // removeRecipesUsedType
    removeRecipesUsedType.forEach((type) => {
        // remove type
        event.remove({ type: type });
    });

    // removeRecipesUsedTypeAndInput
    removeRecipesUsedTypeAndInput.forEach((obj) => {
        // remove type and input
        event.remove({ type: obj.type, input: Ingredient.of(obj.input) });
    });

    // removeRecipesUsedTypeAndOutput
    removeRecipesUsedTypeAndOutput.forEach((obj) => {
        // remove type and output
        event.remove({ type: obj.type, output: Ingredient.of(obj.output) });
    });
});
