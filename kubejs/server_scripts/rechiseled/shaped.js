ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 rechiseled:chisel 的配方
    event.shaped("rechiseled:chisel", [" A", "B "], {
        A: "minecraft:brick",
        B: "#forge:rods/wooden",
    });
});
