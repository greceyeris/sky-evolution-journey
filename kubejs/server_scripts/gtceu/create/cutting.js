ServerEvents.recipes((event) => {
    // 添加配方
    // create:cutting
    // 添加 gtceu:empty_mold 的配方
    event.recipes.create
        .cutting("2x gtceu:iron_bolt", "gtceu:iron_rod")
        .processingTime(150);
});
