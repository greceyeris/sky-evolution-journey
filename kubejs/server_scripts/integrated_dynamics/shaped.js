ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 integrateddynamics:squeezer 的配方
    event.shaped("integrateddynamics:squeezer", ["ABA", "A A", "ACA"], {
        A: "minecraft:stone",
        B: "#forge:cobblestone",
        C: "minecraft:smooth_stone_slab",
    });

    // 添加 integrateddynamics:drying_basin 的配方
    event.shaped("integrateddynamics:drying_basin", ["A A", "B B", "ACA"], {
        A: "#minecraft:logs",
        B: "#forge:stripped_logs",
        C: "#minecraft:wooden_slabs",
    });

    // 添加 integrateddynamics:menril_planks 的配方
    event.shaped("integrateddynamics:menril_planks", ["AA"], {
        A: "integrateddynamics:menril_slab",
    });

    // 添加 integrateddynamics:crystalized_menril_block 的配方
    event.shaped("integrateddynamics:crystalized_menril_block", ["AA"], {
        A: "integrateddynamics:crystalized_menril_block_slab",
    });

    // 添加 integrateddynamics:crystalized_menril_bricks 的配方
    event.shaped("integrateddynamics:crystalized_menril_brick", ["AA"], {
        A: "integrateddynamics:crystalized_menril_brick_slab",
    });

    // 添加 integrateddynamics:crystalized_chorus_block 的配方
    event.shaped("integrateddynamics:crystalized_chorus_block", ["AA"], {
        A: "integrateddynamics:crystalized_chorus_block_slab",
    });

    // 添加 integrateddynamics:crystalized_chorus_bricks 的配方
    event.shaped("integrateddynamics:crystalized_chorus_brick", ["AA"], {
        A: "integrateddynamics:crystalized_chorus_brick_slab",
    });
});
