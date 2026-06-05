ServerEvents.recipes((event) => {
    // 添加配方
    // createmetallurgy:alloying
    // 添加 gtceu:brass 的配方
    event.recipes.createmetallurgy.alloying(
        Fluid.of("gtceu:brass", 288),
        [Fluid.of("gtceu:copper", 144), Fluid.of("gtceu:zinc", 144)],
        100,
        "heated",
    );
});
