ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 brickfurnace:brick_furnace 的配方
    event.shaped("brickfurnace:brick_furnace", ["AAA", "ABA", "CCC"], {
        A: "minecraft:brick",
        B: "minecraft:campfire",
        C: "minecraft:bricks",
    });
});
