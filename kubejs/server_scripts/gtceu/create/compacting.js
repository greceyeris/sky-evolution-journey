ServerEvents.recipes((event) => {
    // 添加配方
    // create:compacting
    // 添加 gtceu:empty_mold 的配方
    event.recipes.create.compacting(
        "gtceu:empty_mold",
        "2x ftbmaterials:graphite_ingot",
    );
});
