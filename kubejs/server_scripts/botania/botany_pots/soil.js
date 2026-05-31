ServerEvents.recipes((event) => {
    // 添加配方
    // botanypots:soil
    // 添加 botania:vivid_grass 的土壤
    event.recipes.botanypots.soil(
        "botania:vivid_grass",
        { block: "botania:vivid_grass" },
        ["vivid_grass"],
        -1,
        1.3,
    );
});
