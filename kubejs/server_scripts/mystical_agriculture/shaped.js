ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 mysticalagriculture:infusion_altar 的配方
    event.shaped("mysticalagriculture:infusion_altar", ["ABA", "BCB", "CCC"], {
        A: "minecraft:brick",
        B: "minecraft:red_wool",
        C: "botania:livingrock",
    });

    // 添加 mysticalagriculture:infusion_pedestal 的配方
    event.shaped(
        "mysticalagriculture:infusion_pedestal",
        ["ABA", " C ", " C "],
        {
            A: "minecraft:brick",
            B: "minecraft:red_wool",
            C: "botania:livingrock",
        },
    );
});
