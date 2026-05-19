StartupEvents.registry("item", (event) => {
    // 注册物品
    // 注册 mossy_twig
    event.create("mossy_twig").maxStackSize(64);

    // 注册 mossy_flint_shard
    event.create("mossy_flint_shard").maxStackSize(64);

    // 注册 organic_matter_clump
    event.create("organic_matter_clump").maxStackSize(64);
});
