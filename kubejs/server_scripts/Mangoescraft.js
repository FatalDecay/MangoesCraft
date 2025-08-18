//Adding Create mixing recipes
//Dripstone block, nether star, tuff, diorite, lapis lazuli, inc sack
ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:dripstone_block', ['minecraft:cobblestone', 'minecraft:granite'])
    event.recipes.create.mixing('minecraft:nether_star', [Item.of('minecraft:soul_sand', 4), Item.of('minecraft:wither_skeleton_skull', 3)]).superheated()
    event.recipes.create.mixing('minecraft:tuff', ['minecraft:cobblestone', 'minecraft:diorite', 'minecraft:quartz'])
    event.recipes.create.mixing('minecraft:diorite', ['minecraft:cobblestone', 'minecraft:quartz'])
    event.recipes.create.mixing('minecraft:lapis_lazuli', ['create:experience_nugget', 'minecraft:charcoal', 'minecraft:blue_dye'])
    event.recipes.create.mixing('minecraft:ink_sac', ['minecraft:paper', 'minecraft:black_dye'])
    event.recipes.create.mixing('tfmg:galena', ['minecraft:dripstone_block', Fluid.water(1000)])
    event.recipes.create.mixing('minecraft:ghast_tear', ['minecraft:soul_sand', 'abyssal_decor:rockwater_tear', Fluid.water(1000)])

//Adding Create haunting recipes
//lignite, netherrack

    event.recipes.create.haunting('tfmg:lignite', 'minecraft:soul_sand')
    event.recipes.create.haunting('minecraft:netherrack', 'minecraft:blackstone')

//Adding Create crushing recipes
//raw uranium, limesand, raw copper, raw zinc, raw gold, flint, ancient debris shard, gold nugget, copper nugget, iron nugget, zinc nugget, electrum nugget, osmium nugget
    
    event.recipes.create.crushing([Item.of('mekanism:nugget_osmium').withChance(0.20), Item.of('mekanism:nugget_uranium').withChance(0.20), Item.of('mekanism:nugget_tin').withChance(0.20), Item.of('nugget_lead').withChance(0.20)], 'minecraft:dripstone_block')
    event.recipes.create.crushing([Item.of('mekanism:raw_uranium').withChance(0.10)], 'minecraft:nether_bricks')
    event.recipes.create.crushing([Item.of('tfmg:limesand'), Item.of('mekanism:dust_fluorite').withChance(0.6)], 'create:limestone')
    event.recipes.create.crushing('minecraft:raw_copper', 'minecraft:granite')
    event.recipes.create.crushing('create:raw_zinc', 'minecraft:andesite')
    event.recipes.create.crushing([Item.of('minecraft:raw_gold').withChance(0.2), Item.of('kubejs:ancient_debris_shard').withChance(0.0005)], 'minecraft:blackstone')
    event.recipes.create.crushing([Item.of('minecraft:flint').withChance(0.25), Item.of('minecraft:gold_nugget').withChance(0.20), Item.of('create:copper_nugget').withChance(0.20), Item.of('minecraft:iron_nugget').withChance(0.20), Item.of('create:zinc_nugget').withChance(0.20), Item.of('createaddition:electrum_nugget').withChance(0.20)], 'minecraft:tuff')

//Adding Create compacting recipes
//iron nugget, clay ball

    event.recipes.create.compacting(['minecraft:iron_nugget', Item.of('minecraft:clay_ball').withChance(0.5)], 'minecraft:gravel')

//Adding Create splashing recipes
//redstone

    event.recipes.create.splashing([Item.of('minecraft:redstone').withChance(0.5)], 'minecraft:red_sand')

//Adding Create pressing recipes
//apples

    event.recipes.create.pressing([Item.of('minecraft:apple').withChance(0.5)], '#minecraft:leaves')
});

//Adding Crafting Recipes
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

//Ancient shard craft
    event.shapeless(
        Item.of('kubejs:ancient_debris_shard', 9),
        [
            'minecraft:ancient_debris'
        ]
    )

//Waystone crafts
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

//Removing create/create addon recipes
ServerEvents.recipes(event => {
    event.remove({ id:'create_ironworks:materials/steel/sequenced_crafting_precision_mechanism' })
    event.remove({ id: 'tfmg:crushing/limestone' })
    event.remove({ id: 'create:crushing/tuff_recycling' })
    event.remove({ id: 'create:crushing/tuff' })
    event.remove({ output: 'alexsmobs:dimensional_carver' })
    event.remove({ id: 'create:splashing/red_sand' })

    //Removing hearth and harvest recipes
    event.remove({ input: 'hearthandharvest:tree_tapper' })
    event.remove({ input: 'hearthandharvest:jerky' })
    event.remove({ input: 'hearthandharvest:syrup_bottle' })
    event.remove({ input: 'hearthandharvest:sap_bucket' })
    event.remove({ input: 'hearthandharvest:batter' })
    event.remove({ output: 'hearthandharvest:tree_tapper' })
    event.remove({ output: 'hearthandharvest:jerky' })
    event.remove({ output: 'hearthandharvest:syrup_bottle' })
    event.remove({ output: 'hearthandharvest:sap_bucket' })
    event.remove({ output: 'hearthandharvest:batter' })

    //Removing misc. recipes
    event.remove({ output: 'waystones:warp_stone' })
    event.remove({ id: 'alexsmobs:transmutation_table' })
});
