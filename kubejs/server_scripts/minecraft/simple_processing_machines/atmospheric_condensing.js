ServerEvents.recipes((event) => {
    // 添加配方
    // simpleprocessingmachines:atmospheric_condensing
    // 添加 minecraft:water 的配方
    event.custom({
        type: "simpleprocessingmachines:atmospheric_condensing",
        inputs: [
            {
                fluid: "minecraft:empty",
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
            {
                fluid: "minecraft:empty",
                optional: true,
            },
        ],
        output: { fluid: "minecraft:water", amount: 4 },
        is_height_applied: false,
        ticks_per_fluid: 10,
        fluid_per_operation: 4,
        valid_dimensions: ["minecraft:overworld"],
    });
});
