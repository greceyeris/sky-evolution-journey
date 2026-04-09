ServerEvents.tags("item", (event) => {
    // 定义 addItemTags 数组
    const addItemTags = [
        {
            tag: "kubejs:organic_matters",
            items: ["#minecraft:leaves", "#minecraft:saplings"],
        },
        {
            tag: "forge:tools/saws",
            items: ["kubejs:flint_saw"],
        },
        {
            tag: "minecraft:stripped_oak_logs",
            items: [
                "minecraft:stripped_oak_log",
                "minecraft:stripped_oak_wood",
            ],
        },
    ];

    // addItemTags
    addItemTags.forEach((obj) => {
        // add
        event.add(obj.tag, obj.items);
    });
});
