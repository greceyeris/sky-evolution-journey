ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 minecraft:flint 的配方
    event.shaped("minecraft:flint", ["AA", "AA"], {
        A: "kubejs:flint_shard",
    });
});
