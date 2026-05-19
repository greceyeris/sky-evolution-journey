ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 youkaisfeasts:wood_basin 的配方
    event.shaped("youkaisfeasts:wood_basin", ["A A", "ABA"], {
        A: "#minecraft:planks",
        B: "#minecraft:wooden_slabs",
    });
});
