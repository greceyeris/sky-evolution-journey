ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 botanypots:terracotta_hopper_botany_pot 的配方
    event.shaped(
        "botanypots:terracotta_hopper_botany_pot",
        ["ABA", "ACA", " A "],
        {
            A: "minecraft:terracotta",
            B: "woodenhopper:wooden_hopper",
            C: "minecraft:flower_pot",
        },
    );
});
