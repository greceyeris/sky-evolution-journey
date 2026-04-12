ServerEvents.recipes((event) => {
    // 添加配方
    // brickfurnace:smelting
    // 添加 ceramicbucket:ceramic_bucket 的配方
    event.custom({
        type: "brickfurnace:smelting",
        ingredient: {
            item: "ceramicbucket:unfired_clay_bucket",
        },
        result: "ceramicbucket:ceramic_bucket",
        experience: 0.3,
        cookingtime: 300,
    });
});
