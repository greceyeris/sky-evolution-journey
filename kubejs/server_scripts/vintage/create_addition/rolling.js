ServerEvents.recipes((event) => {
    // 添加配方
    // createaddition:rolling
    // 添加 vintage:andesite_rod 的配方
    event.custom({
        type: "createaddition:rolling",
        input: {
            item: "gtceu:andesite_alloy_ingot",
        },
        result: {
            item: "vintage:andesite_rod",
        },
    });
});
