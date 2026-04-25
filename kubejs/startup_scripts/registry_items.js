StartupEvents.registry("item", (event) => {
    // 注册物品
    // 注册 mossy_twig
    event.create("mossy_twig").maxStackSize(64);

    // 注册 mossy_flint_shard
    event.create("mossy_flint_shard").maxStackSize(64);

    // 注册 humus_pile
    event.create("humus_pile").maxStackSize(64);

    // 注册 dirt_pile
    event.create("dirt_pile").maxStackSize(64);

    // 注册 flint_saw
    event.create("flint_saw").unstackable().maxDamage(64);
});
