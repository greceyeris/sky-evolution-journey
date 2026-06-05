// 定义 recipeCategories 数组
const recipeCategories = ["createmetallurgy:polishing_with_grinder"];

ClientEvents.highPriorityAssets((event) => {
    // addJson
    event.addJson("emi:recipe/filters/hide_recipe_categories", {
        filters: recipeCategories.map((category) => ({
            category: category,
        })),
    });
});
