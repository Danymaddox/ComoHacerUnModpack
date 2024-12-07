ServerEvents.recipes(e => {
//Un bloque de carbón en un diamante.
//e.recipes.create.crushing('diamond', 'coal_block')
//Un bloque de carbón en un diamante, pero con un tiempo de procesado de 500 ticks.
//e.recipes.create.crushing('diamond', 'coal_block').processingTime(500)
//Un bloque de carbón en un diamante y un 50% de probabilidades de sacar otro bloque de diamante.
e.recipes.create.crushing(['diamond', Item.of('diamond').withChance(0.5)], 'coal_block')
})