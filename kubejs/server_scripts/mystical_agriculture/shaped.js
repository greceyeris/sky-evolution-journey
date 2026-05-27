ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 mysticalagriculture:soulium_gemstone 的配方
    event.shaped(
        "mysticalagriculture:soulium_gemstone",
        [" A ", "ABA", " A "],
        {
            A: "mysticalagriculture:soulium_dust",
            B: "mysticalagriculture:prosperity_gemstone",
        },
    );
});
