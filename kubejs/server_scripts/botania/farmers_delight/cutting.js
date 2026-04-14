ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 botania:petals 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: item,
                    },
                ],
                tool: {
                    tag: "forge:tools/knives",
                },
                result: [
                    {
                        item: item.replace("_mystical_flower", "_petal"),
                        count: 2,
                    },
                ],
            });
        });

    Ingredient.of("#botania:double_mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: item,
                    },
                ],
                tool: {
                    tag: "forge:tools/knives",
                },
                result: [
                    {
                        item: item.replace("_double_flower", "_petal"),
                        count: 4,
                    },
                ],
            });
        });

    // 添加 botania:livingrock_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:livingrock",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:livingrock_slab",
            },
        ],
    });

    // 添加 botania:polished_livingrock_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:polished_livingrock",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:polished_livingrock_slab",
            },
        ],
    });

    // 添加 botania:shimmerrock_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:shimmerrock",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:shimmerrock_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_forest_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_forest_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_forest_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_plains_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_plains_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_plains_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_mountain_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_mountain_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_mountain_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_fungal_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_fungal_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_fungal_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_swamp_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_swamp_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_swamp_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_desert_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_desert_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_desert_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_taiga_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_taiga_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_taiga_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_mesa_cobblestone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_mesa_cobblestone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_mesa_cobblestone_slab",
            },
        ],
    });

    // 添加 botania:livingwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:livingwood",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:livingwood_slab",
            },
        ],
    });

    // 添加 botania:stripped_livingwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:stripped_livingwood",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:stripped_livingwood_slab",
            },
        ],
    });

    // 添加 botania:livingwood_planks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:livingwood_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:livingwood_planks_slab",
            },
        ],
    });

    // 添加 botania:dreamwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:dreamwood",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:dreamwood_slab",
            },
        ],
    });

    // 添加 botania:stripped_dreamwood_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:stripped_dreamwood",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:stripped_dreamwood_slab",
            },
        ],
    });

    // 添加 botania:dreamwood_planks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:dreamwood_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:dreamwood_planks_slab",
            },
        ],
    });

    // 添加 botania:shimmerwood_planks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:shimmerwood_planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:shimmerwood_planks_slab",
            },
        ],
    });

    // 添加 botania:livingrock_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:livingrock_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:livingrock_bricks_slab",
            },
        ],
    });

    // 添加 botania:mossy_livingrock_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:mossy_livingrock_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:mossy_livingrock_bricks_slab",
            },
        ],
    });

    // 添加 botania:dark_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:dark_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:dark_quartz_slab",
            },
        ],
    });

    // 添加 botania:mana_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:mana_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:mana_quartz_slab",
            },
        ],
    });

    // 添加 botania:blaze_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:blaze_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:blaze_quartz_slab",
            },
        ],
    });

    // 添加 botania:lavender_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:lavender_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:lavender_quartz_slab",
            },
        ],
    });

    // 添加 botania:red_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:red_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:red_quartz_slab",
            },
        ],
    });

    // 添加 botania:elf_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:elf_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:elf_quartz_slab",
            },
        ],
    });

    // 添加 botania:sunny_quartz_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:sunny_quartz",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:sunny_quartz_slab",
            },
        ],
    });

    // 添加 botania:white_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:white_pavement",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:white_pavement_slab",
            },
        ],
    });

    // 添加 botania:black_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:black_pavement",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:black_pavement_slab",
            },
        ],
    });

    // 添加 botania:blue_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:blue_pavement",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:blue_pavement_slab",
            },
        ],
    });

    // 添加 botania:yellow_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:yellow_pavement",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:yellow_pavement_slab",
            },
        ],
    });

    // 添加 botania:red_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:red_pavement",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:red_pavement_slab",
            },
        ],
    });

    // 添加 botania:green_pavement_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:green_pavement",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:green_pavement_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_forest_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_forest_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_forest_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_plains_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_plains_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_plains_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_mountain_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_mountain_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_mountain_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_fungal_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_fungal_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_fungal_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_swamp_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_swamp_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_swamp_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_desert_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_desert_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_desert_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_taiga_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_taiga_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_taiga_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_mesa_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_mesa_stone",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_mesa_stone_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_forest_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_forest_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_forest_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_plains_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_plains_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_plains_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_mountain_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_mountain_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_mountain_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_fungal_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_fungal_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_fungal_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_swamp_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_swamp_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_swamp_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_desert_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_desert_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_desert_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_taiga_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_taiga_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_taiga_bricks_slab",
            },
        ],
    });

    // 添加 botania:metamorphic_mesa_bricks_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:metamorphic_mesa_bricks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:metamorphic_mesa_bricks_slab",
            },
        ],
    });

    // 添加 botania:corporea_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:corporea_block",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:corporea_slab",
            },
        ],
    });

    // 添加 botania:corporea_brick_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "botania:corporea_brick",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "botania:corporea_brick_slab",
            },
        ],
    });
});
