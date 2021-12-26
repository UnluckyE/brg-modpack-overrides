// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'quark:iron_rod'})

	event.shaped('quark:iron_rod', [
		'#forge:ingots/iron',
		'#forge:ingots/iron',
		'minecraft:heavy_weighted_pressure_plate'
	])

	event.shaped('enigmaticlegacy:cursed_ring', [
		'DCD',
		'ORO',
		'DOD'
	], {
		D: 'eidolon:death_essence',
		C: 'silentgear:crimson_steel_ingot',
		O: 'minecraft:crying_obsidian',
		R: 'enigmaticlegacy:gem_ring'
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})