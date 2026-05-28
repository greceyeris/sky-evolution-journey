ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:melting
    // 添加 gtceu:copper 的配方
    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:copper", 144),
        "minecraft:copper_ingot",
        150,
        "heated",
    );

    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:copper", 216),
        "gtceu:refined_copper_ore",
        150,
        "heated",
    );

    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:copper", 1296),
        "minecraft:copper_block",
        150,
        "heated",
    );

    // 添加 gtceu:andesite_alloy 的配方
    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:andesite_alloy", 144),
        "gtceu:andesite_alloy_dust",
        150,
        "heated",
    );

    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:andesite_alloy", 1296),
        "gtceu:andesite_alloy_block",
        150,
        "heated",
    );

    // 添加 gtceu:iron 的配方
    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:iron", 216),
        "gtceu:refined_iron_ore",
        150,
        "heated",
    );

    event.recipes.createmetallurgy.melting(
        Fluid.of("gtceu:iron", 1296),
        "minecraft:iron_block",
        150,
        "heated",
    );
});
