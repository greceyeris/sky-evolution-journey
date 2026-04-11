// priority: -999

ServerEvents.recipes((event) => {
    // 定义 removeRecipesUsedRecipeId 数组
    const removeRecipesUsedRecipeId = [
        //gtceu
        "gtceu:shaped/stick_normal",
        "gtceu:shaped/bowl",
        "gtceu:shapeless/gravel_to_flint",
        "gtceu:shaped/sugar",
        "gtceu:shaped/quartz_sand",
        "gtceu:shapeless/clay_block_to_dust",
        "gtceu:shapeless/brick_block_to_dust",
        "gtceu:shapeless/clay_ball_to_dust",
        "gtceu:shapeless/brick_to_dust",
        "gtceu:shaped/stone_slab_saw",
        "gtceu:shaped/smooth_stone_slab_saw",
        "gtceu:shaped/glass_pane",
        "gtceu:shaped/mortar_grind_copper",
        "gtceu:shapeless/bone_to_bone_meal",

        // opolisutilities
        "opolisutilities:sticks",
        "opolisutilities:charcoal",
        "opolisutilities:mini_charcoal",

        // strainers
        "strainers:dirt",

        // farmersdelight
        "farmersdelight:flint_knife",
        "farmersdelight:iron_knife",

        // minecraft
        "minecraft:diorite",
        "minecraft:bone_meal",

        // botania
        "botania:petal_white",
        "botania:petal_white_double",
        "botania:petal_orange",
        "botania:petal_orange_double",
        "botania:petal_magenta",
        "botania:petal_magenta_double",
        "botania:petal_light_blue",
        "botania:petal_light_blue_double",
        "botania:petal_yellow",
        "botania:petal_yellow_double",
        "botania:petal_lime",
        "botania:petal_lime_double",
        "botania:petal_pink",
        "botania:petal_pink_double",
        "botania:petal_gray",
        "botania:petal_gray_double",
        "botania:petal_light_gray",
        "botania:petal_light_gray_double",
        "botania:petal_cyan",
        "botania:petal_cyan_double",
        "botania:petal_purple",
        "botania:petal_purple_double",
        "botania:petal_blue",
        "botania:petal_blue_double",
        "botania:petal_brown",
        "botania:petal_brown_double",
        "botania:petal_green",
        "botania:petal_green_double",
        "botania:petal_red",
        "botania:petal_red_double",
        "botania:petal_black",
        "botania:petal_black_double",

        // create
        "create:crafting/materials/copper_ingot",

        // crossroads
        "crossroads:smelting/dust_copper",
    ];

    // 定义 removeRecipesUsedItemInput 数组
    const removeRecipesUsedItemInput = [
        "#forge:ores",
        "#forge:crushed_ores",
        "#forge:purified_ores",
        "#forge:pure_dusts",
        "#forge:refined_ores",
        "#forge:impure_dusts",
    ];

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
        "minecraft:dirt",
        "minecraft:oak_planks",
        "minecraft:spruce_planks",
        "minecraft:birch_planks",
        "minecraft:jungle_planks",
        "minecraft:acacia_planks",
        "minecraft:dark_oak_planks",
        "minecraft:mangrove_planks",
        "minecraft:cherry_planks",
        "minecraft:crimson_planks",
        "minecraft:warped_planks",
        "minecraft:bamboo_planks",
        "minecraft:oak_slab",
        "minecraft:spruce_slab",
        "minecraft:birch_slab",
        "minecraft:jungle_slab",
        "minecraft:acacia_slab",
        "minecraft:dark_oak_slab",
        "minecraft:mangrove_slab",
        "minecraft:cherry_slab",
        "minecraft:crimson_slab",
        "minecraft:warped_slab",
        "minecraft:bamboo_slab",
        "minecraft:beehive",

        // strainers
        "strainers:purifying_salt_mulch",
        "strainers:flint_mesh",

        // opolisutilities
        "opolisutilities:leafy_string",

        // farmersplus
        "farmersplus:millstone",

        // compactcrafting
        "compactcrafting:base",
        "compactcrafting:projector_dish",
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

        // opolisutilities
        "opolisutilities:drying_table",
        "opolisutilities:fluid_generator",
        "opolisutilities:resource_generator",
        "opolisutilities:rg2_blocks",
        "opolisutilities:rg2_speed_blocks",
        "opolisutilities:soaking_table",

        // strainers
        "strainers:strainer",

        // farmersdelight
        "farmersdelight:cutting",

        // compactcrafting
        "compactcrafting:miniaturization",

        // farmersplus
        "farmersplus:drying",
        "farmersplus:milling",

        // bonsaitrees3
        "bonsaitrees3:soil",
        "bonsaitrees3:sapling",
    ];

    // 定义 removeRecipesUsedTypeAndInput 数组
    const removeRecipesUsedTypeAndInput = [
        { type: "minecraft:smelting", input: "#forge:raw_materials" },
        { type: "minecraft:blasting", input: "#forge:raw_materials" },
    ];

    // 定义 removeRecipesUsedTypeAndOutput 数组
    const removeRecipesUsedTypeAndOutput = [];

    // 输出配方
    const recipeType = [];

    if (recipeType) {
        recipeType.forEach((type) => {
            console.log(type);

            event.forEachRecipe({ type: type }, (recipe) => {
                console.log(String(recipe.getId()));
                console.log(recipe.json.toString());
            });
        });
    }

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
