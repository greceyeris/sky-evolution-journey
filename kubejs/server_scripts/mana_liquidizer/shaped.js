ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 manaliquidizer:mana_liquidizer 的配方
    event.shaped("manaliquidizer:mana_liquidizer", ["ABA", "CDE", "ABA"], {
        A: "botania:livingrock",
        B: "botania:mana_powder",
        C: "botania:mana_tablet",
        D: "#forge:glass",
        E: "minecraft:bucket",
    });
});
