ServerEvents.recipes((event) => {
    // 添加配方
    // create:compacting
    // 添加 vintage:iron_plate 的配方
    event.recipes.create.compacting(
        "gtceu:iron_plate",
        "2x minecraft:iron_ingot",
    );
});
