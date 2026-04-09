ItemEvents.modification((event) => {
    // modification
    // 修改 survival_firesticks:firestick
    event.modify("survival_firesticks:firestick", (item) => {
        item.maxDamage = 1;
    });
});
