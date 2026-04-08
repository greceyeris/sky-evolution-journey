ServerEvents.recipes((event) => {
    // 添加配方
    // shaped
    // 添加 kubejs:dirt_stick 的配方
    event.shaped("kubejs:dirt_stick", ["A ", " A"], {
        A: "kubejs:dirt_dust",
    });
});
