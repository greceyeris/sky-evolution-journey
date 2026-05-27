ServerEvents.recipes((event) => {
    // 添加配方
    // smelting
    // 添加 ceramicbucket:ceramic_bucket 的配方
    event.smelting(
        "ceramicbucket:ceramic_bucket",
        "ceramicbucket:unfired_clay_bucket",
    );
});
