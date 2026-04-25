// priority: -998

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
    {
        item: "#forge:dusts/certus_quartz",
        targetItem: "gtceu:certus_quartz_dust",
    },
    {
        item: "#forge:dusts/certus_quartz",
        targetItem: "gtceu:certus_quartz_dust",
    },
    {
        item: "ae2cs:certus_quartz_ore",
        targetItem: "gtceu:certus_quartz_ore",
    },
    {
        item: "ae2cs:charged_certus_quartz_ore",
        targetItem: "gtceu:certus_quartz_ore",
    },
    {
        item: "ae2cs:deepslate_certus_quartz_ore",
        targetItem: "gtceu:deepslate_certus_quartz_ore",
    },
    {
        item: "ae2cs:deepslate_charged_certus_quartz_ore",
        targetItem: "gtceu:deepslate_certus_quartz_ore",
    },
    {
        item: "#forge:storage_blocks/certus_quartz",
        targetItem: "gtceu:certus_quartz_block",
    },
    {
        item: "#forge:gems/certus_quartz",
        targetItem: "gtceu:certus_quartz_gem",
    },
    {
        item: "#forge:plates/iron",
        targetItem: "gtceu:iron_plate",
    },
    {
        item: "#forge:rods/iron",
        targetItem: "gtceu:iron_rod",
    },
    {
        item: "#forge:gears/iron",
        targetItem: "gtceu:iron_gear",
    },
    {
        item: "#forge:dusts/iron",
        targetItem: "gtceu:iron_dust",
    },
    {
        item: "create:andesite_alloy",
        targetItem: "gtceu:andesite_alloy_ingot",
    },
    {
        item: "#forge:storage_blocks/andesite_alloy",
        targetItem: "gtceu:andesite_alloy_block",
    },
    {
        item: "#forge:slag",
        targetItem: "immersiveengineering:slag",
    },
    {
        item: "createmetallurgy:slag",
        targetItem: "immersiveengineering:slag",
    },
    {
        item: "#forge:storage_blocks/coal_coke",
        targetItem: "immersiveengineering:coke",
    },
    {
        item: "#forge:storage_blocks/charcoal",
        targetItem: "gtceu:charcoal_block",
    },
    {
        item: "#forge:coal_coke",
        targetItem: "immersiveengineering:coal_coke",
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
