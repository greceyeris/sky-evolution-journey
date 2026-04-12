ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 flopper:flopper 的配方
    event.shaped("flopper:flopper", ["A A", "ABA", " A "], {
        A: "#minecraft:planks",
        B: "minecraft:bowl",
    });
});
