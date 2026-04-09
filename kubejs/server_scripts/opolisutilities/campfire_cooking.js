ServerEvents.recipes((event) => {
    // 添加配方
    // campfireCooking
    // 添加 opolisutilities:mini_charcoal 的配方
    event.campfireCooking(
        "opolisutilities:mini_charcoal",
        "kubejs:twig",
        0.3,
        400,
    );
});
