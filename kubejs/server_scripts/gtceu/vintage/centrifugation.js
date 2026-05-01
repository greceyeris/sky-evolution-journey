ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:centrifugation
    // 添加 gtceu:refined_iron_ore 和 gtceu:stone_dust 的配方
    event.recipes.vintage.centrifugation(
        ["gtceu:refined_iron_ore", "gtceu:stone_dust"],
        "gtceu:purified_iron_ore",
    );
});
