// 定义 cancelRightClicked 数组
const cancelRightClicked = [
    {
        item: "#forge:tools/axes",
        blackList: ["#minecraft:logs"],
    },
    {
        item: "#forge:tools/paxels",
        blackList: ["#minecraft:logs"],
    },
    {
        item: "botania:living_root",
        blackList: ["minecraft:grass_block", "minecraft:moss_block"],
    },
    {
        item: "minecraft:bone_meal",
        blackList: ["#botania:mystical_flowers"],
    },
    {
        item: "botania:fertilizer",
        whiteList: [],
    },
];

BlockEvents.rightClicked((event) => {
    const { player, block } = event;
    const mainHandItem = player.getMainHandItem();
    const offHandItem = player.getOffHandItem();

    cancelRightClicked.forEach((obj) => {
        let itemMatch = false;
        let blackMatch = false;

        if (obj.item.startsWith("#")) {
            itemMatch =
                mainHandItem.hasTag(obj.item.slice(1)) ||
                offHandItem.hasTag(obj.item.slice(1));
        } else {
            itemMatch =
                mainHandItem.id === obj.item || offHandItem.id === obj.item;
        }

        if (!itemMatch) {
            return;
        }

        // blackList
        if (obj.blackList) {
            obj.blackList.forEach((targetBlock) => {
                if (targetBlock.startsWith("#")) {
                    if (block.hasTag(targetBlock.slice(1))) {
                        blackMatch = true;
                    }
                } else {
                    if (block.id === targetBlock) {
                        blackMatch = true;
                    }
                }
            });

            if (blackMatch) {
                event.cancel();
            }
        }

        // whiteList
        if (obj.whiteList) {
            let whiteMatch = false;

            obj.whiteList.forEach((targetBlock) => {
                if (targetBlock.startsWith("#")) {
                    if (block.hasTag(targetBlock.slice(1))) {
                        whiteMatch = true;
                    }
                } else {
                    if (block.id === targetBlock) {
                        whiteMatch = true;
                    }
                }
            });

            if (!whiteMatch) {
                event.cancel();
            }
        }
    });
});
