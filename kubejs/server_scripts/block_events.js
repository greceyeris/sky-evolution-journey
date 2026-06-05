// 定义 rightClicked 数组
const rightClicked = [
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
        whiteList: ["#minecraft:saplings", "#minecraft:crops"],
    },
    {
        item: "minecraft:bone_meal",
        whiteList: ["#minecraft:saplings", "#minecraft:crops"],
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

    rightClicked.forEach((obj) => {
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
