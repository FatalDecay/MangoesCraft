ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:wine_red', 1000), [Fluid.water(1000), 'minecraft:sweet_berries'])
});
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:wine_rose', 1000), [Fluid.water(1000), 'fruitsdelight:cranberry'])
});
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:wine_white', 1000), [Fluid.water(1000), 'fruitsdelight:lychee'])
});
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:cider_pear', 1000), [Fluid.water(1000), 'fruitsdelight:pear'])
});
ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:cider_apple', 1000), [Fluid.water(1000), 'minecraft:apple'])
});
ServerEvents.recipes(event => {
    event.recipes.create.filling('kubejs:wine_bottle_red', ['minecraft:glass_bottle', Fluid.of('kubejs:wine_red', 1000)])
});
ServerEvents.recipes(event => {
    event.recipes.create.filling('kubejs:wine_bottle_rose', ['minecraft:glass_bottle', Fluid.of('kubejs:wine_rose', 1000)])
});
ServerEvents.recipes(event => {
    event.recipes.create.filling('kubejs:wine_bottle_white', ['minecraft:glass_bottle', Fluid.of('kubejs:wine_white', 1000)])
});
ServerEvents.recipes(event => {
    event.recipes.create.filling('kubejs:cider_bottle_pear', ['minecraft:glass_bottle', Fluid.of('kubejs:cider_pear', 1000)])
});
ServerEvents.recipes(event => {
    event.recipes.create.filling('kubejs:cider_bottle_apple', ['minecraft:glass_bottle', Fluid.of('kubejs:cider_apple', 1000)])
});
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:wine_tankard_red'),
        [
            Item.of('kubejs:wine_bottle_red'),
            Item.of('brewinandchewin:tankard')
        ]
    )
        .damageIngredient('kubejs:wine_bottle_red', 1);
});
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:wine_tankard_rose'),
        [
            Item.of('kubejs:wine_bottle_rose'),
            Item.of('brewinandchewin:tankard')
        ]
    )
        .damageIngredient('kubejs:wine_bottle_rose', 1);
});
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:wine_tankard_white'),
        [
            Item.of('kubejs:wine_bottle_white'),
            Item.of('brewinandchewin:tankard')
        ]
    )
        .damageIngredient('kubejs:wine_bottle_white', 1);
});
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:cider_tankard_pear'),
        [
            Item.of('kubejs:cider_bottle_pear'),
            Item.of('brewinandchewin:tankard')
        ]
    )
        .damageIngredient('kubejs:cider_bottle_pear', 1);
});
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:cider_tankard_apple'),
        [
            Item.of('kubejs:cider_bottle_apple'),
            Item.of('brewinandchewin:tankard')
        ]
    )
        .damageIngredient('kubejs:cider_bottle_apple', 1);
});
ItemEvents.foodEaten(event => {
    if (event.item.id == 'kubejs:wine_tankard_red') {
        let player = event.player;
        if (!player.isCreative()) {
            player.give('brewinandchewin:tankard');
        }
    }
});
ItemEvents.foodEaten(event => {
    if (event.item.id == 'kubejs:wine_tankard_rose') {
        let player = event.player;
        if (!player.isCreative()) {
            player.give('brewinandchewin:tankard');
        }
    }
});
ItemEvents.foodEaten(event => {
    if (event.item.id == 'kubejs:wine_tankard_white') {
        let player = event.player;
        if (!player.isCreative()) {
            player.give('brewinandchewin:tankard');
        }
    }
});
ItemEvents.foodEaten(event => {
    if (event.item.id == 'kubejs:cider_tankard_pear') {
        let player = event.player;
        if (!player.isCreative()) {
            player.give('brewinandchewin:tankard');
        }
    }
});
ItemEvents.foodEaten(event => {
    if (event.item.id == 'kubejs:cider_tankard_apple') {
        let player = event.player;
        if (!player.isCreative()) {
            player.give('brewinandchewin:tankard');
        }
    }
});
