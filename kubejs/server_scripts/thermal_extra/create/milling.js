ServerEvents.recipes((event) => {
    // 添加配方
    // create:milling
    // 添加 thermal_extra:soul_sand_dust 的配方
    event.recipes.create.milling(
        "thermal_extra:soul_sand_dust",
        "minecraft:soul_sand",
    );
});
