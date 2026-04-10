ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 minecraft:dead_bush 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "kubejs:twig" },
        block_in: { tag: "minecraft:dirt" },
        post: [
            {
                type: "place",
                block: "minecraft:dead_bush",
                offsetY: 1,
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

    // 添加 minecraft:oak_sapling 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:living_root" },
        block_in: { blocks: ["minecraft:dead_bush"] },
        post: [
            {
                type: "place",
                block: "minecraft:oak_sapling",
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
