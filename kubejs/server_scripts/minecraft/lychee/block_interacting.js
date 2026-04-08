ServerEvents.recipes((event) => {
    // 添加配方
    // block_interacting
    // 添加 minecraft:dead_bush, botania:living_root 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { tag: "forge:tools/knives" },
        block_in: { tag: "minecraft:dirt" },
        post: [
            {
                type: "drop_item",
                item: "minecraft:dead_bush",
                contextual: {
                    type: "chance",
                    chance: 0.3,
                },
            },
            {
                type: "drop_item",
                item: "botania:living_root",
                contextual: {
                    type: "chance",
                    chance: 0.3,
                },
            },
            {
                type: "add_item_cooldown",
                s: 0.3,
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
        ],
    });
});
