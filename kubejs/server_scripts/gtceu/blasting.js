ServerEvents.recipes((event) => {
    // 添加配方
    // blasting
    // 添加 gtceu:andesite_alloy_ingot 的配方
    event
        .blasting("gtceu:andesite_alloy_ingot", "gtceu:andesite_alloy_dust")
        .cookingTime(150);
});
