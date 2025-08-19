StartupEvents.registry('item', event => {
    event.create('ancient_debris_shard')
        .displayName('Ancient Debris Shard')
        .texture('kubejs:item/ancient_debris_shard')
        .maxStackSize(64);
});
ItemEvents.toolTierRegistry(event => {
    event.add('mango', tier => {
        tier.uses = 10
        tier.speed = 10
        tier.attackDamageBonus = 2.0
        tier.level = 4
     })
});
StartupEvents.registry('item', event => {
    event.create('mango_pickaxe', 'pickaxe')
        .displayName('Mango Pickaxe')
        .texture('kubejs:item/mango_pickaxe')
        .tier('mango')
        .tooltip('(★ ω ★)')
});
StartupEvents.registry('item', event => {
    event.create('mango_silk', 'pickaxe')
        .displayName('Silky Mango')
        .texture('kubejs:item/mango_silk')
        .tier('mango')
        .tooltip('(★ ω ★)')
});
