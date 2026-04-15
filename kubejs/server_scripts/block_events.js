BlockEvents.rightClicked((event) => {
    // 定义 cancelRightClicked 数组
    const cancelRightClicked = [
        {
            item: "#minecraft:axes",
            block: "#minecraft:logs",
        },
        {
            item: "botania:living_root",
            block: "minecraft:grass_block",
        },
        {
            item: "botania:fertilizer",
            block: "#minecraft:dirt",
        },
        {
            item: "botania:fertilizer",
            block: "#botania:mystical_flowers",
        },
        {
            item: "minecraft:bone_meal",
            block: "#botania:mystical_flowers",
        },
        {
            item: "botania:living_root",
            block: "minecraft:moss_block",
        },
    ];

    const { player, block, mainHand, offHand } = event;
    const mainHandItem = player.getMainHandItem();
    const offHandItem = player.getOffHandItem();

    let itemIsTag, blockIsTag;

    cancelRightClicked.forEach((obj) => {
        let itemMatch, blockMatch;

        if (obj.item.includes("#")) {
            itemIsTag = true;
        } else {
            itemIsTag = false;
        }

        if (obj.block.includes("#")) {
            blockIsTag = true;
        } else {
            blockIsTag = false;
        }

        if (itemIsTag) {
            itemMatch =
                mainHandItem.hasTag(obj.item.replace("#", "")) ||
                offHandItem.hasTag(obj.item.replace("#", ""));
        } else {
            itemMatch =
                mainHandItem.getId() === obj.item ||
                offHandItem.getId() === obj.item;
        }

        if (blockIsTag) {
            blockMatch = block.hasTag(obj.block.replace("#", ""));
        } else {
            blockMatch = block.getId() === obj.block;
        }

        if (itemMatch && blockMatch) {
            event.cancel();
        }
    });

    if (block.getId() === "farmersplus:millstone") {
        if (block.entityData.Inventory.Items.length > 0) {
            if (player.foodData.foodLevel > 0) {
                player.foodData.addExhaustion(0.375);
            } else {
                player.setStatusMessage(
                    Component.red("饱食度不足，请补充饱食度！"),
                );

                event.cancel();
            }
        }
    }
});
