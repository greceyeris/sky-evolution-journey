ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 strainers:purifying_salt_mulch 的配方
    event.shaped("strainers:purifying_salt_mulch", ["ABA", "ACA", "ABA"], {
        A: "#minecraft:leaves",
        B: "opolisutilities:mini_charcoal",
        C: "strainers:mulch",
    });

    // 添加 strainers:flint_mesh 的配方
    event.shaped("strainers:flint_mesh", ["ABA", "BCB", "ABA"], {
        A: "#forge:rods/wooden",
        B: "minecraft:string",
        C: "minecraft:flint",
    });

    // 添加 minecraft:bricks 的配方
    event.shaped("2x minecraft:bricks", ["AAA", "ABA", "AAA"], {
        A: "minecraft:brick",
        B: Item.of(
            "ceramicbucket:ceramic_bucket",
            '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}',
        ).strongNBT(),
    });
});
