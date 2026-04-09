ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 farmersdelight:cutting_board 的配方
    event.shaped("farmersdelight:cutting_board", ["ABB", "ABB"], {
        A: "#forge:rods/wooden",
        B: "#minecraft:logs",
    });
});
