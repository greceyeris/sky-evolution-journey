ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 mysticalagriculture:soulstone 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: {
            item: "thermal_extra:soul_sand_dust",
        },
        block_in: "minecraft:stone",
        post: [
            {
                type: "place",
                block: "*",
            },
            {
                type: "drop_item",
                item: "mysticalagriculture:soulstone",
            },
        ],
    });
});
