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
                            // removeAllTagsFrom
                            event.removeAllTagsFrom(String(item));
                        }
                    }
                });
        } else {
            if (!obj.notHidden) {
                // add
                event.add("c:hidden_from_recipe_viewers", obj.item);
            } else {
                // removeAllTagsFrom
                event.removeAllTagsFrom(obj.item);
            }
        }
    });
});
