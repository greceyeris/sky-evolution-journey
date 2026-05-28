ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:casting_in_basin
    // 添加 immersiveengineering:alloybrick 的配方
    event.recipes.createmetallurgy.casting_in_basin(
        "immersiveengineering:alloybrick",
        [Fluid.of("gtceu:copper", 288), "minecraft:sandstone"],
        150,
    );
});
