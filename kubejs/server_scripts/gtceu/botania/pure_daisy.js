ServerEvents.recipes((event) => {
    // 添加配方
    // pure_daisy
    // 添加 gtceu:copper_ore 的配方
    event.recipes.botania.pure_daisy(
        "gtceu:copper_ore",
        "botania:orange_petal_block"
    );
});
