StartupEvents.registry("item", (event) => {
    // 注册物品
    // 注册 dirt_dust
    event.create("dirt_dust").maxStackSize(64);

    // 注册 dirt_stick
    event.create("dirt_stick").maxStackSize(64);

    // 注册 flint_shard
    event.create("flint_shard").maxStackSize(64);
});
