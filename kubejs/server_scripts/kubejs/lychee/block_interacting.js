ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 kubejs:twig, kubejs:flint_shard 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "air" },
        block_in: { tag: "minecraft:dirt" },
        contextual: { type: "is_sneaking" },
        post: [
            {
                type: "drop_item",
                item: "kubejs:twig",
                contextual: {
                    type: "chance",
                    chance: 0.3,
                },
            },
            {
                type: "drop_item",
                item: "kubejs:flint_shard",
                contextual: {
                    type: "chance",
                    chance: 0.3,
                },
            },
            {
                type: "add_item_cooldown",
                s: 0.2,
            },
        ],
    });
});
