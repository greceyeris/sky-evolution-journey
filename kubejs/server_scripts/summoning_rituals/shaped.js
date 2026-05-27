ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 summoningrituals:altar 的配方
    event.shaped("summoningrituals:altar", ["ABA", "BCB", "CDC"], {
        A: "botania:mana_powder",
        B: "minecraft:red_wool",
        C: "botania:livingwood_planks_slab",
        D: "botania:livingwood_log",
    });
});
