ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 ftbmaterials:sulfur_block 的配方
    event.shaped("ftbmaterials:sulfur_block", ["AAA", "AAA", "AAA"], {
        A: "ftbmaterials:sulfur",
    });

    // 添加 ftbmaterials:niter_block 的配方
    event.shaped("ftbmaterials:niter_block", ["AAA", "AAA", "AAA"], {
        A: "ftbmaterials:niter",
    });
});
