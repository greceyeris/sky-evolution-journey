ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 minecraft:flint 的配方
    event.shaped("minecraft:flint", ["AA", "AA"], {
        A: "kubejs:flint_shard",
    });

    // 添加 minecraft:dirt 的配方
    event.shaped("minecraft:dirt", ["AA", "AA"], {
        A: "kubejs:dirt_pile",
    });

    // 添加 minecraft:campfire 的配方
    event.shaped("minecraft:campfire", [" A ", "ABA", "CCC"], {
        A: "#forge:rods/wooden",
        B: "minecraft:flint",
        C: "#minecraft:logs",
    });

    // 添加 minecraft:beehive 的配方
    event.shaped("minecraft:beehive", ["AAA", "BBB", "AAA"], {
        A: "#minecraft:planks",
        B: "minecraft:honeycomb",
    });
});
