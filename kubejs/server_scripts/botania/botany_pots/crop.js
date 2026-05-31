ServerEvents.recipes((event) => {
    // 添加配方
    // botanypots:crop
    // 添加 botania:mystical_flowers 和 botania:double_flowers 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.recipes.botanypots.crop(
                item,
                ["dirt", "vivid_grass"],
                { block: item },
                [
                    Item.of(item).withChance(1).withRolls(1, 1),
                    Item.of(item.replace("_mystical_flower", "_double_flower"))
                        .withChance(0.05)
                        .withRolls(1, 1),
                ],
                900,
                1,
            );
        });

    // 添加 botania:double_flowers 的配方
    Ingredient.of("#botania:double_flowers")
        .getItemIds()
        .forEach((item) => {
            event.recipes.botanypots.crop(
                item,
                ["dirt", "vivid_grass"],
                { block: item },
                [Item.of(item).withChance(1).withRolls(1, 1)],
                1500,
                1,
            );
        });
});
