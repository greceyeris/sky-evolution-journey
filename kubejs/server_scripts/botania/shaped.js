ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 botania:mana_spreader 的配方
    event.shaped("botania:mana_spreader", ["AAA", "BC ", "AAA"], {
        A: "#botania:livingwood_logs",
        B: "minecraft:brick",
        C: "#botania:petals",
    });

    // 添加 botania:smooth_stone 的配方
    event.shaped("botania:mossy_livingrock_bricks", ["AA"], {
        A: "botania:mossy_livingrock_bricks_slab",
    });

    // 添加 botania:stripped_livingwood 的配方
    event.shaped("botania:stripped_livingwood", ["AA"], {
        A: "botania:stripped_livingwood_slab",
    });

    // 添加 botania:stripped_dreamwood 的配方
    event.shaped("botania:stripped_dreamwood", ["AA"], {
        A: "botania:stripped_dreamwood_slab",
    });
});
