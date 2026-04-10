StartupEvents.registry("item", (event) => {
    // 注册物品
    // 注册 twig
    event.create("twig").maxStackSize(64);

    // 注册 flint_shard
    event.create("flint_shard").maxStackSize(64);

    // 注册 humus_pile
    event.create("humus_pile").maxStackSize(64);

    // 注册 dirt_pile
    event.create("dirt_pile").maxStackSize(64);

    // 注册 flint_saw
    event.create("flint_saw").unstackable().maxDamage(64);
});
