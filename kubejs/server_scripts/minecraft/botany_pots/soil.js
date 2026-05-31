ServerEvents.recipes((event) => {
    // 添加配方
    // botanypots:soil
    // 添加 minecraft:dirt 的土壤
    event.recipes.botanypots.soil(
        "minecraft:dirt",
        { block: "minecraft:dirt" },
        ["dirt"],
        -1,
        1,
    );

    // 添加 minecraft:grass_block 的土壤
    event.recipes.botanypots.soil(
        "minecraft:grass_block",
        { block: "minecraft:grass_block" },
        ["grass"],
        -1,
        1.3,
    );

    // 添加 minecraft:netherrack 的土壤
    event.recipes.botanypots.soil(
        "minecraft:netherrack",
        { block: "minecraft:netherrack" },
        ["netherrack"],
        -1,
        1,
    );

    // 添加 minecraft:crimson_nylium 的土壤
    event.recipes.botanypots.soil(
        "minecraft:crimson_nylium",
        { block: "minecraft:crimson_nylium" },
        ["crimson_nylium"],
        -1,
        1.3,
    );
});
