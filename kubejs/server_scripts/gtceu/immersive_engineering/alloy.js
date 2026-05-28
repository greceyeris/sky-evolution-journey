ServerEvents.recipes((event) => {
    // 添加配方
    // immersiveengineering:alloy
    // 添加 gtceu:andesite_alloy_dust 的配方
    event.recipes.immersiveengineering.alloy(
        "gtceu:andesite_alloy_dust",
        "gtceu:copper_dust",
        "gtceu:andesite_dust",
    );
});
