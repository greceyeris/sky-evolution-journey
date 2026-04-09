LootJS.modifiers((event) => {
    // modifier_loot
    event
        .addLootTableModifier(/.*/)
        .removeLoot("#c:hidden_from_recipe_viewers");
});
