ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
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
});
