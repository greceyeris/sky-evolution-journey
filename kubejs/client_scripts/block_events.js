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
});
