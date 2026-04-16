ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 gtceu:empty_wooden_form 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:wooden_slabs" }],
        result: [{ item: "gtceu:empty_wooden_form" }],
        tool: { tag: "forge:tools/saws" },
    });

    // 添加 gtceu:brick_wooden_form 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "gtceu:empty_wooden_form" }],
        result: [{ item: "gtceu:brick_wooden_form" }],
        tool: { tag: "forge:tools/knives" },
    });
});
