ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 opolisutilities:leafy_string 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                tag: "minecraft:leaves",
            },
        ],
        tool: {
            tag: "forge:tools/knives",
        },
        result: [
            {
                item: "opolisutilities:leafy_string",
            },
        ],
    });
});
