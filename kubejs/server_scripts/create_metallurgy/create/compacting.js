ServerEvents.recipes((event) => {
    // 添加配方
    // create:compacting
    // 添加 createmetallurgy:graphite_blank_mold 的配方
    event.recipes.create.compacting(
        "createmetallurgy:graphite_blank_mold",
        "2x createmetallurgy:graphite",
    );
});
