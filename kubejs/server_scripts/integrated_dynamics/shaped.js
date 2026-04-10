ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 integrateddynamics:squeezer 的配方
    event.shaped("integrateddynamics:squeezer", ["ABA", "A A", "CDC"], {
        A: "#forge:rods/wooden",
        B: "#minecraft:logs",
        C: "#minecraft:planks",
        D: "minecraft:bowl",
    });

    // 添加 integrateddynamics:drying_basin 的配方
    event.shaped("integrateddynamics:drying_basin", ["A A", "B B", "ACA"], {
        A: "#minecraft:logs",
        B: "#forge:stripped_logs",
        C: "#minecraft:wooden_slabs",
    });
});
