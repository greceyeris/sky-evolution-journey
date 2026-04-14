ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 minecraft:stick 的配方
    event.shaped("minecraft:stick", [" A", "A "], {
        A: "kubejs:twig",
    });

    // 添加 minecraft:flint 的配方
    event.shaped("minecraft:flint", ["AA", "AA"], {
        A: "kubejs:flint_shard",
    });

    // 添加 minecraft:dirt 的配方
    event.shaped("minecraft:dirt", ["AA", "AA"], {
        A: "kubejs:dirt_pile",
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

    // 添加 minecraft:stick 的配方
    event
        .shaped("4x minecraft:stick", ["A", "B", "B"], {
            A: "kubejs:flint_saw",
            B: "#minecraft:planks",
        })
        .damageIngredient("kubejs:flint_saw", 2);

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
});
