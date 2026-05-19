ServerEvents.recipes((event) => {
    // 添加配方
    // productivebees:bee_conversion
    // 添加 productivebees:copper 的配方
    event.custom({
        type: "productivebees:bee_conversion",
        source: "minecraft:bee",
        item: {
            item: "minecraft:copper_ingot",
        },
        result: "productivebees:copper",
    });
});
