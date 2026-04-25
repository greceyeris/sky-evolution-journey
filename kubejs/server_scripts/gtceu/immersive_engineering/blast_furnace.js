ServerEvents.recipes((event) => {
    // 添加配方
    // immersiveengineering:blast_furnace
    // 添加 gtceu:andesite_alloy_ingot 的配方
    event.recipes.immersiveengineering.blast_furnace(
        "gtceu:andesite_alloy_ingot",
        "gtceu:andesite_alloy_dust",
        "immersiveengineering:slag",
        1200,
    );
});
