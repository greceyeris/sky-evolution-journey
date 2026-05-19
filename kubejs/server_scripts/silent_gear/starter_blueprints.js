// 定义 starterBlueprints 数组
const starterBlueprints = [
    "silentgear:rod_blueprint",
    "silentgear:knife_blueprint",
    "silentgear:axe_blueprint",
    "silentgear:paxel_blueprint",
    "silentgear:shears_blueprint",
    "silentgear:hoe_blueprint",
    "silentgear:saw_blueprint",
    "silentgear:shovel_blueprint",
    "silentgear:pickaxe_blueprint",
    "silentgear:hammer_blueprint",
];

ServerEvents.highPriorityData((event) => {
    // addJson
    event.addJson("silentgear:loot_tables/starter_blueprints", {
        type: "minecraft:gift",
        pools: starterBlueprints.map((item) => ({
            rolls: 1,
            entries: [
                {
                    type: "minecraft:item",
                    name: item,
                },
            ],
        })),
    });
});
