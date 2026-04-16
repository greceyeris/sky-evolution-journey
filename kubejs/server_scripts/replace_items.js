// 定义 replaceItems 数组
const replaceItems = [
    {
        item: "farmersdelight:flint_knife",
        targetItem: "gtceu:flint_knife",
    },
    {
        item: "farmersdelight:iron_knife",
        targetItem: "gtceu:iron_knife",
    },
    {
        item: "minecraft:copper_ore",
        targetItem: "gtceu:copper_ore",
    },
    {
        item: "minecraft:deepslate_copper_ore",
        targetItem: "gtceu:deepslate_copper_ore",
    },
    {
        item: "minecraft:coal_ore",
        targetItem: "gtceu:coal_ore",
    },
    {
        item: "minecraft:deepslate_coal_ore",
        targetItem: "gtceu:deepslate_coal_ore",
    },
    {
        item: "minecraft:iron_ore",
        targetItem: "gtceu:iron_ore",
    },
    {
        item: "minecraft:deepslate_iron_ore",
        targetItem: "gtceu:deepslate_iron_ore",
    },
    {
        item: "minecraft:gold_ore",
        targetItem: "gtceu:gold_ore",
    },
    {
        item: "minecraft:deepslate_gold_ore",
        targetItem: "gtceu:deepslate_gold_ore",
    },
    {
        item: "minecraft:redstone_ore",
        targetItem: "gtceu:redstone_ore",
    },
    {
        item: "minecraft:deepslate_redstone_ore",
        targetItem: "gtceu:deepslate_redstone_ore",
    },
    {
        item: "minecraft:emerald_ore",
        targetItem: "gtceu:emerald_ore",
    },
    {
        item: "minecraft:deepslate_emerald_ore",
        targetItem: "gtceu:deepslate_emerald_ore",
    },
    {
        item: "minecraft:lapis_ore",
        targetItem: "gtceu:lapis_ore",
    },
    {
        item: "minecraft:deepslate_lapis_ore",
        targetItem: "gtceu:deepslate_lapis_ore",
    },
    {
        item: "minecraft:diamond_ore",
        targetItem: "gtceu:diamond_ore",
    },
    {
        item: "minecraft:deepslate_diamond_ore",
        targetItem: "gtceu:deepslate_diamond_ore",
    },
    {
        item: "minecraft:nether_gold_ore",
        targetItem: "gtceu:netherrack_gold_ore",
    },
    {
        item: "minecraft:nether_quartz_ore",
        targetItem: "gtceu:netherrack_quartzite_ore",
    },
    {
        item: "#forge:nuggets/copper",
        targetItem: "gtceu:copper_nugget",
    },
    {
        item: "#forge:dusts/copper",
        targetItem: "gtceu:copper_dust",
    },
    {
        item: "#forge:dough/wheat",
        targetItem: "gtceu:dough",
    },
    {
        item: "#forge:crushed_ores/copper",
        targetItem: "gtceu:crushed_copper_ore",
    },
];

ServerEvents.recipes((event) => {
    // replaceItems
    replaceItems.forEach((obj) => {
        if (obj.item.startsWith("#")) {
            Ingredient.of(obj.item)
                .getItemIds()
                .filter((item) => ![obj.targetItem].includes(item))
                .forEach((item) => {
                    // replaceInput
                    event.replaceInput({}, item, obj.targetItem);

                    // replaceOutput
                    event.replaceOutput({}, item, obj.targetItem);
                });

            // replaceInput
            event.replaceInput({}, obj.item, obj.targetItem);

            // replaceOutput
            event.replaceOutput({}, obj.item, obj.targetItem);
        } else {
            // replaceInput
            event.replaceInput({}, obj.item, obj.targetItem);

            // replaceOutput
            event.replaceOutput({}, obj.item, obj.targetItem);
        }
    });
});

ServerEvents.tags("item", (event) => {
    // replaceItems
    replaceItems.forEach((obj) => {
        if (obj.item.startsWith("#")) {
            event
                .get(obj.item.slice(1))
                .getObjectIds()
                .forEach((item) => {
                    if (String(item) !== obj.targetItem) {
                        if (!obj.notHidden) {
                            // add
                            event.add(
                                "c:hidden_from_recipe_viewers",
                                String(item),
                            );
                        } else {
                            if (!obj.notRemoveAllTags) {
                                // removeAllTagsFrom
                                event.removeAllTagsFrom(String(item));
                            }
                        }
                    }
                });
        } else {
            if (!obj.notHidden) {
                // add
                event.add("c:hidden_from_recipe_viewers", obj.item);
            } else {
                if (!obj.notRemoveAllTags) {
                    // removeAllTagsFrom
                    event.removeAllTagsFrom(String(item));
                }
            }
        }
    });
});
