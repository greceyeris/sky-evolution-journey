ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 minecraft:mycelium 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:mycelium_seeds" },
        block_in: { blocks: ["minecraft:dirt"] },
        post: [
            {
                type: "drop_item",
                item: "minecraft:mycelium",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 minecraft:soul_sand 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "minecraft:bone_block" },
        block_in: { blocks: ["minecraft:sand"] },
        post: [
            {
                type: "drop_item",
                item: "minecraft:soul_sand",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 minecraft:crimson_nylium 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "minecraft:crimson_fungus" },
        block_in: { blocks: ["minecraft:netherrack"] },
        post: [
            {
                type: "drop_item",
                item: "minecraft:crimson_nylium",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });
});
