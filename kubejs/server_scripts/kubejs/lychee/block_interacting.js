ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 kubejs:mossy_twig 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "minecraft:air" },
        block_in: { blocks: ["minecraft:moss_block"] },
        contextual: { type: "is_sneaking" },
        post: [
            {
                type: "add_item_cooldown",
                s: 0.2,
            },
            {
                type: "drop_item",
                item: "kubejs:mossy_twig",
                contextual: {
                    type: "chance",
                    chance: 0.55,
                },
            },
        ],
    });

    // 添加 kubejs:mossy_flint_shard 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "minecraft:stick" },
        block_in: { blocks: ["minecraft:moss_block"] },
        post: [
            {
                type: "prevent_default",
                contextual: {
                    type: "chance",
                    chance: 0.9,
                },
            },
            {
                type: "add_item_cooldown",
                s: 0.2,
            },
            {
                type: "drop_item",
                item: "kubejs:mossy_flint_shard",
                contextual: {
                    type: "chance",
                    chance: 0.65,
                },
            },
        ],
    });
});
