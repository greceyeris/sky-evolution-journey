ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 create:basin 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "gtceu:andesite_alloy_block" }],
        result: [{ item: "create:basin" }],
        tool: { tag: "forge:tools/pickaxes" },
    });

    // 添加 create:chute 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:basin" }],
        result: [{ item: "create:chute" }],
        tool: { tag: "forge:tools/pickaxes" },
    });
});
