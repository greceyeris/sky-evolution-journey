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

    // simpleprocessingmachines
    "simpleprocessingmachines:centrifugal_separator",
    "simpleprocessingmachines:auto_crafting_station",
    "simpleprocessingmachines:sawdust",
    "simpleprocessingmachines:mineral_processing_station",

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

// 定义 hideObjectsUsedBlacklist 数组
const hideObjectsUsedBlacklist = [
    {
        name: "@opolisutilities",
        blacklist: [
            "opolisutilities:leafy_string",
            "opolisutilities:mini_charcoal",
            "opolisutilities:drying_table",
        ],
    },
    {
        name: "@botanypots",
        blacklist: [
            "botanypots:terracotta_botany_pot",
            "botanypots:terracotta_hopper_botany_pot",
        ],
    },
    {
        name: "@botanypotstiers",
        blacklist: [
            "botanypotstiers:elite_terracotta_botany_pot",
            "botanypotstiers:elite_terracotta_hopper_botany_pot",
            "botanypotstiers:ultra_terracotta_botany_pot",
            "botanypotstiers:ultra_terracotta_hopper_botany_pot",
            "botanypotstiers:creative_terracotta_botany_pot",
            "botanypotstiers:creative_terracotta_hopper_botany_pot",
        ],
    },
];

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

    // hideObjectsUsedBlacklist
    hideObjectsUsedBlacklist.forEach((object) => {
        if (object.name.startsWith("@")) {
            Ingredient.of(object.name)
                .getItemIds()
                .forEach((objectId) => {
                    if (!object.blacklist.includes(objectId)) {
                        event.add("c:hidden_from_recipe_viewers", objectId);
                    }
                });
        }
    });
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

    // hideObjectsUsedBlacklist
    hideObjectsUsedBlacklist.forEach((object) => {
        if (object.name.startsWith("@")) {
            Ingredient.of(object.name)
                .getItemIds()
                .forEach((objectId) => {
                    if (!object.blacklist.includes(objectId)) {
                        event.add("c:hidden_from_recipe_viewers", objectId);
                    }
                });
        }
    });
});
