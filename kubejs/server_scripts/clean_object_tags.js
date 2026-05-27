// priority: -999

ServerEvents.tags("item", (event) => {
    // c:hidden_from_recipe_viewers
    event
        .get("c:hidden_from_recipe_viewers")
        .getObjectIds()
        .forEach((item) => {
            if (
                !event.get("kubejs:reserve_tags").getObjectIds().contains(item)
            ) {
                // removeAllTagsFrom
                event.removeAllTagsFrom(String(item));
            }

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
            if (
                !event.get("kubejs:reserve_tags").getObjectIds().contains(fluid)
            ) {
                // removeAllTagsFrom
                event.removeAllTagsFrom(String(fluid));
            }

            // add
            event.add("c:hidden_from_recipe_viewers", String(fluid));
        });
});

ServerEvents.tags("block", (event) => {
    // c:hidden_from_recipe_viewers
    event
        .get("c:hidden_from_recipe_viewers")
        .getObjectIds()
        .forEach((block) => {
            if (
                !event.get("kubejs:reserve_tags").getObjectIds().contains(block)
            ) {
                // removeAllTagsFrom
                event.removeAllTagsFrom(String(block));
            }

            // add
            event.add("c:hidden_from_recipe_viewers", String(block));
        });
});
