// priority: -1000

// 定义 replaceRecipesUsedTypeAndInput 数组
const replaceRecipesUsedTypeAndInput = [
    {
        type: "minecraft:crafting_shaped",
        input: "#gtceu:tools/crafting_knives",
        targetItem: "silentgear:knife",
    },
    {
        type: "minecraft:crafting_shapeless",
        input: "#gtceu:tools/crafting_knives",
        targetItem: "silentgear:knife",
    },
    {
        type: "minecraft:crafting_shaped",
        input: "#gtceu:tools/crafting_saws",
        targetItem: "silentgear:saw",
    },
    {
        type: "minecraft:crafting_shapeless",
        input: "#gtceu:tools/crafting_saws",
        targetItem: "silentgear:saw",
    },
    {
        type: "minecraft:crafting_shaped",
        input: "#gtceu:tools/crafting_hammers",
        targetItem: "silentgear:hammer",
    },
    {
        type: "minecraft:crafting_shapeless",
        input: "#gtceu:tools/crafting_hammers",
        targetItem: "silentgear:hammer",
    },
];

ServerEvents.recipes((event) => {
    // replaceRecipesUsedTypeAndInput
    replaceRecipesUsedTypeAndInput.forEach((obj) => {
        // replaceInput
        event.replaceInput(
            {
                type: obj.type,
                input: obj.input,
            },
            obj.input,
            Ingredient.of({
                type: "forge:partial_nbt",
                item: obj.targetItem,
                nbt: "{SGear_Data:{}}",
            }),
        );

        // forEachRecipe
        event.forEachRecipe(
            {
                type: obj.type,
                input: obj.targetItem,
            },
            (recipe) => {
                // remove
                event.remove({ id: recipe.getId() });

                if (obj.type === "minecraft:crafting_shaped") {
                    // shaped
                    event
                        .shaped(
                            !JSON.parse(recipe.json.toString()).result ||
                                recipe.originalRecipeResult.isEmpty()
                                ? "minecraft:barrier"
                                : recipe.originalRecipeResult,
                            JSON.parse(recipe.json.toString()).pattern,
                            JSON.parse(recipe.json.toString()).key,
                        )
                        .damageIngredient(obj.targetItem, 2)
                        .id(recipe.getId());
                } else if (obj.type === "minecraft:crafting_shapeless") {
                    // shapeless
                    event
                        .shapeless(
                            !JSON.parse(recipe.json.toString()).result ||
                                recipe.originalRecipeResult.isEmpty()
                                ? "minecraft:barrier"
                                : recipe.originalRecipeResult,
                            !JSON.parse(recipe.json.toString()).ingredients
                                ? ["minecraft:barrier"]
                                : recipe.originalRecipeIngredients,
                        )
                        .damageIngredient(obj.targetItem, 2)
                        .id(recipe.getId());
                }
            },
        );
    });
});
