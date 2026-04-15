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
        "gtceu:shaped/gem_to_dust_flint_gem",
        "gtceu:shapeless/wheat_to_dust",
        "gtceu:shapeless/blaze_rod_to_powder",
        "gtceu:shaped/gem_to_dust_coal_gem",
        "gtceu:shaped/mortar_grind_electrum",
        "gtceu:shaped/mortar_grind_zinc",

        // opolisutilities
        "opolisutilities:sticks",
        "opolisutilities:charcoal",
        "opolisutilities:mini_charcoal",

        // strainers
        "strainers:dirt",

        // farmersdelight
        "farmersdelight:flint_knife",
        "farmersdelight:iron_knife",
        "farmersdelight:wheat_dough_from_water",

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
        "botania:runic_altar_alt",

        // create
        "create:crafting/materials/copper_ingot",

        // crossroads
        "crossroads:smelting/dust_copper",

        // botanicalmachinery
        "botanicalmachinery:runic_altar",
    ];

    // 定义 removeRecipesUsedItemInput 数组
    const removeRecipesUsedItemInput = [
        // forge
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
        "integrateddynamics:menril_planks",
        "integrateddynamics:menril_slab",
        "integrateddynamics:crystalized_menril_block_slab",
        "integrateddynamics:crystalized_menril_brick_slab",
        "integrateddynamics:crystalized_chorus_block_slab",
        "integrateddynamics:crystalized_chorus_brick_slab",

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
        "minecraft:bamboo_mosaic_slab",
        "minecraft:beehive",
        "minecraft:chest",
        "minecraft:bowl",

        // strainers
        "strainers:purifying_salt_mulch",
        "strainers:flint_mesh",

        // opolisutilities
        "opolisutilities:leafy_string",

        // compactcrafting
        "compactcrafting:base",
        "compactcrafting:projector_dish",

        // woodenshears
        "woodenshears:wooden_shears",

        // brickfurnace
        "brickfurnace:brick_furnace",
        "brickfurnace:brick_blast_furnace",
        "brickfurnace:brick_smoker",

        // flopper
        "flopper:flopper",

        // simpleprocessingmachines
        "simpleprocessingmachines:centrifugal_separator",
        "simpleprocessingmachines:auto_crafting_station",
        "simpleprocessingmachines:organic_composter",
        "simpleprocessingmachines:crystallizing_station",
        "simpleprocessingmachines:atmospheric_condenser",
        "simpleprocessingmachines:crushing_station",
        "simpleprocessingmachines:mineral_processing_station",
        "simpleprocessingmachines:sawmilling_station",

        // integrateddynamics
        "integrateddynamics:coal_generator",
        "integrateddynamics:mechanical_squeezer",
        "integrateddynamics:mechanical_drying_basin",

        // botania
        "botania:fertilizer",
        "botania:mana_spreader",
        "botania:livingrock_slab",
        "botania:polished_livingrock_slab",
        "botania:shimmerrock_slab",
        "botania:metamorphic_forest_cobblestone_slab",
        "botania:metamorphic_plains_cobblestone_slab",
        "botania:metamorphic_mountain_cobblestone_slab",
        "botania:metamorphic_fungal_cobblestone_slab",
        "botania:metamorphic_swamp_cobblestone_slab",
        "botania:metamorphic_desert_cobblestone_slab",
        "botania:metamorphic_taiga_cobblestone_slab",
        "botania:metamorphic_mesa_cobblestone_slab",
        "botania:mana_pool",
        "botania:livingwood_slab",
        "botania:stripped_livingwood_slab",
        "botania:livingwood_planks_slab",
        "botania:dreamwood_slab",
        "botania:stripped_dreamwood_slab",
        "botania:dreamwood_planks_slab",
        "botania:shimmerwood_planks_slab",
        "botania:livingrock_slab",
        "botania:polished_livingrock_slab",
        "botania:livingrock_bricks_slab",
        "botania:mossy_livingrock_bricks_slab",
        "botania:dark_quartz_slab",
        "botania:mana_quartz_slab",
        "botania:blaze_quartz_slab",
        "botania:lavender_quartz_slab",
        "botania:red_quartz_slab",
        "botania:elf_quartz_slab",
        "botania:sunny_quartz_slab",
        "botania:white_pavement_slab",
        "botania:black_pavement_slab",
        "botania:blue_pavement_slab",
        "botania:yellow_pavement_slab",
        "botania:red_pavement_slab",
        "botania:green_pavement_slab",
        "botania:metamorphic_forest_stone_slab",
        "botania:metamorphic_plains_stone_slab",
        "botania:metamorphic_mountain_stone_slab",
        "botania:metamorphic_fungal_stone_slab",
        "botania:metamorphic_swamp_stone_slab",
        "botania:metamorphic_desert_stone_slab",
        "botania:metamorphic_taiga_stone_slab",
        "botania:metamorphic_mesa_stone_slab",
        "botania:metamorphic_forest_bricks_slab",
        "botania:metamorphic_plains_bricks_slab",
        "botania:metamorphic_mountain_bricks_slab",
        "botania:metamorphic_fungal_bricks_slab",
        "botania:metamorphic_swamp_bricks_slab",
        "botania:metamorphic_desert_bricks_slab",
        "botania:metamorphic_taiga_bricks_slab",
        "botania:metamorphic_mesa_bricks_slab",
        "botania:corporea_slab",
        "botania:corporea_brick_slab",

        // create
        "create:copper_casing",
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
        "opolisutilities:fluid_generator",
        "opolisutilities:resource_generator",
        "opolisutilities:rg2_blocks",
        "opolisutilities:rg2_speed_blocks",
        "opolisutilities:soaking_table",
        "opolisutilities:drying_table",

        // strainers
        "strainers:strainer",

        // farmersdelight
        "farmersdelight:cutting",

        // compactcrafting
        "compactcrafting:miniaturization",

        // bonsaitrees3
        "bonsaitrees3:soil",
        "bonsaitrees3:sapling",

        // brickfurnace
        "brickfurnace:smelting",
        "brickfurnace:blasting",
        "brickfurnace:smoking",

        // simpleprocessingmachines
        "simpleprocessingmachines:organic_composting",
        "simpleprocessingmachines:crystallizing",
        "simpleprocessingmachines:atmospheric_condensing",
        "simpleprocessingmachines:crushing",
        "simpleprocessingmachines:mineral_processing",
        "simpleprocessingmachines:sawmilling",
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
