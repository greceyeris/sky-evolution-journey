ServerEvents.recipes((event) => {
    // 添加配方
    // create:cutting
    // 添加 createmetallurgy:graphite_ingot_mold 和 createmetallurgy:graphite_plate_mold 的配方
    event.recipes.create.cutting(
        [
            "createmetallurgy:graphite_ingot_mold",
            "createmetallurgy:graphite_plate_mold",
        ],
        "createmetallurgy:graphite_blank_mold",
    );
});
