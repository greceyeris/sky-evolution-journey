ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 ae2:crank 的配方
    event.shaped("ae2:crank", ["AAA", "  A", "  A"], {
        A: "#forge:rods/wooden",
    });
});
