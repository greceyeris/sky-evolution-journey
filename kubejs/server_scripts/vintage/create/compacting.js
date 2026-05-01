ServerEvents.recipes((event) => {
    // 添加配方
    // create:compacting
    // 添加 vintage:andesite_sheet 的配方
    event.recipes.create.compacting(
        "vintage:andesite_sheet",
        "2x gtceu:andesite_alloy_ingot",
    );
});
