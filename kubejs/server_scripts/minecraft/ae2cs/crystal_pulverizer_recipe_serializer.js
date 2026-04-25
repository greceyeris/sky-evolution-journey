ServerEvents.recipes((event) => {
    // 添加配方
    // ae2cs:crystal_pulverizer_recipe_serializer
    // 添加 minecraft:bone_meal 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:calcite" } },
        result: { item: "minecraft:bone_meal" },
        energy_cost: 4000,
    });

    // 添加 minecraft:lime_dye 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "botania:lime_petal" } },
        result: { item: "minecraft:lime_dye" },
        energy_cost: 4000,
    });

    // 添加 minecraft:green_dye 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "botania:green_petal" } },
        result: { item: "minecraft:green_dye" },
        energy_cost: 4000,
    });

    // 添加 minecraft:black_dye 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "botania:black_petal" } },
        result: { item: "minecraft:black_dye" },
        energy_cost: 4000,
    });
});
