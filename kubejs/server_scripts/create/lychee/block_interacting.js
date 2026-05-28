ServerEvents.recipes((event) => {
    // 添加配方
    // lychee:block_interacting
    // 添加 create:cogwheel 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:gear_small" },
        block_in: { blocks: ["create:shaft"] },
        post: [
            {
                type: "drop_item",
                item: "create:cogwheel",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:shaft" },
        block_in: { blocks: ["create_hc:gear_small"] },
        post: [
            {
                type: "drop_item",
                item: "create:cogwheel",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:large_cogwheel 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:gear_large" },
        block_in: { blocks: ["create:shaft"] },
        post: [
            {
                type: "drop_item",
                item: "create:large_cogwheel",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:shaft" },
        block_in: { blocks: ["create_hc:gear_large"] },
        post: [
            {
                type: "drop_item",
                item: "create:large_cogwheel",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:mechanical_saw 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:saw_blade" },
        block_in: { blocks: ["create:gearbox"] },
        post: [
            {
                type: "drop_item",
                item: "create:mechanical_saw",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:millstone 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:gearbox" },
        block_in: { tag: "forge:stone" },
        post: [
            {
                type: "drop_item",
                item: "create:millstone",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:spout 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:copper_valve_handle" },
        block_in: { blocks: ["create:fluid_tank"] },
        post: [
            {
                type: "drop_item",
                item: "create:spout",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:fluid_tank 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { tag: "forge:glass_panes" },
        block_in: { blocks: ["create:copper_casing"] },
        post: [
            {
                type: "drop_item",
                item: "create:fluid_tank",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:gearbox 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:gear_small" },
        block_in: { blocks: ["create:andesite_casing"] },
        post: [
            {
                type: "drop_item",
                item: "create:gearbox",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:fluid_pipe 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "gtceu:copper_plate" },
        block_in: { blocks: ["create:chute"] },
        post: [
            {
                type: "drop_item",
                item: "create:fluid_pipe",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:mechanical_pump 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:gear_small" },
        block_in: { blocks: ["create:fluid_pipe"] },
        post: [
            {
                type: "drop_item",
                item: "create:mechanical_pump",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:shaft 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "gtceu:andesite_alloy_nugget" },
        block_in: { blocks: ["create_hc:shaft"] },
        post: [
            {
                type: "drop_item",
                item: "create:shaft",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:mechanical_press 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:press_head" },
        block_in: { blocks: ["create:gearbox"] },
        post: [
            {
                type: "drop_item",
                item: "create:mechanical_press",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:depot 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:turntable" },
        block_in: { blocks: ["create:andesite_casing"] },
        post: [
            {
                type: "drop_item",
                item: "create:depot",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:turntable 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "gtceu:andesite_alloy_ingot" },
        block_in: { tag: "minecraft:wooden_slabs" },
        post: [
            {
                type: "drop_item",
                item: "create:turntable",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:encased_fan 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:propeller" },
        block_in: { blocks: ["create:gearshift"] },
        post: [
            {
                type: "drop_item",
                item: "create:encased_fan",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:gearshift 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create_hc:gear_small" },
        block_in: { blocks: ["create:clutch"] },
        post: [
            {
                type: "drop_item",
                item: "create:gearshift",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:clutch 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "minecraft:redstone_torch" },
        block_in: { blocks: ["create:gearbox"] },
        post: [
            {
                type: "drop_item",
                item: "create:clutch",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });

    // 添加 create:mechanical_mixer 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { item: "create:whisk" },
        block_in: { blocks: ["create:gearbox"] },
        post: [
            {
                type: "drop_item",
                item: "create:mechanical_mixer",
            },
            {
                type: "place",
                block: "minecraft:air",
            },
        ],
    });
});
