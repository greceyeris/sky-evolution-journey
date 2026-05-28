ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 gtceu:copper_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:orange_petal_block" },
        block_in: { blocks: ["minecraft:stone"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:copper_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:iron_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:white_petal_block" },
        block_in: { blocks: ["minecraft:stone"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:iron_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:coal_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:black_petal_block" },
        block_in: { blocks: ["minecraft:stone"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:coal_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:graphite_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:black_petal_block" },
        block_in: { blocks: ["gtceu:iron_ore"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:graphite_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:white_petal_block" },
        block_in: { blocks: ["gtceu:coal_ore"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:graphite_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:redstone_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:red_petal_block" },
        block_in: { blocks: ["minecraft:stone"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:redstone_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:lapis_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:blue_petal_block" },
        block_in: { blocks: ["gtceu:iron_ore"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:lapis_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:sulfur_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:yellow_petal_block" },
        block_in: { blocks: ["minecraft:stone"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:sulfur_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 gtceu:saltpeter_ore 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "botania:light_gray_petal_block" },
        block_in: { blocks: ["gtceu:iron_ore"] },
        post: [
            {
                type: "drop_item",
                item: "gtceu:saltpeter_ore",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });
});
