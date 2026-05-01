ServerEvents.recipes((event) => {
    // 添加配方
    // brewinandchewin:fermenting
    // 添加 minecraft:mud 的配方
    event.custom({
        type: "brewinandchewin:fermenting",
        ingredients: [
            {
                item: "minecraft:dirt",
            },
        ],
        basefluid: {
            count: 500,
            fluid: "minecraft:water",
        },
        result: {
            item: "minecraft:mud",
            count: 1,
        },
        fermentingtime: 200,
        temperature: 3,
    });
});
