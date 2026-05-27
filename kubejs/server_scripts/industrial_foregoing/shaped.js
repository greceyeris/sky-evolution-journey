ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 industrialforegoing:pitiful_generator 的配方
    event.shaped(
        "industrialforegoing:pitiful_generator",
        ["ABA", "CDC", "AEA"],
        {
            A: "minecraft:cobblestone",
            B: "minecraft:stone",
            C: "#forge:rods/wooden",
            D: "#minecraft:planks",
            E: "minecraft:furnace",
        },
    );
});
