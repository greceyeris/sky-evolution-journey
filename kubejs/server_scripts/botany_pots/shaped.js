ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 botanypots:terracotta_botany_pot 的配方
    event.shaped("botanypots:terracotta_botany_pot", ["A A", "ABA", " A "], {
        A: "minecraft:terracotta",
        B: "bonsaitrees3:bonsaipot",
    });

    // 添加 botanypots:terracotta_hopper_botany_pot 的配方
    event.shaped(
        "botanypots:terracotta_hopper_botany_pot",
        ["ABA", "ACA", " A "],
        {
            A: "minecraft:terracotta",
            B: "minecraft:hopper",
            C: "bonsaitrees3:bonsaipot",
        },
    );
});
