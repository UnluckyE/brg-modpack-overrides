// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({input: '#forge:ores', output: '#forge:dusts'})

	event.remove({output: 'immersiveengineering:hammer'})
	event.remove({output: 'mekanism:steel_casing'})
	event.remove({output: 'mekanism:metallurgic_infuser'})

	event.shaped('immersiveengineering:hammer', [
		' IP',
		' SI',
		'S  '
	], {
		I: '#forge:ingots/iron',
		P: '#forge:plates/iron',
		S: 'minecraft:stick'
	})

	event.shaped('mekanism:steel_casing', [
		'GPG',
		'POP',
		'GPG'
	], {
		G: 'mekanism:structural_glass',
		P: '#forge:plates/steel',
		O: '#forge:dusts/osmium'
	})

	event.shaped('mekanism:steel_casing', [
		'GCG',
		'COC',
		'GCG'
	], {
		G: 'mekanism:structural_glass',
		C: 'mekanism:enriched_carbon',
		O: '#forge:dusts/osmium'
	})

	event.shaped('mekanism:metallurgic_infuser', [
		'TOT',
		'OSO',
		'BCB'
	], {
		T: 'mekanism:basic_chemical_tank',
		O: '#forge:ingots/osmium',
		S: 'mekanism:steel_casing',
		B: 'minecraft:blast_furnace',
		C: 'immersiveengineering:coil_lv'
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})