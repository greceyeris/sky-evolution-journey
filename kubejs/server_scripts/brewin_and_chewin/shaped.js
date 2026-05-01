ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 brewinandchewin:keg 的配方
    event.shaped("brewinandchewin:keg", ["ABA", "A A", "ACA"], {
        A: "#minecraft:logs",
        B: "#minecraft:planks",
        C: "#minecraft:wooden_slabs",
    });
});
