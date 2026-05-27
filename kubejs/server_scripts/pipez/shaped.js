ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 pipez:wrench 的配方
    event.shaped("pipez:wrench", [" A ", " BA", "B  "], {
        A: "minecraft:flint",
        B: "#forge:rods/wooden",
    });

    // 添加 pipez:fluid_pipe 的配方
    event.shaped("2x pipez:fluid_pipe", ["AAA", "BCB", "AAA"], {
        A: "minecraft:brick",
        B: "ceramicbucket:ceramic_bucket",
        C: "minecraft:redstone",
    });
});
