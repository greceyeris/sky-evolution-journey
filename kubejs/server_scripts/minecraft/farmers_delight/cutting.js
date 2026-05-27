ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 minecraft:bowl 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:planks" }],
        result: [{ item: "minecraft:bowl" }],
        tool: { tag: "forge:tools/knives" },
    });

    // 添加 minecraft:dirt 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "kubejs:organic_matter_clump" }],
        result: [{ item: "minecraft:dirt" }],
        tool: { tag: "forge:tools/hoes" },
    });

    // 添加 minecraft:dirt 和 minecraft:clay_ball 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:dirt" }],
        result: [
            {
                item: "minecraft:dirt",
                chance: 0.85,
            },
            {
                item: "minecraft:clay_ball",
                chance: 0.15,
            },
        ],
        tool: { tag: "forge:tools/hoes" },
    });

    // 添加 minecraft:stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:stone" }],
        result: [{ item: "minecraft:stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:smooth_stone_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:smooth_stone" }],
        result: [{ item: "minecraft:smooth_stone_slab" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:glass_pane 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:glass" }],
        result: [{ item: "minecraft:glass_pane", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:stripped_bamboo_block, farmersdelight:straw 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:bamboo_block" }],
        result: [
            { item: "minecraft:stripped_bamboo_block" },
            { item: "farmersdelight:straw" },
        ],
        tool: { tag: "forge:tools/axes" },
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:bamboo_block" }],
        result: [
            { item: "minecraft:stripped_bamboo_block" },
            { item: "farmersdelight:straw" },
        ],
        tool: { tag: "forge:tools/paxels" },
    });

    // 添加 minecraft:oak_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_oaks" }],
        result: [{ item: "minecraft:oak_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:spruce_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_spruces" }],
        result: [{ item: "minecraft:spruce_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:birch_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_birchs" }],
        result: [{ item: "minecraft:birch_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:jungle_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_jungles" }],
        result: [{ item: "minecraft:jungle_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:acacia_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_acacias" }],
        result: [{ item: "minecraft:acacia_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:dark_oak_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_dark_oaks" }],
        result: [{ item: "minecraft:dark_oak_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:mangrove_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_mangroves" }],
        result: [{ item: "minecraft:mangrove_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:cherry_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_cherrys" }],
        result: [{ item: "minecraft:cherry_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:crimson_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_crimsons" }],
        result: [{ item: "minecraft:crimson_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:warped_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:stripped_warpeds" }],
        result: [{ item: "minecraft:warped_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:bamboo_planks 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:stripped_bamboo_block" }],
        result: [{ item: "minecraft:bamboo_planks", count: 4 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:oak_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:oak_planks" }],
        result: [{ item: "minecraft:oak_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:spruce_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:spruce_planks" }],
        result: [{ item: "minecraft:spruce_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:birch_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:birch_planks" }],
        result: [{ item: "minecraft:birch_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:jungle_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:jungle_planks" }],
        result: [{ item: "minecraft:jungle_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:acacia_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:acacia_planks" }],
        result: [{ item: "minecraft:acacia_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:dark_oak_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:dark_oak_planks" }],
        result: [{ item: "minecraft:dark_oak_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:mangrove_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:mangrove_planks" }],
        result: [{ item: "minecraft:mangrove_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:cherry_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:cherry_planks" }],
        result: [{ item: "minecraft:cherry_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:crimson_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:crimson_planks" }],
        result: [{ item: "minecraft:crimson_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:warped_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:warped_planks" }],
        result: [{ item: "minecraft:warped_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:bamboo_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:bamboo_planks" }],
        result: [{ item: "minecraft:bamboo_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:bamboo_mosaic_slab 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:bamboo_mosaic" }],
        result: [{ item: "minecraft:bamboo_mosaic_slab", count: 2 }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 minecraft:clay_ball 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:clay" }],
        result: [{ item: "minecraft:clay_ball", count: 4 }],
        tool: { tag: "forge:tools/shovels" },
    });

    // 添加 minecraft:sugar 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:sugar_cane" }],
        result: [{ item: "minecraft:sugar" }],
        tool: { tag: "forge:tools/hammers" },
    });

    // 添加 minecraft:wheat 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "minecraft:hay_block" }],
        result: [{ item: "minecraft:wheat", count: 9 }],
        tool: { tag: "forge:tools/knives" },
    });
});
