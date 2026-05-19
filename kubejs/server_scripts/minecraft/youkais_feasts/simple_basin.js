ServerEvents.recipes((event) => {
    // 添加配方
    // youkaisfeasts:simple_basin
    // 添加 minecraft:water 的配方
    event.custom({
        type: "youkaisfeasts:simple_basin",
        input: {
            tag: "kubejs:organic_matters",
        },
        output: {
            fluid: "minecraft:water",
            amount: 50,
        },
    });
});
