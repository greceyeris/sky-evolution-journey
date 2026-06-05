ServerEvents.recipes((event) => {
    // 添加配方
    // vintage:pressurizing
    // 添加 gtceu:obsidian_plate 的配方
    event.recipes.vintage
        .pressurizing("gtceu:obsidian_plate", "gtceu:obsidian_dust")
        .processingTime(200);
});
