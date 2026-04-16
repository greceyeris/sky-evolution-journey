ServerEvents.recipes((event) => {
    // 添加配方
    // ae2cs:crystal_pulverizer_recipe_serializer
    // 添加 gtceu:quartz_sand_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:sand" } },
        result: { item: "gtceu:quartz_sand_dust" },
        energy_cost: 4000,
    });

    // 添加 gtceu:flint_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:flint" } },
        result: { item: "gtceu:flint_dust" },
        energy_cost: 4000,
    });

    // 添加 gtceu:crushed_copper_ore 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:raw_copper" } },
        result: { item: "gtceu:crushed_copper_ore" },
        energy_cost: 8000,
    });

    // 添加 gtceu:pure_copper_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "gtceu:purified_copper_ore" } },
        result: { item: "gtceu:pure_copper_dust" },
        energy_cost: 12000,
    });

    // 添加 gtceu:wheat_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:wheat" } },
        result: { item: "gtceu:wheat_dust" },
        energy_cost: 4000,
    });
});
