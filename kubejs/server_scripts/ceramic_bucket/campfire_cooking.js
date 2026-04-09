ServerEvents.recipes((event) => {
    // 添加配方
    // campfireCooking
    // 添加 ceramicbucket:ceramic_bucket 的配方
    event.campfireCooking(
        "ceramicbucket:ceramic_bucket",
        "ceramicbucket:unfired_clay_bucket",
        0.3,
        400
    );
});
