ServerEvents.recipes((event) => {
    // 添加配方
    // create:filling
    // 添加 thermal_extra:soul_infused_ingot 的配方
    event.recipes.create
        .mixing("2x thermal_extra:soul_infused_ingot", [
            "minecraft:iron_ingot",
            "2x thermal_extra:soul_sand_dust",
            "minecraft:copper_ingot",
        ])
        .heated();
});
