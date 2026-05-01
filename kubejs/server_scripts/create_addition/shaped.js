ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 createaddition:rolling_mill 的配方
    event.shaped("createaddition:rolling_mill", ["ABA", "CBC", "CDC"], {
        A: "vintage:andesite_sheet",
        B: "create:shaft",
        C: "gtceu:andesite_alloy_ingot",
        D: "create:andesite_casing",
    });
});
