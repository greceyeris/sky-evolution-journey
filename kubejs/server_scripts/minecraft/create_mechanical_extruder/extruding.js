ServerEvents.recipes((event) => {
    // 添加配方
    // create_mechanical_extruder:extruding
    // 添加 minecraft:stone 的配方
    event.recipes.createMechanicalExtruderExtruding(
        Item.of("minecraft:stone"),
        [Fluid.of("minecraft:water"), Fluid.of("minecraft:lava")],
    );

    // 添加 minecraft:andesite 的配方
    event.recipes.createMechanicalExtruderExtruding(
        Item.of("minecraft:andesite"),
        [Fluid.of("strainers:eroding_water_fluid"), Fluid.of("minecraft:lava")],
    );

    // 添加 minecraft:diorite 的配方
    event.recipes.createMechanicalExtruderExtruding(
        Item.of("minecraft:diorite"),
        [
            Fluid.of("strainers:purified_water_fluid"),
            Fluid.of("minecraft:lava"),
        ],
    );

    // 添加 minecraft:granite 的配方
    event.recipes.createMechanicalExtruderExtruding(
        Item.of("minecraft:granite"),
        [
            Fluid.of("strainers:eroding_water_fluid"),
            Fluid.of("strainers:purified_water_fluid"),
        ],
    );
});
