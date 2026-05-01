ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 create:copper_valve_handle 的配方
    event.shaped("create:copper_valve_handle", ["AAA", " A "], {
        A: "minecraft:copper_ingot",
    });

    // 添加 create:empty_blaze_burner 的配方
    event.shaped("create:empty_blaze_burner", [" A ", "ABA", " A "], {
        A: "vintage:andesite_sheet",
        B: "minecraft:netherrack",
    });

    // 添加 create:whisk 的配方
    event.shaped("create:whisk", [" AA", " AA", "B  "], {
        A: "vintage:andesite_sheet",
        B: "create:cogwheel",
    });
});
