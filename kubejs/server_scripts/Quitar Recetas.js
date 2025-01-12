priority: 300

	//Script creado por Danymaddox como ejemplo para los tutoriales sobre Cómo hacer un Modpack, disponibles en: https://bit.ly/CreaTuModpack
	//Para más scripts de ejemplo ve a: https://github.com/Danymaddox/ComoHacerUnModpack
	//Si tienes dudas puedes ir a Discord: https://bit.ly/Danymaddox
	//Toda copia, distribución o modificiación sin consentimiento está prohibida.

ServerEvents.recipes(event => {

//Para quitar recetas utilizamos el callback ('event') segido del método correcto, en este caso '.remove'.
	//Si no aplicamos una condición se eliminan todas las recetas.
event.remove({})

	//Con la condición 'output' las eliminamos en función del resultado de la receta. Admite tags.
event.remove({output: ['minecraft:diamond', 'minecraft:stick']})

	//Si usamos como condición 'input' eliminamos toda receta que tenga como ingrediente un objeto determinado. Admite tags.
event.remove({input: ['minecraft:diamond', 'minecraft:stick']})

	//Con 'mod' eliminamos todas las recetas del mod que elijamos. Requiere un modID.
event.remove({mod: 'minecraft'})

	//Usando 'type' podemos eliminar las recetas por tipo de receta. Es decir, todas las que se hagan en mesa de crafteo,
	//horno, alto horno, etc.
event.remove({type: 'create:sandpaper_polishing'})

	//Este es probablemente el más útil de todos, pues permite eliminar recetas concretas usando su ID único.
event.remove({id: 'minecraft:purpur_pillar'})

//También puedes combinar los filtros de arriba para hacer tu trabajo más sencillo.
	//Usa este formato para quitar recetas que cumplan todos los requisitos.
event.remove({output: 'minecraft:stick', mod: 'mna'})

	//Con este otro eliminas las recetas que cumplan cualquiera de los requisitos.
event.remove([{output: 'minecraft:stick'}, {mod: 'mna'}])

	//Y, finalmente, así puedes eliminar recetas que NO cumplan ciertas condiciones.
event.remove({not: {output: 'minecraft:stick', mod: 'mna'}})

})