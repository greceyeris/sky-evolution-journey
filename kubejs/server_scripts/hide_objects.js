// 定义 hideItems 数组
const hideItems = [
    // strainers
    "strainers:leafy_mesh",
    "strainers:bamboo_mesh",
    "strainers:string_mesh",
    "strainers:amethyst_mesh",
    "strainers:gold_mesh",
    "strainers:echo_mesh",
    "strainers:emerald_mesh",

    // forge
    "#forge:ores_in_ground/granite",
    "#forge:ores_in_ground/diorite",
    "#forge:ores_in_ground/andesite",
    "#forge:ores_in_ground/red_granite",
    "#forge:ores_in_ground/marble",
    "#forge:ores_in_ground/tuff",
    "#forge:ores_in_ground/sand",
    "#forge:ores_in_ground/red_sand",
    "#forge:ores_in_ground/gravel",
    "#forge:ores_in_ground/basalt",
    "#forge:ores_in_ground/blackstone",
    "#forge:ores_in_ground/soul_soil",
    "#forge:ores_in_ground/moon_stone",
    "#forge:ores_in_ground/venus_stone",
    "#forge:ores_in_ground/mars_stone",
    "#forge:ores_in_ground/mercury_stone",
    "#forge:ores_in_ground/glacio_stone",
];

// 定义 hideFluids 数组
const hideFluids = [];

// 定义 hideBlocks 数组
const hideBlocks = [].concat(hideItems);

ServerEvents.tags("item", (event) => {
    // hideItems
    hideItems.forEach((item) => {
        if (item.startsWith("#")) {
            event
                .get(item.slice(1))
                .getObjectIds()
                .forEach((itemId) => {
                    // add
                    event.add("c:hidden_from_recipe_viewers", String(itemId));
                });
        } else {
            // add
            event.add("c:hidden_from_recipe_viewers", item);
        }
    });

    // @opolisutilities
    Ingredient.of("@opolisutilities")
        .getItemIds()
        .forEach((item) => {
            if (
                ![
                    "opolisutilities:leafy_string",
                    "opolisutilities:mini_charcoal",
                ].includes(item)
            ) {
                event.add("c:hidden_from_recipe_viewers", item);
            }
        });

    // @botanypots
    Ingredient.of("@botanypots")
        .getItemIds()
        .forEach((item) => {
            if (
                ![
                    "botanypots:terracotta_botany_pot",
                    "botanypots:terracotta_hopper_botany_pot",
                ].includes(item)
            ) {
                event.add("c:hidden_from_recipe_viewers", item);
            }
        });

    // @botanypotstiers
    Ingredient.of("@botanypotstiers")
        .getItemIds()
        .forEach((item) => {
            if (
                ![
                    "botanypotstiers:elite_terracotta_botany_pot",
                    "botanypotstiers:elite_terracotta_hopper_botany_pot",
                    "botanypotstiers:ultra_terracotta_botany_pot",
                    "botanypotstiers:ultra_terracotta_hopper_botany_pot",
                    "botanypotstiers:creative_terracotta_botany_pot",
                    "botanypotstiers:creative_terracotta_hopper_botany_pot",
                ].includes(item)
            ) {
                event.add("c:hidden_from_recipe_viewers", item);
            }
        });

    // // @rechiseled
    // Ingredient.of("@rechiseled").getItemIds().forEach((item) => {
    //     if (item !== "rechiseled:chisel" && !item.includes("connecting")) {
    //         // add
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });

    // // @rechiseledcreate
    // Ingredient.of("@rechiseledcreate").getItemIds().forEach((item) => {
    //     if (!item.includes("connecting")) {
    //         // add
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });

    // // @rechiseledae2
    // Ingredient.of("@rechiseledae2").getItemIds().forEach((item) => {
    //     if (!item.includes("connecting")) {
    //         // add
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });
});

ServerEvents.tags("fluid", (event) => {
    // hideFluids
    hideFluids.forEach((fluid) => {
        if (fluid.startsWith("#")) {
            event
                .get(fluid.slice(1))
                .getObjectIds()
                .forEach((fluidId) => {
                    // add
                    event.add("c:hidden_from_recipe_viewers", String(fluidId));
                });
        } else {
            // add
            event.add("c:hidden_from_recipe_viewers", fluid);
        }
    });
});

ServerEvents.tags("block", (event) => {
    // hideBlocks
    hideBlocks.forEach((block) => {
        if (block.startsWith("#")) {
            event
                .get(block.slice(1))
                .getObjectIds()
                .forEach((blockId) => {
                    // add
                    event.add("c:hidden_from_recipe_viewers", String(blockId));
                });
        } else {
            // add
            event.add("c:hidden_from_recipe_viewers", block);
        }
    });

    // @opolisutilities
    Ingredient.of("@opolisutilities")
        .getItemIds()
        .forEach((block) => {
            if (
                ![
                    "opolisutilities:leafy_string",
                    "opolisutilities:mini_charcoal",
                ].includes(block)
            ) {
                event.add("c:hidden_from_recipe_viewers", block);
            }
        });

    // @botanypots
    Ingredient.of("@botanypots")
        .getItemIds()
        .forEach((block) => {
            if (
                ![
                    "botanypots:terracotta_botany_pot",
                    "botanypots:terracotta_hopper_botany_pot",
                ].includes(block)
            ) {
                event.add("c:hidden_from_recipe_viewers", block);
            }
        });

    // @botanypotstiers
    Ingredient.of("@botanypotstiers")
        .getItemIds()
        .forEach((block) => {
            if (
                ![
                    "botanypotstiers:elite_terracotta_botany_pot",
                    "botanypotstiers:elite_terracotta_hopper_botany_pot",
                    "botanypotstiers:ultra_terracotta_botany_pot",
                    "botanypotstiers:ultra_terracotta_hopper_botany_pot",
                    "botanypotstiers:creative_terracotta_botany_pot",
                    "botanypotstiers:creative_terracotta_hopper_botany_pot",
                ].includes(block)
            ) {
                event.add("c:hidden_from_recipe_viewers", block);
            }
        });
});

// ServerEvents.highPriorityData((event) => {
//     // 隐藏配方分类
//     event.addJson("assets/emi/recipe/filters/hide_recipe_categories.json", {
//         filters: [
//             {
//                 id: "createmetallurgy:polishing_with_grinder",
//             },
//             {
//                 id: "vintage:grinder_sandpaper_polishing",
//             },
//         ],
//     });
// });
