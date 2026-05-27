ServerEvents.recipes((event) => {
    // 定义 addRecipesUsedShapeless 数组
    const addRecipesUsedShapeless = [
        {
            output: "minecraft:string",
            inputs: [
                "opolisutilities:leafy_string",
                "opolisutilities:leafy_string",
                "opolisutilities:leafy_string",
            ],
        },
        {
            output: "9x minecraft:redstone",
            inputs: ["minecraft:redstone_block"],
        },
        {
            output: "9x minecraft:bone_meal",
            inputs: ["minecraft:bone_block"],
        },
        {
            output: "9x minecraft:coal",
            inputs: ["minecraft:coal_block"],
        },
        {
            output: "minecraft:red_wool",
            inputs: ["minecraft:white_wool", "minecraft:red_dye"],
        },
        {
            output: "minecraft:flint",
            inputs: [
                "kubejs:mossy_flint_shard",
                "kubejs:mossy_flint_shard",
                "kubejs:mossy_flint_shard",
            ],
        },
        {
            output: "minecraft:green_wool",
            inputs: ["minecraft:white_wool", "minecraft:green_dye"],
        },
        {
            output: "minecraft:black_wool",
            inputs: ["minecraft:white_wool", "minecraft:black_dye"],
        },
        {
            output: "minecraft:orange_wool",
            inputs: ["minecraft:white_wool", "minecraft:orange_dye"],
        },
        {
            output: "9x minecraft:lapis_lazuli",
            inputs: ["minecraft:lapis_block"],
        },
        {
            output: "minecraft:mossy_cobblestone",
            inputs: ["minecraft:cobblestone", "minecraft:vine"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
