ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:item_inside
    // 添加 botania:fertilizer 的配方
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: "minecraft:bone_meal",
        },
        block_in: {
            blocks: ["strainers:purified_water_block"],
        },
        post: [
            {
                type: "drop_item",
                item: "botania:fertilizer",
            },
        ],
    });
});
