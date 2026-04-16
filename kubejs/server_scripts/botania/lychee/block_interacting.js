ServerEvents.recipes((event) => {
    // 添加配方
    // integrateddynamics:block_interacting
    // 添加 botania:living_root 的配方
    event.custom({
        type: "lychee:block_interacting",
        item_in: { tag: "forge:tools/knives" },
        block_in: { tag: "minecraft:dirt" },
        post: [
            { type: "damage_item" },
            { type: "add_item_cooldown", s: 0.2 },
            {
                type: "drop_item",
                item: "botania:living_root",
                contextual: { type: "chance", chance: 0.5 },
            },
        ],
    });
});
