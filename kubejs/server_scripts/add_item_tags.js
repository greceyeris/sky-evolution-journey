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

        {
            tag: "botania:all_mystical_flowers",
            items: [
                "#botania:mystical_flowers",
                "#botania:double_mystical_flowers",
            ],
        },
        {
            tag: "botania:orange_mystical_flowers",
            items: [
                "botania:orange_mystical_flower",
                "botania:orange_double_flower",
            ],
        },
        {
            tag: "botania:white_mystical_flowers",
            items: [
                "botania:white_mystical_flower",
                "botania:white_double_flower",
            ],
        },
        {
            tag: "botania:red_mystical_flowers",
            items: ["botania:red_mystical_flower", "botania:red_double_flower"],
        },
    ];

    // addItemTags
    addItemTags.forEach((obj) => {
        // add
        event.add(obj.tag, obj.items);
    });
});
