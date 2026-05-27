ServerEvents.recipes((event) => {
    // 添加配方
    // create:compacting
    // 添加 gtceu:empty_mold 的配方
    event.recipes.create.compacting(
        "gtceu:empty_mold",
        "2x ftbmaterials:graphite_ingot",
    );

    // 添加 gtceu:wood_plate 的配方
    event.recipes.create.compacting("gtceu:wood_plate", "2x gtceu:wood_dust");
});
