ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 gtceu:brick_wooden_form 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:planks",
            },
        ],
        tool: {
            tag: "forge:tools/saws",
        },
        result: [
            {
                item: "gtceu:empty_wooden_form",
            },
        ],
    });

    // 添加 gtceu:brick_wooden_form 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "gtceu:empty_wooden_form",
            },
        ],
        tool: {
            tag: "forge:tools/knives",
        },
        result: [
            {
                item: "gtceu:brick_wooden_form",
            },
        ],
    });
});
