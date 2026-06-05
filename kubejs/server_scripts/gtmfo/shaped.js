ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 gtmfo:cake_bottom 的配方
    event.shaped("gtmfo:cake_bottom", ["A A", "ABA"], {
        A: "gtmfo:sugary_dough",
        B: "gtceu:cylinder_casting_mold",
    });
});
