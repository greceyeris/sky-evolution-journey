ServerEvents.recipes((event) => {
    // 添加配方
    // create:filling
    // 添加 gtceu:purified_iron_ore 的配方
    event.recipes.create.filling("gtceu:purified_iron_ore", [
        Fluid.of("minecraft:water", 250),
        "gtceu:crushed_iron_ore",
    ]);
});
