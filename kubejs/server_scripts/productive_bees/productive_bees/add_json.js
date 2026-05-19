ServerEvents.highPriorityData((event) => {
    // addJson
    // 添加 productivebees:productivebees/raw_materials/copper 的配方
    event.addJson("productivebees:productivebees/raw_materials/copper", {
        primaryColor: "#B87333",
        secondaryColor: "#FF8C00",
        flowerBlock: "minecraft:copper_block",
    });
});
