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

    // 添加 gtceu:wheat_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:wheat" } },
        result: { item: "gtceu:wheat_dust" },
        energy_cost: 4000,
    });

    // 添加 gtceu:andesite_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:andesite" } },
        result: { item: "gtceu:andesite_dust" },
        energy_cost: 4000,
    });

    // 添加 gtceu:netherrack_dust 的配方
    event.custom({
        type: "ae2cs:crystal_pulverizer_recipe_serializer",
        input: { ingredient: { item: "minecraft:netherrack" } },
        result: { item: "gtceu:netherrack_dust" },
        energy_cost: 4000,
    });
});
