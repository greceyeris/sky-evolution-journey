ServerEvents.recipes((event) => {
    // 添加配方
    // createaddition:rolling
    // 添加 gtceu:iron_rod 的配方
    event.custom({
        type: "createaddition:rolling",
        input: {
            item: "minecraft:iron_ingot",
        },
        result: {
            item: "gtceu:iron_rod",
        },
    });
});
