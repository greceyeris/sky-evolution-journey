ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 createmetallurgy:foundry_basin 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "createmetallurgy:refractory_mortar" },
        block_in: { blocks: ["create:basin"] },
        post: [
            {
                type: "drop_item",
                item: "createmetallurgy:foundry_basin",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });
});
