ServerEvents.recipes((event) => {
    // 添加配方
    // brickfurnace:smelting
    // 添加 opolisutilities:mini_charcoal 的配方
    event.custom({
        type: "brickfurnace:smelting",
        ingredient: {
            item: "kubejs:twig",
        },
        result: "opolisutilities:mini_charcoal",
        experience: 0.3,
        cookingtime: 300,
    });
});
