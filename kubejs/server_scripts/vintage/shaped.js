ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 vintage:spring_coiling_machine_wheel 的配方
    event.shaped(
        "vintage:spring_coiling_machine_wheel",
        [" A ", "ABA", " A "],
        {
            A: "gtceu:andesite_alloy_ingot",
            B: "gtceu:andesite_alloy_block",
        },
    );

    // 添加 vintage:spring_coiling_machine 的配方
    event.shaped("vintage:spring_coiling_machine", ["A  ", "BCD", "A  "], {
        A: "gtceu:andesite_alloy_ingot",
        B: "vintage:spring_coiling_machine_wheel",
        C: "create:andesite_casing",
        D: "create:shaft",
    });

    // 添加 vintage:centrifuge 的配方
    event.shaped("vintage:centrifuge", ["A A", "BCB", "ADA"], {
        A: "vintage:andesite_spring",
        B: "#minecraft:logs",
        C: "create:shaft",
        D: "create:andesite_casing",
    });

    // 添加 vintage:vacuum_chamber 的配方
    event.shaped("vintage:vacuum_chamber", ["ABA", "CDC"], {
        A: "vintage:andesite_spring",
        B: "create:andesite_casing",
        C: "gtceu:andesite_alloy_ingot",
        D: "create:mechanical_pump",
    });
});
