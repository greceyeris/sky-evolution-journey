ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 integrateddynamics:coal_generator 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "integrateddynamics:energy_battery" },
        block_in: { blocks: ["brickfurnace:brick_furnace"] },
        post: [
            {
                type: "drop_item",
                item: "integrateddynamics:coal_generator",
            },
        ],
    });

    // 添加 integrateddynamics:mechanical_squeezer 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "integrateddynamics:energy_battery" },
        block_in: { blocks: ["integrateddynamics:squeezer"] },
        post: [
            {
                type: "drop_item",
                item: "integrateddynamics:mechanical_squeezer",
            },
        ],
    });

    // 添加 integrateddynamics:mechanical_drying_basin 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "integrateddynamics:energy_battery" },
        block_in: { blocks: ["integrateddynamics:drying_basin"] },
        post: [
            {
                type: "drop_item",
                item: "integrateddynamics:mechanical_drying_basin",
            },
        ],
    });
});
