// priority: -999

ServerEvents.tags("item", (event) => {
    // 定义 removeItemTags 数组
    const removeItemTags = [
        { item: "minecraft:wheat", tag: ["#forge:grain/wheat"] },
    ];

    // removeItemTags
    removeItemTags.forEach((obj) => {
        if (obj.tag.length === 0) {
            // removeAllTagsFrom
            event.removeAllTagsFrom(obj.item);

            return;
        }

        obj.tag.forEach((tag) => {
            // remove
            event.remove(tag.slice(1), obj.item);
        });
    });

    // c:hidden_from_recipe_viewers
    event
        .get("c:hidden_from_recipe_viewers")
        .getObjectIds()
        .forEach((item) => {
            // removeAllTagsFrom
            event.removeAllTagsFrom(String(item));

            // add
            event.add("c:hidden_from_recipe_viewers", String(item));
        });
});

ServerEvents.tags("fluid", (event) => {
    // c:hidden_from_recipe_viewers
    event
        .get("c:hidden_from_recipe_viewers")
        .getObjectIds()
        .forEach((fluid) => {
            // removeAllTagsFrom
            event.removeAllTagsFrom(String(fluid));

            // add
            event.add("c:hidden_from_recipe_viewers", String(fluid));
        });
});

ServerEvents.tags("block", (event) => {
    // 定义 removeBlockTags 数组
    const removeBlockTags = [];

    // removeBlockTags
    removeBlockTags.forEach((obj) => {
        if (obj.tag.length === 0) {
            // removeAllTagsFrom
            event.removeAllTagsFrom(obj.block);

            return;
        }

        obj.tag.forEach((tag) => {
            // remove
            event.remove(tag.slice(1), obj.block);
        });
    });

    // c:hidden_from_recipe_viewers
    event
        .get("c:hidden_from_recipe_viewers")
        .getObjectIds()
        .forEach((block) => {
            // removeAllTagsFrom
            event.removeAllTagsFrom(String(block));

            // add
            event.add("c:hidden_from_recipe_viewers", String(block));
        });
});
