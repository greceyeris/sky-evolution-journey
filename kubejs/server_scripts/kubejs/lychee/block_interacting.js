ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 kubejs:twig 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "air" },
        block_in: { tag: "minecraft:dirt" },
        contextual: { type: "is_sneaking" },
        post: [
            {
                type: "add_item_cooldown",
                s: 0.2,
            },
            {
                type: "drop_item",
                item: "kubejs:twig",
                contextual: {
                    type: "chance",
                    chance: 0.5,
                },
            },
        ],
    });

    // 添加 kubejs:flint_shard 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "minecraft:stick" },
        block_in: { tag: "minecraft:dirt" },
        post: [
            {
                type: "prevent_default",
            },
            {
                type: "add_item_cooldown",
                s: 0.2,
            },
            {
                type: "drop_item",
                item: "kubejs:flint_shard",
                contextual: {
                    type: "chance",
                    chance: 0.4,
                },
            },
        ],
    });
});
