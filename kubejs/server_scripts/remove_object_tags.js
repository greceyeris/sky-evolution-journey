// priority: -997

// 定义 removeItemTags 数组
const removeItemTags = [
    { item: "minecraft:wheat", tag: ["#forge:grain/wheat"] },
    { item: "minecraft:nether_star", tag: ["#vintage:curving_heads"] },
    { item: "minecraft:heart_of_the_sea", tag: ["#vintage:curving_heads"] },
    { item: "silentgear:dagger", tag: ["#forge:tools/knives"] },
    {
        item: "#forge:tools/drills",
        tag: ["#minecraft:pickaxes", "#minecraft:hoes", "#minecraft:shovels"],
    },
    {
        item: "ae2:charged_certus_quartz_crystal",
        tag: ["#forge:gems/certus_quartz"],
    },
    {
        item: "ae2cs:purified_certus_quartz_crystal",
        tag: ["#forge:gems/certus_quartz"],
    },
    { item: "silentgear:saw", tag: ["#forge:axes"] },
];

// 定义 removeBlockTags 数组
const removeBlockTags = [].concat(removeItemTags);

ServerEvents.tags("item", (event) => {
    // removeItemTags
    removeItemTags.forEach((obj) => {
        if (obj.tag.length === 0) {
            if (obj.item.startsWith("#")) {
                event
                    .get(obj.item.slice(1))
                    .getObjectIds()
                    .forEach((item) => {
                        // removeAllTagsFrom
                        event.removeAllTagsFrom(String(item));

                        // add
                        event.add(obj.item.slice(1), String(item));
                    });
            } else {
                // removeAllTagsFrom
                event.removeAllTagsFrom(obj.item);
            }

            return;
        }

        obj.tag.forEach((tag) => {
            if (obj.item.startsWith("#")) {
                event
                    .get(obj.item.slice(1))
                    .getObjectIds()
                    .forEach((item) => {
                        // remove
                        event.remove(tag.slice(1), String(item));
                    });
            } else {
                // remove
                event.remove(tag.slice(1), obj.item);
            }
        });
    });
});

ServerEvents.tags("block", (event) => {
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
});
