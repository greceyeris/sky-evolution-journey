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
            output: "minecraft:flint",
            inputs: [
                "kubejs:mossy_flint_shard",
                "kubejs:mossy_flint_shard",
                "kubejs:mossy_flint_shard",
            ],
        },
        {
            output: "9x minecraft:lapis_lazuli",
            inputs: ["minecraft:lapis_block"],
        },
        {
            output: "minecraft:mossy_cobblestone",
            inputs: ["minecraft:cobblestone", "minecraft:vine"],
        },
        {
            output: "minecraft:light_gray_wool",
            inputs: ["minecraft:white_wool", "minecraft:light_gray_dye"],
        },
        {
            output: "minecraft:gray_wool",
            inputs: ["minecraft:white_wool", "minecraft:gray_dye"],
        },
        {
            output: "minecraft:yellow_wool",
            inputs: ["minecraft:white_wool", "minecraft:yellow_dye"],
        },
        {
            output: "minecraft:lime_wool",
            inputs: ["minecraft:white_wool", "minecraft:lime_dye"],
        },
        {
            output: "minecraft:blue_wool",
            inputs: ["minecraft:white_wool", "minecraft:blue_dye"],
        },
        {
            output: "minecraft:light_blue_wool",
            inputs: ["minecraft:white_wool", "minecraft:light_blue_dye"],
        },
        {
            output: "minecraft:cyan_wool",
            inputs: ["minecraft:white_wool", "minecraft:cyan_dye"],
        },
        {
            output: "minecraft:purple_wool",
            inputs: ["minecraft:white_wool", "minecraft:purple_dye"],
        },
        {
            output: "minecraft:magenta_wool",
            inputs: ["minecraft:white_wool", "minecraft:magenta_dye"],
        },
        {
            output: "minecraft:pink_wool",
            inputs: ["minecraft:white_wool", "minecraft:pink_dye"],
        },
        {
            output: "minecraft:brown_wool",
            inputs: ["minecraft:white_wool", "minecraft:brown_dye"],
        },
    ];

    // 添加配方
    // shapeless
    // addRecipesUsedShapeless
    addRecipesUsedShapeless.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
