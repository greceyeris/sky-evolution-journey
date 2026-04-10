ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:squeezer
    // 添加 minecraft:water 的配方
    Ingredient.of("#kubejs:organic_matters")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "integrateddynamics:squeezer",
                item: item,
                result: {
                    fluid: {
                        fluid: "minecraft:water",
                        amount: 125,
                    },
                },
            });
        });

    // 添加 minecraft:gravel 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:cobblestone",
        result: {
            items: [
                {
                    item: "minecraft:gravel",
                },
            ],
        },
    });

    // 添加 minecraft:sand 的配方
    event.custom({
        type: "integrateddynamics:squeezer",
        item: "minecraft:gravel",
        result: {
            items: [
                {
                    item: "minecraft:sand",
                },
            ],
        },
    });
});
