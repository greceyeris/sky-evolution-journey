// 定义 addBlueprintsToCreativeTab 数组
const addBlueprintsToCreativeTab = [
    {
        name: "kubejs_blueprints",
        icon: "portable_blueprints:worn_blueprint",
        items: [
            // compactcrafting
            "compactcrafting_miniaturization_3x3x3",
            "compactcrafting_miniaturization_5x5x5",
            "compactcrafting_miniaturization_7x7x7",
            "compactcrafting_miniaturization_9x9x9",

            // hauntfurnace
            "hauntfurnace_haunt_furnace",

            // minecraft
            "minecraft_chicken_spawn_egg",
            "minecraft_cow_spawn_egg",
            "minecraft_creeper_spawn_egg",
            "minecraft_furnace",
            "minecraft_spider_spawn_egg",
        ],
    },
];

StartupEvents.registry("creative_mode_tab", (event) => {
    // addBlueprintsToCreativeTab
    addBlueprintsToCreativeTab.forEach((tab) => {
        event
            .create(tab.name)
            .icon(() => tab.icon)
            .content(() =>
                tab.items.map((blueprintName) =>
                    Item.of(
                        "portable_blueprints:worn_blueprint",
                        `{blueprint_name:"${blueprintName}",nome:"${blueprintName}",owner_name:"Sky Evolution Journey",remaining_uses:2147483647,display:{Name:'{"translate":"item.kubejs.blueprint.${blueprintName}","italic":false}'}}`,
                    ),
                ),
            );
    });
});
