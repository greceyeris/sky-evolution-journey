ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 kubejs:all_logs_and_woods, farmersdelight:tree_bark 的配方
    Ingredient.of("#kubejs:all_logs_and_woods")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [{ item: item }],
                result: [
                    { item: item.replace(":", ":stripped_") },
                    { item: "farmersdelight:tree_bark" },
                ],
                tool: { tag: "forge:tools/axes" },
            });
        });

    Ingredient.of("#kubejs:all_logs_and_woods")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "farmersdelight:cutting",
                ingredients: [{ item: item }],
                result: [
                    { item: item.replace(":", ":stripped_") },
                    { item: "farmersdelight:tree_bark" },
                ],
                tool: { tag: "forge:tools/paxels" },
            });
        });
});
