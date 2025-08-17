StartupEvents.registry('item', event => {
    event.create('wine_bottle_red')
        .displayName('Red Wine')
        .texture('kubejs:item/wine_red')
        .maxDamage(4)
});
StartupEvents.registry('item', event => {
    event.create('wine_bottle_rose')
        .displayName('Rose Wine')
        .texture('kubejs:item/wine_rose')
        .maxDamage(4)
});
StartupEvents.registry('item', event => {
    event.create('wine_bottle_white')
        .displayName('White Wine')
        .texture('kubejs:item/wine_white')
        .maxDamage(4)
});
StartupEvents.registry('item', event => {
    event.create('cider_bottle_pear')
        .displayName('Pear Cider')
        .texture('kubejs:item/cider_pear')
        .maxDamage(4)
});
StartupEvents.registry('item', event => {
    event.create('cider_bottle_apple')
        .displayName('Apple Cider')
        .texture('kubejs:item/cider_apple')
        .maxDamage(4)
});
StartupEvents.registry('item', event => {
    event.create('wine_tankard_red').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .effect('minecraft:nausea', 200, 0, 1)
            .effect('minecraft:strength', 1200, 0, 1)
            .alwaysEdible()            
    })
        .displayName('Tankard of Red Wine')
        .texture('kubejs:item/wine_tankard_red')
        .maxStackSize(64)
        .useAnimation('drink')
        .tooltip('Gives Strength 1')
        .containerItem('brewinandchewin:tankard')
});
StartupEvents.registry('item', event => {
    event.create('wine_tankard_rose').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .effect('minecraft:nausea', 200, 0, 1)
            .effect('minecraft:haste', 1200, 0, 1)
            .alwaysEdible()            
    })
        .displayName('Tankard of Rose Wine')
        .texture('kubejs:item/wine_tankard_rose')
        .maxStackSize(64)
        .useAnimation('drink')
        .tooltip('Gives Haste 1')
        .containerItem('brewinandchewin:tankard')
});
StartupEvents.registry('item', event => {
    event.create('wine_tankard_white').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .effect('minecraft:nausea', 200, 0, 1)
            .effect('minecraft:speed', 1200, 0, 1)
            .alwaysEdible()
    })
        .displayName('Tankard of White Wine')
        .texture('kubejs:item/wine_tankard_white')
        .maxStackSize(64)
        .useAnimation('drink')
        .tooltip('Gives Speed 1')
        .containerItem('brewinandchewin:tankard')
});
StartupEvents.registry('item', event => {
    event.create('cider_tankard_pear').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .effect('minecraft:nausea', 200, 0, 1)
            .effect('minecraft:night_vision', 1200, 0, 1)
            .alwaysEdible()            
    })
        .displayName('Tankard of Pear Cider')
        .texture('kubejs:item/cider_tankard_pear')
        .maxStackSize(64)
        .useAnimation('drink')
        .tooltip('Gives Night Vision')
        .containerItem('brewinandchewin:tankard')
});
StartupEvents.registry('item', event => {
    event.create('cider_tankard_apple').food(food => {
        food
            .hunger(4)
            .saturation(4)
            .effect('minecraft:nausea', 200, 0, 1)
            .effect('minecraft:regeneration', 1200, 0, 1)
            .alwaysEdible()            
    })
        .displayName('Tankard of Apple Cider')
        .texture('kubejs:item/cider_tankard_apple')
        .maxStackSize(64)
        .useAnimation('drink')
        .tooltip('Gives Regeneration')
        .containerItem('brewinandchewin:tankard')
});
StartupEvents.registry('fluid', event => {
    event.create('wine_red')
        .displayName('Red Wine')
        .thinTexture(0x90091B)
        .bucketColor(0x90091B)
        .noBucket()
});
StartupEvents.registry('fluid', event => {
    event.create('wine_rose')
        .displayName('Rose Wine')
        .thinTexture(0xF5CFE0)
        .bucketColor(0xF5CFE0)
        .noBucket()
});
StartupEvents.registry('fluid', event => {
    event.create('wine_white')
        .displayName('White Wine')
        .thinTexture(0xeef4f0)
        .bucketColor(0xeef4f0)
        .noBucket()
});
StartupEvents.registry('fluid', event => {
    event.create('cider_pear')
        .displayName('Pear Cider')
        .thinTexture(0xCDEC8E)
        .bucketColor(0xCDEC8E)
        .noBucket()
});
StartupEvents.registry('fluid', event => {
    event.create('cider_apple')
        .displayName('Apple Cider')
        .thinTexture(0xECFFC2)
        .bucketColor(0xECFFC2)
        .noBucket()
});
