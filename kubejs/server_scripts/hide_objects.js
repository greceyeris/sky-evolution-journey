// 定义 hideItems 数组
const hideItems = [
    "strainers:leafy_mesh",
    "strainers:bamboo_mesh",
    "strainers:string_mesh",
    "strainers:amethyst_mesh",
    "strainers:gold_mesh",
    "strainers:echo_mesh",
    "strainers:emerald_mesh",
];

// 定义 hideFluids 数组
const hideFluids = [];

// 定义 hideBlocks 数组
const hideBlocks = [];

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
    Ingredient.of("@opolisutilities").itemIds.forEach((item) => {
        if (
            ![
                "opolisutilities:leafy_string",
                "opolisutilities:mini_charcoal",
            ].includes(item)
        ) {
            event.add("c:hidden_from_recipe_viewers", item);
        }
    });

    // // @botanypots
    // Ingredient.of("@botanypots").itemIds.forEach((item) => {
    //     if (
    //         ![
    //             "botanypots:terracotta_botany_pot",
    //             "botanypots:terracotta_hopper_botany_pot",
    //         ].includes(item)
    //     ) {
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });

    // // @botanypotstiers
    // Ingredient.of("@botanypotstiers").itemIds.forEach((item) => {
    //     if (
    //         ![
    //             "botanypotstiers:elite_terracotta_botany_pot",
    //             "botanypotstiers:elite_terracotta_hopper_botany_pot",
    //             "botanypotstiers:ultra_terracotta_botany_pot",
    //             "botanypotstiers:ultra_terracotta_hopper_botany_pot",
    //             "botanypotstiers:creative_terracotta_botany_pot",
    //             "botanypotstiers:creative_terracotta_hopper_botany_pot",
    //         ].includes(item)
    //     ) {
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });

    // // @rechiseled
    // Ingredient.of("@rechiseled").itemIds.forEach((item) => {
    //     if (item !== "rechiseled:chisel" && !item.includes("connecting")) {
    //         // add
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });

    // // @rechiseledcreate
    // Ingredient.of("@rechiseledcreate").itemIds.forEach((item) => {
    //     if (!item.includes("connecting")) {
    //         // add
    //         event.add("c:hidden_from_recipe_viewers", item);
    //     }
    // });

    // // @rechiseledae2
    // Ingredient.of("@rechiseledae2").itemIds.forEach((item) => {
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
