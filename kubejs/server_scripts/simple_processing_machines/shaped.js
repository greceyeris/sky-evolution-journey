ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 simpleprocessingmachines:organic_composter 的配方
    event.shaped(
        "simpleprocessingmachines:organic_composter",
        ["A A", "BCB", "ADA"],
        {
            A: "#minecraft:logs",
            B: "#minecraft:planks",
            C: "#minecraft:wooden_slabs",
            D: "minecraft:campfire",
        },
    );

    // 添加 simpleprocessingmachines:crystallizing_station 的配方
    event.shaped(
        "simpleprocessingmachines:crystallizing_station",
        [" A ", "BBB", "CDC"],
        {
            A: "minecraft:bowl",
            B: "#minecraft:wooden_slabs",
            C: "#minecraft:planks",
            D: "minecraft:campfire",
        },
    );

    // 添加 simpleprocessingmachines:atmospheric_condenser 的配方
    event.shaped(
        "simpleprocessingmachines:atmospheric_condenser",
        ["ABA", "ACA", "ADA"],
        {
            A: "#minecraft:planks",
            B: "minecraft:bowl",
            C: "flopper:flopper",
            D: "#minecraft:wooden_slabs",
        },
    );

    // 添加 simpleprocessingmachines:sawmilling_station 的配方
    event.shaped(
        "simpleprocessingmachines:sawmilling_station",
        [" A ", "BBB", "CDC"],
        {
            A: "#forge:tools/saws",
            B: "minecraft:smooth_stone_slab",
            C: "minecraft:smooth_stone",
            D: "brickfurnace:brick_furnace",
        },
    );
});
