ServerEvents.recipes((event) => {
    // 添加配方
    // create:haunting
    // 添加 botania:mycelium_seeds 的配方
    event.recipes.create.haunting(
        "botania:mycelium_seeds",
        "botania:grass_seeds",
    );
});
