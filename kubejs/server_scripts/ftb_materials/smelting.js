ServerEvents.recipes((event) => {
    // 添加配方
    // smelting
    // 添加 ftbmaterials:graphite_ingot 的配方
    event.smelting("ftbmaterials:graphite_ingot", "gtceu:raw_graphite");

    // 添加 ftbmaterials:niter 的配方
    event.smelting("ftbmaterials:niter", "gtceu:raw_saltpeter");

    // 添加 ftbmaterials:sulfur 的配方
    event.smelting("ftbmaterials:sulfur", "gtceu:raw_sulfur");
});
