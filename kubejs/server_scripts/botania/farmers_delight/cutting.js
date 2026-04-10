ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 botania:petals 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: item,
                    },
                ],
                tool: {
                    tag: "forge:tools/knives",
                },
                result: [
                    {
                        item: item.replace("_mystical_flower", "_petal"),
                        count: 2,
                    },
                ],
            });
        });

    Ingredient.of("#botania:double_mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [
                    {
                        item: item,
                    },
                ],
                tool: {
                    tag: "forge:tools/knives",
                },
                result: [
                    {
                        item: item.replace("_double_flower", "_petal"),
                        count: 4,
                    },
                ],
            });
        });
});
