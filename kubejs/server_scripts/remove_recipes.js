// priority: -999

// 定义 removeRecipesUsedTagAndInputAndOutput 数组
const removeRecipesUsedTagAndInputAndOutput = [
    // c
    "#c:hidden_from_recipe_viewers",
];

// 定义 removeRecipesUsedTagAndInputAndOutputList 数组
let removeRecipesUsedTagAndInputAndOutputList = [];

ServerEvents.tags("fluid", (event) => {
    removeRecipesUsedTagAndInputAndOutput.forEach((tag) => {
        event
            .get(tag.slice(1))
            .getObjectIds()
            .forEach((fluid) => {
                removeRecipesUsedTagAndInputAndOutputList.push(
                    Fluid.of(String(fluid)),
                );
            });
    });
});

ServerEvents.recipes((event) => {
    // 定义 removeRecipesUsedRecipeId 数组
    const removeRecipesUsedRecipeId = [
        // normal
        // ae2cs
        "ae2cs:pulverizer/certus_quartz_crystal",
        "ae2cs:pulverizer/cobblestone",
        "ae2cs:pulverizer/flour",
        "ae2cs:pulverizer/gravel",
        "ae2cs:pulverizer/gunpowder",
        "ae2cs:pulverizer/red_sand",
        "ae2cs:pulverizer/sand",
        "ae2cs:pulverizer/soul_sand",

        // apotheosis
        "apotheosis:torch",
        "apotheosis:cobweb",

        // botania
        "botania:dreamwood_planks",
        "botania:flask",
        "botania:livingwood_planks",
        "botania:mana_infusion/mana_powder_dye",
        "botania:mana_infusion/manasteel",
        "botania:open_bucket",
        "botania:petal_black",
        "botania:petal_black_double",
        "botania:petal_blue",
        "botania:petal_blue_double",
        "botania:petal_brown",
        "botania:petal_brown_double",
        "botania:petal_cyan",
        "botania:petal_cyan_double",
        "botania:petal_gray",
        "botania:petal_gray_double",
        "botania:petal_green",
        "botania:petal_green_double",
        "botania:petal_light_blue",
        "botania:petal_light_blue_double",
        "botania:petal_light_gray",
        "botania:petal_light_gray_double",
        "botania:petal_lime",
        "botania:petal_lime_double",
        "botania:petal_magenta",
        "botania:petal_magenta_double",
        "botania:petal_orange",
        "botania:petal_orange_double",
        "botania:petal_pink",
        "botania:petal_pink_double",
        "botania:petal_purple",
        "botania:petal_purple_double",
        "botania:petal_red",
        "botania:petal_red_double",
        "botania:petal_white",
        "botania:petal_white_double",
        "botania:petal_yellow",
        "botania:petal_yellow_double",
        "botania:runic_altar_alt",
        "botania:vial",

        // botanicalmachinery
        "botanicalmachinery:runic_altar",

        // bucketlib
        "bucketlib:cake",

        // create
        "create:crafting/curiosities/cake",
        "create:crafting/kinetics/basin",
        "create:crafting/kinetics/chute",
        "create:crafting/kinetics/clutch",
        "create:crafting/kinetics/cogwheel",
        "create:crafting/kinetics/depot",
        "create:crafting/kinetics/encased_chain_drive",
        "create:crafting/kinetics/encased_fan",
        "create:crafting/kinetics/fluid_pipe",
        "create:crafting/kinetics/fluid_tank",
        "create:crafting/kinetics/gearbox",
        "create:crafting/kinetics/gearshift",
        "create:crafting/kinetics/large_cogwheel",
        "create:crafting/kinetics/mechanical_mixer",
        "create:crafting/kinetics/mechanical_press",
        "create:crafting/kinetics/mechanical_pump",
        "create:crafting/kinetics/mechanical_saw",
        "create:crafting/kinetics/millstone",
        "create:crafting/kinetics/shaft",
        "create:crafting/kinetics/spout",
        "create:crafting/kinetics/turntable",
        "create:crafting/materials/copper_ingot",
        "create:deploying/cogwheel",
        "create:deploying/large_cogwheel",
        "create:milling/andesite",
        "create:milling/bone",
        "create:milling/cobblestone",
        "create:milling/gravel",
        "create:milling/sugar_cane",
        "create:milling/wheat",
        "create:crushing/wool",
        "create:crushing/leather_horse_armor",
        "create:crushing/obsidian",
        "create:crushing/gravel",
        "create:crushing/diorite_recycling",
        "create:crushing/diorite",
        "create:crushing/diamond_horse_armor",
        "create:crushing/blaze_rod",
        "create:crushing/netherrack",
        "create:milling/sandstone",
        "create:milling/saddle",
        "create:milling/granite",
        "create:milling/terracotta",
        "create:crushing/compat/immersiveengineering/coke_block",

        // createfood
        "createfood:minecraft/crafting/shaped/cake_from_shaped",

        // create_connected
        "create_connected:crafting/palettes/copycat_catwalk",

        // create_netherless
        "create_netherless:coal_rod_recipe",
        "create_netherless:soulsand_by_manual_application",

        // createaddition
        "createaddition:compat/immersiveengineering/item_application/kiln_brick",
        "createaddition:compat/immersiveengineering/crushing/steel_ingot",
        "createaddition:compat/immersiveengineering/crushing/coke_block",
        "createaddition:compat/immersiveengineering/crushing/coal_coke",

        // createmetallurgy
        "createmetallurgy:crafting/content/faucet",
        "createmetallurgy:milling/crushed_raw_gold",
        "createmetallurgy:milling/crushed_raw_zinc",
        "createmetallurgy:milling/crushed_raw_iron",

        // farmersdelight
        "farmersdelight:cake_from_milk_bottle",
        "farmersdelight:paper_from_tree_bark",
        "farmersdelight:wheat_dough_from_water",

        // gtceu
        "gtceu:shaped/bowl",
        "gtceu:shaped/gem_to_dust_charcoal_gem",
        "gtceu:shaped/gem_to_dust_coal_exquisite_gem",
        "gtceu:shaped/gem_to_dust_coal_flawless_gem",
        "gtceu:shaped/gem_to_dust_coal_gem",
        "gtceu:shaped/gem_to_dust_coke_exquisite_gem",
        "gtceu:shaped/gem_to_dust_coke_flawless_gem",
        "gtceu:shaped/gem_to_dust_coke_gem",
        "gtceu:shaped/gem_to_dust_flint_gem",
        "gtceu:shaped/glass_pane",
        "gtceu:shaped/lever",
        "gtceu:shaped/mortar_grind_annealed_copper",
        "gtceu:shaped/mortar_grind_antimony",
        "gtceu:shaped/mortar_grind_brass",
        "gtceu:shaped/mortar_grind_bronze",
        "gtceu:shaped/mortar_grind_copper",
        "gtceu:shaped/mortar_grind_electrum",
        "gtceu:shaped/mortar_grind_gold",
        "gtceu:shaped/mortar_grind_invar",
        "gtceu:shaped/mortar_grind_iron",
        "gtceu:shaped/mortar_grind_lead",
        "gtceu:shaped/mortar_grind_nickel",
        "gtceu:shaped/mortar_grind_silver",
        "gtceu:shaped/mortar_grind_steel",
        "gtceu:shaped/mortar_grind_tin",
        "gtceu:shaped/mortar_grind_wrought_iron",
        "gtceu:shaped/mortar_grind_zinc",
        "gtceu:shaped/paper_dust",
        "gtceu:shaped/quartz_sand",
        "gtceu:shaped/smooth_stone_slab_saw",
        "gtceu:shaped/stick_long_wood",
        "gtceu:shaped/stick_normal",
        "gtceu:shaped/stone_slab_saw",
        "gtceu:shaped/sugar",
        "gtceu:shaped_fluid_container/paper",
        "gtceu:shapeless/blaze_rod_to_powder",
        "gtceu:shapeless/bone_to_bone_meal",
        "gtceu:shapeless/brick_block_to_dust",
        "gtceu:shapeless/brick_to_dust",
        "gtceu:shapeless/clay_ball_to_dust",
        "gtceu:shapeless/clay_block_to_dust",
        "gtceu:shapeless/compressed_clay",
        "gtceu:shapeless/gravel_to_flint",
        "gtceu:shapeless/hay_block_to_hay",
        "gtceu:shapeless/wheat_to_dust",
        "gtceu:shaped/cake",

        // gtmfo
        "gtmfo:shaped/cake_bottom_by_hand",

        // hauntfurnace
        "hauntfurnace:haunting/compat/create/crimson_fungus",

        // immersiveengineering
        "immersiveengineering:crafting/alloybrick",
        "immersiveengineering:crafting/gunpowder_from_dusts",
        "immersiveengineering:crafting/hammercrushing_aluminum",
        "immersiveengineering:crafting/hammercrushing_cobalt",
        "immersiveengineering:crafting/hammercrushing_copper",
        "immersiveengineering:crafting/hammercrushing_gold",
        "immersiveengineering:crafting/hammercrushing_iron",
        "immersiveengineering:crafting/hammercrushing_lead",
        "immersiveengineering:crafting/hammercrushing_nickel",
        "immersiveengineering:crafting/hammercrushing_platinum",
        "immersiveengineering:crafting/hammercrushing_silver",
        "immersiveengineering:crafting/hammercrushing_tin",
        "immersiveengineering:crafting/hammercrushing_tungsten",
        "immersiveengineering:crafting/hammercrushing_uranium",
        "immersiveengineering:crafting/hammercrushing_zinc",
        "immersiveengineering:crafting/lead_white",
        "immersiveengineering:crafting/paper_from_sawdust",
        "immersiveengineering:crafting/plate_aluminum_hammering",
        "immersiveengineering:crafting/plate_constantan_hammering",
        "immersiveengineering:crafting/plate_copper_hammering",
        "immersiveengineering:crafting/plate_electrum_hammering",
        "immersiveengineering:crafting/plate_gold_hammering",
        "immersiveengineering:crafting/plate_iron_hammering",
        "immersiveengineering:crafting/plate_lead_hammering",
        "immersiveengineering:crafting/plate_nickel_hammering",
        "immersiveengineering:crafting/plate_silver_hammering",
        "immersiveengineering:crafting/plate_steel_hammering",
        "immersiveengineering:crafting/plate_uranium_hammering",
        "immersiveengineering:crafting/raw_hammercrushing_aluminum",
        "immersiveengineering:crafting/raw_hammercrushing_cobalt",
        "immersiveengineering:crafting/raw_hammercrushing_copper",
        "immersiveengineering:crafting/raw_hammercrushing_gold",
        "immersiveengineering:crafting/raw_hammercrushing_iron",
        "immersiveengineering:crafting/raw_hammercrushing_lead",
        "immersiveengineering:crafting/raw_hammercrushing_nickel",
        "immersiveengineering:crafting/raw_hammercrushing_platinum",
        "immersiveengineering:crafting/raw_hammercrushing_silver",
        "immersiveengineering:crafting/raw_hammercrushing_tin",
        "immersiveengineering:crafting/raw_hammercrushing_tungsten",
        "immersiveengineering:crafting/raw_hammercrushing_uranium",
        "immersiveengineering:crafting/raw_hammercrushing_zinc",
        "immersiveengineering:crafting/sawdust",
        "immersiveengineering:crafting/torch",
        "immersiveengineering:smelting/lead_red",
        "immersiveengineering:crafting/raw_hammercrushing_osmium",

        // minecraft
        "minecraft:bone_meal",
        "minecraft:diorite",
        "minecraft:torch",
        "minecraft:brick",
        "minecraft:terracotta",
        "minecraft:stone",
        "minecraft:smooth_stone",
        "minecraft:baked_potato",

        // opolisutilities
        "opolisutilities:charcoal",
        "opolisutilities:fishing_rod",
        "opolisutilities:green_wool",
        "opolisutilities:mini_charcoal",
        "opolisutilities:sticks",

        // silentgear
        "silentgear:gear/rough/axe",
        "silentgear:gear/rough/knife",
        "silentgear:gear/rough/pickaxe",
        "silentgear:gear/rough/shovel",
        "silentgear:rough_rod",

        // strainers
        "strainers:dirt",

        // thermal
        "thermal:bottler_molten_iron_bucket",
        "thermal:gunpowder_4",
        "thermal:mycelium_crafting",
        "thermal:smelting/redstone_from_spores_smelting",

        // thermal_extra
        "thermal_extra:sticky_ball_to_paper",

        // log_error
        // farmersrespite
        "farmersrespite:chilidog_alt",

        // gtceu
        "gtceu:shapeless/centrifuged_ore_to_dust_neutronium",

        // immersiveengineering
        "immersiveengineering:sawmill/treated_wood_horizontal_slab",
        "immersiveengineering:sawmill/treated_wood_horizontal_stairs",
        "immersiveengineering:sawmill/treated_wood_packaged_slab",
        "immersiveengineering:sawmill/treated_wood_packaged_stairs",
        "immersiveengineering:sawmill/treated_wood_vertical_slab",
        "immersiveengineering:sawmill/treated_wood_vertical_stairs",
    ];

    // 定义 removeRecipesUsedItemInput 数组
    const removeRecipesUsedItemInput = [];

    // 定义 removeRecipesUsedItemOutput 数组
    const removeRecipesUsedItemOutput = [
        // farmersdelight
        "farmersdelight:cutting_board",

        // gtceu
        "gtceu:empty_wooden_form",
        "gtceu:brick_wooden_form",
        "gtceu:andesite_alloy_ingot",
        "gtceu:empty_mold",
        "gtceu:plate_casting_mold",
        "gtceu:gear_casting_mold",
        "gtceu:bottle_casting_mold",
        "gtceu:ingot_casting_mold",
        "gtceu:ball_casting_mold",
        "gtceu:block_casting_mold",
        "gtceu:nugget_casting_mold",
        "gtceu:cylinder_casting_mold",
        "gtceu:anvil_casting_mold",
        "gtceu:name_casting_mold",
        "gtceu:small_gear_casting_mold",
        "gtceu:rotor_casting_mold",
        "gtceu:pill_casting_mold",
        "gtceu:tiny_pipe_casting_mold",
        "gtceu:small_pipe_casting_mold",
        "gtceu:normal_pipe_casting_mold",
        "gtceu:large_pipe_casting_mold",
        "gtceu:huge_pipe_casting_mold",
        "gtceu:rod_extruder_mold",
        "gtceu:ring_extruder_mold",
        "gtceu:ingot_extruder_mold",
        "gtceu:foil_extruder_mold",
        "gtceu:rotor_extruder_mold",

        // gtmfo
        "gtmfo:cake_bottom_baked",

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
        "minecraft:flint_and_steel",
        "minecraft:blast_furnace",
        "minecraft:flower_pot",

        // strainers
        "strainers:purifying_salt_mulch",
        "strainers:flint_mesh",
        "strainers:copper_mesh",

        // opolisutilities
        "opolisutilities:leafy_string",

        // compactcrafting
        "compactcrafting:base",
        "compactcrafting:projector_dish",

        // flopper
        "flopper:flopper",

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
        "botania:mycelium_seeds",

        // create
        "create:copper_casing",
        "create:andesite_casing",
        "create:copper_valve_handle",
        "create:empty_blaze_burner",
        "create:whisk",
        "create:propeller",
        "create:brass_casing",

        // ae2
        "ae2:crank",

        // ae2cs
        "ae2cs:quartz_grindstone",

        // melter
        "melter:melter",

        // immersiveengineering
        "immersiveengineering:hammer",

        // createmetallurgy
        "createmetallurgy:casting_basin",
        "createmetallurgy:casting_table",
        "createmetallurgy:graphite",
        "createmetallurgy:foundry_basin",

        // hauntfurnace
        "hauntfurnace:haunt_furnace",

        // ceramicbucket
        "ceramicbucket:ceramic_bucket",

        // vintage
        "vintage:spring_coiling_machine_wheel",
        "vintage:spring_coiling_machine",
        "vintage:centrifuge",
        "vintage:vacuum_chamber",
        "vintage:curving_press",

        // createaddition
        "createaddition:rolling_mill",

        // create_hc
        "create_hc:shaft",
        "create_hc:gear_small",
        "create_hc:gear_large",
        "create_hc:press_head",

        // rainbowcompound
        "rainbowcompound:strange_colored_ingot",

        // pipez
        "pipez:wrench",

        // manaliquidizer
        "manaliquidizer:mana_liquidizer",

        // industrialforegoing
        "industrialforegoing:pitiful_generator",

        // botanypots
        "botanypots:terracotta_hopper_botany_pot",

        // rechiseled
        "rechiseled:chisel",
    ];

    // 定义 removeRecipesUsedItemInputAndOutput 数组
    const removeRecipesUsedItemInputAndOutput = [
        // gtceu
        "gtceu:rose_gold_knife",
        "gtceu:naquadah_alloy_knife",
        "gtceu:netherite_knife",
        "gtceu:diamond_knife",
        "gtceu:flint_knife",
        "gtceu:neutronium_knife",
        "gtceu:duranium_knife",
        "gtceu:blue_steel_knife",
        "gtceu:damascus_steel_knife",
        "gtceu:wrought_iron_knife",
        "gtceu:cobalt_brass_knife",
        "gtceu:tungsten_carbide_knife",
        "gtceu:ultimet_knife",
        "gtceu:titanium_knife",
        "gtceu:aluminium_knife",
        "gtceu:hsse_knife",
        "gtceu:stainless_steel_knife",
        "gtceu:iron_knife",
        "gtceu:red_steel_knife",
        "gtceu:vanadium_steel_knife",
        "gtceu:tungsten_steel_knife",
        "gtceu:steel_knife",
        "gtceu:sterling_silver_knife",
        "gtceu:invar_knife",
        "gtceu:bronze_knife",
        "gtceu:rose_gold_axe",
        "gtceu:naquadah_alloy_axe",
        "gtceu:netherite_axe",
        "gtceu:diamond_axe",
        "gtceu:flint_axe",
        "gtceu:neutronium_axe",
        "gtceu:duranium_axe",
        "gtceu:blue_steel_axe",
        "gtceu:damascus_steel_axe",
        "gtceu:wrought_iron_axe",
        "gtceu:cobalt_brass_axe",
        "gtceu:tungsten_carbide_axe",
        "gtceu:ultimet_axe",
        "gtceu:titanium_axe",
        "gtceu:aluminium_axe",
        "gtceu:hsse_axe",
        "gtceu:stainless_steel_axe",
        "gtceu:iron_axe",
        "gtceu:red_steel_axe",
        "gtceu:vanadium_steel_axe",
        "gtceu:tungsten_steel_axe",
        "gtceu:steel_axe",
        "gtceu:sterling_silver_axe",
        "gtceu:invar_axe",
        "gtceu:bronze_axe",
        "gtceu:rose_gold_saw",
        "gtceu:naquadah_alloy_saw",
        "gtceu:netherite_saw",
        "gtceu:diamond_saw",
        "gtceu:neutronium_saw",
        "gtceu:duranium_saw",
        "gtceu:blue_steel_saw",
        "gtceu:damascus_steel_saw",
        "gtceu:wrought_iron_saw",
        "gtceu:cobalt_brass_saw",
        "gtceu:tungsten_carbide_saw",
        "gtceu:ultimet_saw",
        "gtceu:titanium_saw",
        "gtceu:aluminium_saw",
        "gtceu:hsse_saw",
        "gtceu:stainless_steel_saw",
        "gtceu:iron_saw",
        "gtceu:red_steel_saw",
        "gtceu:vanadium_steel_saw",
        "gtceu:tungsten_steel_saw",
        "gtceu:steel_saw",
        "gtceu:sterling_silver_saw",
        "gtceu:invar_saw",
        "gtceu:bronze_saw",
        "gtceu:red_steel_buzzsaw",
        "gtceu:bronze_buzzsaw",
        "gtceu:titanium_buzzsaw",
        "gtceu:cobalt_brass_buzzsaw",
        "gtceu:rose_gold_buzzsaw",
        "gtceu:damascus_steel_buzzsaw",
        "gtceu:diamond_buzzsaw",
        "gtceu:iron_buzzsaw",
        "gtceu:tungsten_carbide_buzzsaw",
        "gtceu:sterling_silver_buzzsaw",
        "gtceu:vanadium_steel_buzzsaw",
        "gtceu:ultimet_buzzsaw",
        "gtceu:aluminium_buzzsaw",
        "gtceu:stainless_steel_buzzsaw",
        "gtceu:naquadah_alloy_buzzsaw",
        "gtceu:hsse_buzzsaw",
        "gtceu:duranium_buzzsaw",
        "gtceu:blue_steel_buzzsaw",
        "gtceu:tungsten_steel_buzzsaw",
        "gtceu:invar_buzzsaw",
        "gtceu:neutronium_buzzsaw",
        "gtceu:wrought_iron_buzzsaw",
        "gtceu:steel_buzzsaw",
        "gtceu:netherite_buzzsaw",
        "gtceu:rose_gold_shovel",
        "gtceu:naquadah_alloy_shovel",
        "gtceu:netherite_shovel",
        "gtceu:diamond_shovel",
        "gtceu:flint_shovel",
        "gtceu:neutronium_shovel",
        "gtceu:duranium_shovel",
        "gtceu:blue_steel_shovel",
        "gtceu:damascus_steel_shovel",
        "gtceu:wrought_iron_shovel",
        "gtceu:cobalt_brass_shovel",
        "gtceu:tungsten_carbide_shovel",
        "gtceu:ultimet_shovel",
        "gtceu:titanium_shovel",
        "gtceu:aluminium_shovel",
        "gtceu:hsse_shovel",
        "gtceu:stainless_steel_shovel",
        "gtceu:iron_shovel",
        "gtceu:red_steel_shovel",
        "gtceu:vanadium_steel_shovel",
        "gtceu:tungsten_steel_shovel",
        "gtceu:steel_shovel",
        "gtceu:sterling_silver_shovel",
        "gtceu:invar_shovel",
        "gtceu:bronze_shovel",
        "gtceu:aluminium_hoe",
        "gtceu:bronze_hoe",
        "gtceu:wrought_iron_hoe",
        "gtceu:hsse_hoe",
        "gtceu:cobalt_brass_hoe",
        "gtceu:ultimet_hoe",
        "gtceu:rose_gold_hoe",
        "gtceu:red_steel_hoe",
        "gtceu:sterling_silver_hoe",
        "gtceu:vanadium_steel_hoe",
        "gtceu:diamond_hoe",
        "gtceu:neutronium_hoe",
        "gtceu:steel_hoe",
        "gtceu:tungsten_carbide_hoe",
        "gtceu:titanium_hoe",
        "gtceu:duranium_hoe",
        "gtceu:flint_hoe",
        "gtceu:naquadah_alloy_hoe",
        "gtceu:stainless_steel_hoe",
        "gtceu:iron_hoe",
        "gtceu:damascus_steel_hoe",
        "gtceu:tungsten_steel_hoe",
        "gtceu:netherite_hoe",
        "gtceu:blue_steel_hoe",
        "gtceu:invar_hoe",
        "gtceu:neutronium_pickaxe",
        "gtceu:naquadah_alloy_pickaxe",
        "gtceu:hsse_pickaxe",
        "gtceu:sterling_silver_pickaxe",
        "gtceu:cobalt_brass_pickaxe",
        "gtceu:red_steel_pickaxe",
        "gtceu:tungsten_carbide_pickaxe",
        "gtceu:invar_pickaxe",
        "gtceu:damascus_steel_pickaxe",
        "gtceu:bronze_pickaxe",
        "gtceu:iron_pickaxe",
        "gtceu:netherite_pickaxe",
        "gtceu:tungsten_steel_pickaxe",
        "gtceu:diamond_pickaxe",
        "gtceu:rose_gold_pickaxe",
        "gtceu:aluminium_pickaxe",
        "gtceu:flint_pickaxe",
        "gtceu:ultimet_pickaxe",
        "gtceu:duranium_pickaxe",
        "gtceu:stainless_steel_pickaxe",
        "gtceu:titanium_pickaxe",
        "gtceu:wrought_iron_pickaxe",
        "gtceu:vanadium_steel_pickaxe",
        "gtceu:steel_pickaxe",
        "gtceu:blue_steel_pickaxe",

        // mysticalagriculture
        "#mysticalagriculture:essences",

        // c
        "#c:hidden_from_recipe_viewers",
    ];

    // 定义 removeRecipesUsedType 数组
    const removeRecipesUsedType = [
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

        // melter
        "melter:melting",

        // createmetallurgy
        "createmetallurgy:melting",
        "createmetallurgy:casting_in_basin",
        "createmetallurgy:grinding",
        "createmetallurgy:casting_in_table",
        "createmetallurgy:alloying",
        "createmetallurgy:entity_melting",
        "createmetallurgy:bulk_melting",

        // hauntfurnace
        "hauntfurnace:haunting",

        // pneumaticcraft
        "pneumaticcraft:gun_ammo_potion_crafting",

        // modularrouters
        "modularrouters:breaker_module",

        // create
        "create:pressing",

        // vintage
        "vintage:centrifugation",
        "vintage:curving",
        "vintage:polishing",

        // botanypots
        "botanypots:crop",
        "botanypots:soil",

        // cagedmobs
        "cagedmobs:entity_data",
        "cagedmobs:environment_data",

        // productivebees
        "productivebees:bee_spawning",
        "productivebees:bee_conversion",
        "productivebees:bee_breeding",
        "productivebees:bee_fishing",
        "productivebees:centrifuge",

        // create_mechanical_extruder
        "create_mechanical_extruder:extruding",

        // immersiveengineering
        "immersiveengineering:alloy",
    ];

    // 定义 removeRecipesUsedTypeAndInput 数组
    const removeRecipesUsedTypeAndInput = [
        { type: "minecraft:smelting", input: "#forge:ores" },
        { type: "minecraft:blasting", input: "#forge:ores" },
        { type: "minecraft:smelting", input: "#forge:raw_materials" },
        { type: "minecraft:blasting", input: "#forge:raw_materials" },
        { type: "minecraft:smelting", input: "#forge:crushed_ores" },
        { type: "minecraft:blasting", input: "#forge:crushed_ores" },
        { type: "minecraft:smelting", input: "#forge:purified_ores" },
        { type: "minecraft:blasting", input: "#forge:purified_ores" },
        { type: "minecraft:smelting", input: "#forge:pure_dusts" },
        { type: "minecraft:blasting", input: "#forge:pure_dusts" },
        { type: "minecraft:smelting", input: "#forge:refined_ores" },
        { type: "minecraft:blasting", input: "#forge:refined_ores" },
        { type: "minecraft:smelting", input: "#forge:impure_dusts" },
        { type: "minecraft:blasting", input: "#forge:impure_dusts" },
        { type: "minecraft:smelting", input: "#forge:dusts" },
        { type: "minecraft:blasting", input: "#forge:dusts" },
        {
            type: "minecraft:stonecutting",
            input: "createmetallurgy:graphite_blank_mold",
        },
        { type: "minecraft:crafting_shapeless", input: "#forge:refined_ores" },
        {
            type: "minecraft:crafting_shapeless",
            input: "hostilenetworks:overworld_prediction",
        },
        {
            type: "minecraft:crafting_shapeless",
            input: "hostilenetworks:nether_prediction",
        },
        {
            type: "minecraft:crafting_shapeless",
            input: "hostilenetworks:end_prediction",
        },
        {
            type: "create:splashing",
            input: "#forge:crushed_ores",
        },
        {
            type: "create:splashing",
            input: "#minecraft:all_small_flowers",
        },
        { type: "create:crushing", input: "#forge:ores" },
    ];

    // 定义 removeRecipesUsedTypeAndOutput 数组
    const removeRecipesUsedTypeAndOutput = [
        { type: "minecraft:crafting_shaped", output: "#forge:plates" },
        { type: "minecraft:crafting_shapeless", output: "#forge:impure_dusts" },
        { type: "minecraft:crafting_shapeless", output: "#forge:pure_dusts" },
        {
            type: "minecraft:crafting_shapeless",
            output: "#forge:flawless_gems",
        },
        {
            type: "minecraft:crafting_shapeless",
            output: "#forge:gems",
        },
        {
            type: "minecraft:crafting_shaped",
            output: "#forge:plates",
        },
        {
            type: "mysticalagriculture:infusion",
            output: "#mysticalagriculture:seeds",
        },
        {
            type: "minecraft:crafting_shaped",
            output: "#forge:bolts",
        },
        {
            type: "minecraft:crafting_shaped",
            output: "#minecraft:dyes",
        },
        {
            type: "minecraft:crafting_shapeless",
            output: "#minecraft:dyes",
        },
        {
            type: "minecraft:crafting_shaped",
            output: "#forge:double_plates",
        },
        {
            type: "minecraft:crafting_shaped",
            output: "gtceu:iron_rod",
        },
        { type: "create:milling", output: "#minecraft:dyes" },
        { type: "create:crushing", output: "apotheosis:gem_dust" },
        { type: "create:crushing", output: "#forge:crushed_ores" },
        { type: "create:crushing", output: "#forge:nuggets" },
    ];

    // 输出配方类型
    const recipeTypes = new Set();

    event.forEachRecipe({}, (recipe) => {
        const type = recipe.json.get("type");
        if (type != null) {
            recipeTypes.add(String(type));
        }
    });

    console.log("=== Recipe Types ===");
    for (const type of recipeTypes) {
        console.info(type);
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
        if (obj.input.startsWith("#")) {
            // remove type and input
            event.remove({ type: obj.type, input: Ingredient.of(obj.input) });
        } else {
            // remove type and input
            event.remove({ type: obj.type, input: obj.input });
        }
    });

    // removeRecipesUsedTypeAndOutput
    removeRecipesUsedTypeAndOutput.forEach((obj) => {
        if (obj.output.startsWith("#")) {
            // remove type and output
            event.remove({ type: obj.type, output: Ingredient.of(obj.output) });
        } else {
            // remove type and output
            event.remove({ type: obj.type, output: obj.output });
        }
    });

    // removeRecipesUsedTagAndInputAndOutputList
    removeRecipesUsedTagAndInputAndOutputList.forEach((obj) => {
        // remove input
        event.remove({ input: obj });

        // remove output
        event.remove({ output: obj });
    });
});
