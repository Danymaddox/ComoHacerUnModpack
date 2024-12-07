priority: 0

	//Script creado por Danymaddox como ejemplo para los tutoriales sobre Cómo hacer un Modpack, disponibles en: https://bit.ly/CreaTuModpack
	//Para más scripts de ejemplo ve a: https://bit.ly/DonumDanymaddox
	//Si tienes dudas puedes ir a Discord: https://bit.ly/Danymaddox
	//Toda copia, distribución o modificiación sin consentimiento está prohibida.

//Inicio del Script. Se define el tipo y nombre del Event.

ServerEvents.recipes(event => {

//Añadir recetas.

	//Shapeless. Una receta sin forma, solo necesita los items.
event.shapeless(
	'2x minecraft:diamond', ['minecraft:stick', 'minecraft:stick', 'minecraft:dirt'])

	//Shaped. Una receta con forma determinada.
event.shaped(
	'minecraft:elytra',
	[
	'CSC',
	'CPC',
	'C C'],{
		C: 'minecraft:leather',
		T: 'minecraft:string',
		P: 'minecraft:stick'
	})
	
	//ShapedMirrored. Una receta de 2x2, que tiene forma determinada, pero puede estar colocada en diferentes ejes.
event.shaped(
	'minecraft:diamond',
	[
	'OO',
	'OO'],{
		O: 'minecraft:obsidian'
	})

	//Smelting. Receta para Horno.
event.smelting('minecraft:diamond', 'minecraft:stick').cookingTime(2000)

	//Blasting. Receta para Alto Horno.
event.blasting('minecraft:diamond', 'minecraft:dirt')

	//Smoking. Receta para 
event.smoking('minecraft:cooked_beef', 'minecraft:dirt')

event.campfireCooking('2x minecraft:diamond', 'minecraft:dirt')

})
