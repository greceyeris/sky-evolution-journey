ServerEvents.recipes((event) => {
    // 添加配方
    // bonsaitrees3:sapling
    // 添加 botania:mystical_flowers, botania:double_flowers 的配方
    Ingredient.of("#botania:mystical_flowers")
        .getItemIds()
        .forEach((item) => {
            event.custom({
                type: "bonsaitrees3:sapling",
                sapling: { item: item },
                compatibleSoilTags: ["dirt", "grass"],
                drops: [
                    {
                        rolls: 1,
                        chance: 1.0,
                        result: { item: item },
                    },
                    {
                        rolls: 1,
                        chance: 0.5,
                        result: {
                            item: item.replace(
                                "_mystical_flower",
                                "_double_flower",
                            ),
                        },
                        requiresBees: true,
                    },
                ],
            });
        });
});
