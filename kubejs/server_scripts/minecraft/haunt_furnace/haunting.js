ServerEvents.recipes((event) => {
    // 添加配方
    // hauntfurnace:haunting
    // 添加 minecraft:blackstone 的配方
    event.custom({
        type: "hauntfurnace:haunting",
        ingredient: {
            tag: "forge:cobblestone",
        },
        result: "minecraft:blackstone",
        experience: 0.1,
    });
});
