ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 mysticalagriculture:soulstone 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: "thermal_extra:soul_sand_dust",
        },
        block_in: { blocks: ["minecraft:stone"] },
        post: [
            {
                type: "drop_item",
                item: "mysticalagriculture:soulstone",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 mysticalagriculture:prosperity_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:cyan_petal_block" },
        block_in: { blocks: ["gtceu:iron_ore"] },
        post: [
            {
                type: "drop_item",
                item: "mysticalagriculture:prosperity_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 mysticalagriculture:soulium_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:brown_petal_block" },
        block_in: { blocks: ["mysticalagriculture:soulstone"] },
        post: [
            {
                type: "drop_item",
                item: "mysticalagriculture:soulium_ore",
                count: 2,
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });
});
