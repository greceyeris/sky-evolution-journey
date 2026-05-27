ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 minecraft:stick 的配方
    event.shaped("minecraft:stick", [" A", "A "], {
        A: "kubejs:mossy_twig",
    });

    // 添加 minecraft:campfire 的配方
    event.shaped("minecraft:campfire", [" A ", "ABA", "CCC"], {
        A: "#forge:rods/wooden",
        B: "minecraft:flint",
        C: "#minecraft:logs",
    });

    // 添加 minecraft:beehive 的配方
    event.shaped("minecraft:beehive", ["AAA", "BBB", "AAA"], {
        A: "#minecraft:planks",
        B: "minecraft:honeycomb",
    });

    // 添加 minecraft:oak_sapling 的配方
    event.shaped("minecraft:oak_sapling", ["AA", "AA"], {
        A: "botania:living_root",
    });

    // 添加 minecraft:chest 的配方
    event.shaped("minecraft:chest", ["ABA", "BCB", "ABA"], {
        A: "#minecraft:logs",
        B: "#minecraft:planks",
        C: "minecraft:flint",
    });

    // 添加 minecraft:redstone_block 的配方
    event.shaped("minecraft:redstone_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:redstone",
    });

    // 添加 minecraft:bricks 的配方
    event.shaped("2x minecraft:bricks", ["AAA", "ABA", "AAA"], {
        A: "minecraft:brick",
        B: Item.of(
            "ceramicbucket:ceramic_bucket",
            '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}',
        ).strongNBT(),
    });

    // 添加 minecraft:spruce_planks 的配方
    event.shaped("minecraft:spruce_planks", ["AA"], {
        A: "minecraft:spruce_slab",
    });

    // 添加 minecraft:birch_planks 的配方
    event.shaped("minecraft:birch_planks", ["AA"], {
        A: "minecraft:birch_slab",
    });

    // 添加 minecraft:jungle_planks 的配方
    event.shaped("minecraft:jungle_planks", ["AA"], {
        A: "minecraft:jungle_slab",
    });

    // 添加 minecraft:acacia_planks 的配方
    event.shaped("minecraft:acacia_planks", ["AA"], {
        A: "minecraft:acacia_slab",
    });

    // 添加 minecraft:dark_oak_planks 的配方
    event.shaped("minecraft:dark_oak_planks", ["AA"], {
        A: "minecraft:dark_oak_slab",
    });

    // 添加 minecraft:mangrove_planks 的配方
    event.shaped("minecraft:mangrove_planks", ["AA"], {
        A: "minecraft:mangrove_slab",
    });

    // 添加 minecraft:cherry_planks 的配方
    event.shaped("minecraft:cherry_planks", ["AA"], {
        A: "minecraft:cherry_slab",
    });

    // 添加 minecraft:bamboo_planks 的配方
    event.shaped("minecraft:bamboo_planks", ["AA"], {
        A: "minecraft:bamboo_slab",
    });

    // 添加 minecraft:crimson_planks 的配方
    event.shaped("minecraft:crimson_planks", ["AA"], {
        A: "minecraft:crimson_slab",
    });

    // 添加 minecraft:warped_planks 的配方
    event.shaped("minecraft:warped_planks", ["AA"], {
        A: "minecraft:warped_slab",
    });

    // 添加 minecraft:cobblestone 的配方
    event.shaped("minecraft:cobblestone", ["AA"], {
        A: "minecraft:cobblestone_slab",
    });

    // 添加 minecraft:stone 的配方
    event.shaped("minecraft:stone", ["AA"], {
        A: "minecraft:stone_slab",
    });

    // 添加 minecraft:smooth_stone 的配方
    event.shaped("minecraft:smooth_stone", ["AA"], {
        A: "minecraft:smooth_stone_slab",
    });

    // 添加 minecraft:bone_block 的配方
    event.shaped("minecraft:bone_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:bone_meal",
    });

    // 添加 minecraft:white_wool 的配方
    event.shaped("minecraft:white_wool", ["AA", "AA"], {
        A: "minecraft:string",
    });

    // 添加 minecraft:coal_block 的配方
    event.shaped("minecraft:coal_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:coal",
    });

    // 添加 minecraft:lever 的配方
    event.shaped("minecraft:lever", ["A", "B"], {
        A: "minecraft:stick",
        B: "minecraft:cobblestone",
    });

    // 添加 minecraft:sandstone 的配方
    event.shaped("minecraft:sandstone", ["AA", "AA"], {
        A: "minecraft:sand",
    });

    // 添加 minecraft:copper_ingot 的配方
    event.shaped("minecraft:copper_ingot", ["AAA", "AAA", "AAA"], {
        A: "gtceu:copper_nugget",
    });

    // 添加 minecraft:clay 的配方
    event.shaped("minecraft:clay", ["AA", "AA"], {
        A: "minecraft:clay_ball",
    });

    // 添加 minecraft:hay_block 的配方
    event.shaped("minecraft:hay_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:wheat",
    });

    // 添加 minecraft:flint_and_steel 的配方
    event.shaped("minecraft:flint_and_steel", ["A", "B", "C"], {
        A: "gtceu:small_iron_gear",
        B: "minecraft:flint",
        C: "gtceu:small_iron_spring",
    });

    // 添加 minecraft:lapis_block 的配方
    event.shaped("minecraft:lapis_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:lapis_lazuli",
    });
});
