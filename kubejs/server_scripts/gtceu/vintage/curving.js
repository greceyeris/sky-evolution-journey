ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:curving
    // 添加 gtceu:ingot_casting_mold 的配方
    event.recipes.vintage
        .curving("gtceu:ingot_casting_mold", "gtceu:empty_mold")
        .mode(5)
        .head("minecraft:brick");

    // 添加 gtceu:plate_casting_mold 的配方
    event.recipes.vintage
        .curving("gtceu:plate_casting_mold", "gtceu:empty_mold")
        .mode(5)
        .head("gtceu:wood_plate");
});
