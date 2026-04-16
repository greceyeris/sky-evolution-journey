ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 immersiveengineering:hammer 的配方
    event.shaped("immersiveengineering:hammer", [" AB", " CA", "C  "], {
        A: "minecraft:copper_ingot",
        B: "botania:mana_string",
        C: "#forge:rods/wooden",
    });
});
