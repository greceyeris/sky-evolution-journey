ServerEvents.recipes((event) => {
    // 添加配方
    // farmersdelight:cutting
    // 添加 create:basin 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "gtceu:andesite_alloy_block" }],
        result: [{ item: "create:basin" }],
        tool: { tag: "minecraft:pickaxes" },
    });

    // 添加 create:chute 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:basin" }],
        result: [{ item: "create:chute" }],
        tool: { tag: "minecraft:pickaxes" },
    });

    // 添加 create:cogwheel 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:shaft" }],
        result: [{ item: "create:cogwheel" }],
        tool: { item: "create_hc:gear_small" },
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create_hc:gear_small" }],
        result: [{ item: "create:cogwheel" }],
        tool: { item: "create:shaft" },
    });

    // 添加 create:large_cogwheel 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:shaft" }],
        result: [{ item: "create:large_cogwheel" }],
        tool: { item: "create_hc:gear_large" },
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create_hc:gear_large" }],
        result: [{ item: "create:large_cogwheel" }],
        tool: { item: "create:shaft" },
    });

    // 添加 create:mechanical_saw 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:gearbox" }],
        result: [{ item: "create:mechanical_saw" }],
        tool: { item: "create_hc:saw_blade" },
    });

    // 添加 create:millstone 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "forge:stone" }],
        result: [{ item: "create:millstone" }],
        tool: { item: "create:gearbox" },
    });

    // 添加 create:spout 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:fluid_tank" }],
        result: [{ item: "create:spout" }],
        tool: { item: "create:copper_valve_handle" },
    });

    // 添加 create:fluid_tank 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:copper_casing" }],
        result: [{ item: "create:fluid_tank" }],
        tool: { tag: "forge:glass_panes" },
    });

    // 添加 create:gearbox 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:andesite_casing" }],
        result: [{ item: "create:gearbox" }],
        tool: { item: "create_hc:gear_small" },
    });

    // 添加 create:fluid_pipe 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:chute" }],
        result: [{ item: "create:fluid_pipe" }],
        tool: { item: "gtceu:copper_plate" },
    });

    // 添加 create:mechanical_pump 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:fluid_pipe" }],
        result: [{ item: "create:mechanical_pump" }],
        tool: { item: "create_hc:gear_small" },
    });

    // 添加 create:shaft 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create_hc:shaft" }],
        result: [{ item: "create:shaft" }],
        tool: { item: "gtceu:andesite_alloy_ingot" },
    });

    // 添加 create:mechanical_press 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:gearbox" }],
        result: [{ item: "create:mechanical_press" }],
        tool: { item: "create_hc:press_head" },
    });

    // 添加 create:depot 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:andesite_casing" }],
        result: [{ item: "create:depot" }],
        tool: { item: "create:turntable" },
    });

    // 添加 create:turntable 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ tag: "minecraft:wooden_slabs" }],
        result: [{ item: "create:turntable" }],
        tool: { item: "gtceu:andesite_alloy_ingot" },
    });

    // 添加 create:encased_fan 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:gearshift" }],
        result: [{ item: "create:encased_fan" }],
        tool: { item: "create:propeller" },
    });

    // 添加 create:gearshift 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:clutch" }],
        result: [{ item: "create:gearshift" }],
        tool: { item: "create_hc:gear_small" },
    });

    // 添加 create:clutch 的配方
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: "create:gearbox" }],
        result: [{ item: "create:clutch" }],
        tool: { item: "minecraft:redstone_torch" },
    });
});
