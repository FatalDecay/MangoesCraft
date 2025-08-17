//Uranium
ServerEvents.recipes(event => {
    event.recipes.create.crushing([Item.of('mekanism:raw_uranium').withChance(0.10)], 'minecraft:nether_bricks')
});
//Diorite
ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:diorite', ['minecraft:cobblestone', 'minecraft:quartz'])
});
//Basalt
ServerEvents.recipes(event => {
    event.recipes.create.crushing([Item.of('tfmg:limesand'), Item.of('mekanism:dust_fluorite').withChance(0.6)], 'create:limestone')
});
//Raw copper
ServerEvents.recipes(event => {
    event.recipes.create.crushing('minecraft:raw_copper', 'minecraft:granite')
});
//Raw zinc
ServerEvents.recipes(event => {
    event.recipes.create.crushing('create:raw_zinc', 'minecraft:andesite')
});
//Blackstone crushing
ServerEvents.recipes(event => {
    event.recipes.create.crushing([Item.of('minecraft:raw_gold').withChance(0.2),Item.of('kubejs:ancient_debris_shard').withChance(0.0005)], 'minecraft:blackstone')
});
//Crushing tuff
ServerEvents.recipes(event => {
    event.recipes.create.crushing([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:gold_nugget').withChance(0.1), Item.of('create:copper_nugget').withChance(0.1), Item.of('minecraft:iron_nugget').withChance(0.1), Item.of('create:zinc_nugget').withChance(0.1), Item.of('createaddition:electrum_nugget').withChance(0.1), Item.of('mekanism:nugget_osmium').withChance(0.1)], 'minecraft:tuff')
});
//Lapis
ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:lapis_lazuli', ['create:experience_nugget', 'minecraft:charcoal', 'minecraft:blue_dye'])
});
//Ink sac
ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:ink_sac', ['minecraft:paper', 'minecraft:black_dye'])
});
//Netherrack
ServerEvents.recipes(event => {
    event.recipes.create.haunting('minecraft:netherrack', 'minecraft:blackstone')
});
//Iron nugget
ServerEvents.recipes(event => {
    event.recipes.create.compacting(['minecraft:iron_nugget', Item.of('minecraft:clay_ball').withChance(0.5)], 'minecraft:gravel')
})
//Redstone
ServerEvents.recipes(event => {
    event.recipes.create.splashing([Item.of('minecraft:redstone').withChance(0.5)], 'minecraft:red_sand')
})
//Ancient debris shard crafts
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:ancient_debris'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:ancient_debris_shard'}
    )
});
//Ancient shard craft
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:ancient_debris_shard', 9),
        [
            'minecraft:ancient_debris'
        ]
    )
});
//apples
ServerEvents.recipes(event => {
    event.recipes.create.pressing([Item.of('minecraft:apple').withChance(0.5)], '#minecraft:leaves')
});
//Removing recipes
ServerEvents.recipes(event => {
    event.remove({ id:'create_ironworks:materials/steel/sequenced_crafting_precision_mechanism' })
});
ServerEvents.recipes(event => {
    event.remove({ id: 'tfmg:crushing/limestone' })
});
ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/tuff_recycling' })
});
ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/tuff' })
});
ServerEvents.recipes(event => {
    event.remove({ output: 'alexsmobs:dimensional_carver' })
});
ServerEvents.recipes(event => {
    event.remove({ id: 'create:splashing/red_sand' })
});
ServerEvents.recipes(event => {
    event.remove({ output: 'waystones:warp_stone' })
});
ServerEvents.recipes(event => {
    event.remove({ id: 'alexsmobs:transmutation_table' })
});
//Waystone crafts
ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('waystones:warp_stone', [
        'ABA',
        'BCB',
        'ABA'
 
    ], {
        A: 'minecraft:amethyst_shard',
        B: 'minecraft:ender_pearl',
        C: 'minecraft:emerald'
    })
});





