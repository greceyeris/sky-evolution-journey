ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 botania:petals 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [{ item: item }],
                result: [
                    {
                        item: item.replace("_mystical_flower", "_petal"),
                        count: 2,
                    },
                ],
                tool: { tag: "forge:tools/knives" },
            });
        });

    Ingredient.of("#botania:double_mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [{ item: item }],
                result: [
                    {
                        item: item.replace("_double_flower", "_petal"),
                        count: 4,
                    },
                ],
                tool: { tag: "forge:tools/knives" },
            });
        });

    // 添加 botania:livingrock_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:livingrock" }],
        result: [{ item: "botania:livingrock_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:polished_livingrock_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:polished_livingrock" }],
        result: [{ item: "botania:polished_livingrock_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:shimmerrock_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:shimmerrock" }],
        result: [{ item: "botania:shimmerrock_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_forest_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_forest_cobblestone" }],
        result: [{ item: "botania:metamorphic_forest_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_plains_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_plains_cobblestone" }],
        result: [{ item: "botania:metamorphic_plains_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_mountain_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_mountain_cobblestone" }],
        result: [{ item: "botania:metamorphic_mountain_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_fungal_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_fungal_cobblestone" }],
        result: [{ item: "botania:metamorphic_fungal_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_swamp_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_swamp_cobblestone" }],
        result: [{ item: "botania:metamorphic_swamp_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_desert_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_desert_cobblestone" }],
        result: [{ item: "botania:metamorphic_desert_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_taiga_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_taiga_cobblestone" }],
        result: [{ item: "botania:metamorphic_taiga_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_mesa_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_mesa_cobblestone" }],
        result: [{ item: "botania:metamorphic_mesa_cobblestone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:livingwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:livingwood" }],
        result: [{ item: "botania:livingwood_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:stripped_livingwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:stripped_livingwood" }],
        result: [{ item: "botania:stripped_livingwood_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:livingwood_planks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:livingwood_planks" }],
        result: [{ item: "botania:livingwood_planks_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:dreamwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:dreamwood" }],
        result: [{ item: "botania:dreamwood_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:stripped_dreamwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:stripped_dreamwood" }],
        result: [{ item: "botania:stripped_dreamwood_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:dreamwood_planks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:dreamwood_planks" }],
        result: [{ item: "botania:dreamwood_planks_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:shimmerwood_planks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:shimmerwood_planks" }],
        result: [{ item: "botania:shimmerwood_planks_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:livingrock_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:livingrock_bricks" }],
        result: [{ item: "botania:livingrock_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:mossy_livingrock_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:mossy_livingrock_bricks" }],
        result: [{ item: "botania:mossy_livingrock_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:dark_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:dark_quartz" }],
        result: [{ item: "botania:dark_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:mana_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:mana_quartz" }],
        result: [{ item: "botania:mana_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:blaze_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:blaze_quartz" }],
        result: [{ item: "botania:blaze_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:lavender_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:lavender_quartz" }],
        result: [{ item: "botania:lavender_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:red_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:red_quartz" }],
        result: [{ item: "botania:red_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:elf_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:elf_quartz" }],
        result: [{ item: "botania:elf_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:sunny_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:sunny_quartz" }],
        result: [{ item: "botania:sunny_quartz_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:white_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:white_pavement" }],
        result: [{ item: "botania:white_pavement_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:black_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:black_pavement" }],
        result: [{ item: "botania:black_pavement_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:blue_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:blue_pavement" }],
        result: [{ item: "botania:blue_pavement_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:yellow_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:yellow_pavement" }],
        result: [{ item: "botania:yellow_pavement_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:red_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:red_pavement" }],
        result: [{ item: "botania:red_pavement_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:green_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:green_pavement" }],
        result: [{ item: "botania:green_pavement_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_forest_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_forest_stone" }],
        result: [{ item: "botania:metamorphic_forest_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_plains_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_plains_stone" }],
        result: [{ item: "botania:metamorphic_plains_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_mountain_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_mountain_stone" }],
        result: [{ item: "botania:metamorphic_mountain_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_fungal_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_fungal_stone" }],
        result: [{ item: "botania:metamorphic_fungal_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_swamp_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_swamp_stone" }],
        result: [{ item: "botania:metamorphic_swamp_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_desert_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_desert_stone" }],
        result: [{ item: "botania:metamorphic_desert_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_taiga_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_taiga_stone" }],
        result: [{ item: "botania:metamorphic_taiga_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_mesa_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_mesa_stone" }],
        result: [{ item: "botania:metamorphic_mesa_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_forest_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_forest_bricks" }],
        result: [{ item: "botania:metamorphic_forest_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_plains_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_plains_bricks" }],
        result: [{ item: "botania:metamorphic_plains_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_mountain_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_mountain_bricks" }],
        result: [{ item: "botania:metamorphic_mountain_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_fungal_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_fungal_bricks" }],
        result: [{ item: "botania:metamorphic_fungal_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_swamp_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_swamp_bricks" }],
        result: [{ item: "botania:metamorphic_swamp_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_desert_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_desert_bricks" }],
        result: [{ item: "botania:metamorphic_desert_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_taiga_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_taiga_bricks" }],
        result: [{ item: "botania:metamorphic_taiga_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:metamorphic_mesa_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:metamorphic_mesa_bricks" }],
        result: [{ item: "botania:metamorphic_mesa_bricks_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:corporea_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:corporea_block" }],
        result: [{ item: "botania:corporea_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:corporea_brick_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "botania:corporea_brick" }],
        result: [{ item: "botania:corporea_brick_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 botania:vivid_grass 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:dirt" }],
        result: [{ item: "botania:vivid_grass" }],
        tool: { item: "botania:vivid_seeds" },
    });
});
