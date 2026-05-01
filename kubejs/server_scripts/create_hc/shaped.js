ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 create_hc:press_head 的配方
    event.shaped("create_hc:press_head", ["A", "A", "B"], {
        A: "create:shaft",
        B: "gtceu:andesite_alloy_block",
    });

    // 添加 create_hc:saw_blade 的配方
    event.shaped("create_hc:saw_blade", ["AAA", "ABA", "AAA"], {
        A: "vintage:andesite_sheet",
        B: "create:cogwheel",
    });
});
