PlayerEvents.respawned((event) => {
    event.server.scheduleInTicks(1, () => {
        event.player.runCommandSilent("clear @s opolisutilities:death_stone");
    });
});
