ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 gtceu:flint_block 的配方
    event.shaped("gtceu:flint_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:flint",
    });

    // 添加 gtceu:dough 的配方
    event.shaped("4x gtceu:dough", ["AAA", "ABA", "AAA"], {
        A: "gtceu:wheat_dust",
        B: Item.of(
            "ceramicbucket:ceramic_bucket",
            '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}',
        ).strongNBT(),
    });

    // 添加 gtceu:andesite_alloy_ingot 的配方
    event.shaped("gtceu:andesite_alloy_ingot", ["AAA", "AAA", "AAA"], {
        A: "gtceu:andesite_alloy_nugget",
    });
});
