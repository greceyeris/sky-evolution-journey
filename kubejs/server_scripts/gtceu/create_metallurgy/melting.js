ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:melting
    // 添加 gtceu:andesite_alloy 的配方
    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:copper", 144),
        "minecraft:copper_ingot",
        200,
        "heated",
    );

    // 添加 gtceu:andesite_alloy 的配方
    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:andesite_alloy", 144),
        "gtceu:andesite_alloy_dust",
        200,
        "heated",
    );

    // 添加 gtceu:iron 的配方
    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:iron", 216),
        "gtceu:refined_iron_ore",
        200,
        "heated",
    );
});
