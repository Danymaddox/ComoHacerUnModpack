## Compendio de terminología.
Nota: la terminología empleada no es 100% fiel al campo de la informática dado que 1) no soy informático y 2) utilizo palabras que sean fáciles de utilizar para el nivel de los tutoriales.
### Estructura de la carpeta.
Es probablemente una de las cuestiones más simples, pero en las que más se suele fallar. Te dejo una pequeña descripción del uso de cada una de las carpetas.
- **assets**: funciona como un ResourcePack. Puedes introducir texturas y modelos para tus bloques o items personalizados.
- **client_scripts**: En esta carpeta tienes que introducir todos los archivos que modifiquen solo el cliente. Por ejemplo cambiar nombre de items, su tooltip o cualquier evento que sea de cliente.
- config: Funciona como una carpeta de config de mods, pero solo se carga una primera vez en cada modpack, para no sobreescribir las configuraciones de cliente.
- data: Es una carpeta de datapacks, donde puedes crear el tuyo propio o meter un datapack descargado para que se cargue siempre por defecto en tus modpacks.
- server_scripts: Es la carpeta que más vas a utilizar. En ella metemos todos los cripts que tengan que ver con modificar funciones ya existentes dentro de Minecraft. El ejemplo más sencillo es crear/cambiar/eliminar recetas.
- startup_scripts: Aquí introducimos los scripts que creen algo nuevo (excepto recetas). Es decir, si quieres crear un nuevo item o bloque, el código va dentro de esta carpeta.

### Tipos de archivo más frecuentes.
Pequeño resumen de los formatos de archivo que más vas a usar, aunque puede (y seguro que) te en cuentres con más
- JS: Formato JavaScript. Es el más utilizado con mucha diferencia.
- JSON: Formato especialmente utilizado para datapacks o modelos de item/bloques.
- PNG: Formato de imagen para darle textura a tus items/bloques.

### ItemID, ModID, Tags, RecipeID, Boolean, Integrer (Int).
Conceptos fundamentales definidos en 2-3 líneas.
- ItemID: Es la forma en la que nos referimos a un item en concreto. Por ejemplo 'minecraft:obsidian' o 'create:cut_ochrum'.
- ModID: Es la forma en la que nos referimos a un mod en concreto. Por ejemplo 'minecraft' o 'create'. Ten cuidado porque algunos no son tan intuitivos, como por ejemplo Mana and Artifice, que utiliza 'mna'. 
- Tags:Es la forma en la que podemos referenciar un conjunto de items, como por ejemplo la lana. En este caso siempre va con un # delante: '#minecraft:wool'.
- RecipeID: Es la forma en la que nos referimos a una receta en concreto. Por ejemplo: 'minecraft:prismarine_stairs' o 'minecraft:emerald_from_blasting_emerald_ore'.
- Boolean: Sirve para delimitar si una condición es true (verdadera) o false (falsa).
- Integrer (Int): Es un número que sirve para definir multitud de cosas. Por ejemplo la cantidad de objetos en una receta o la velocidad de crafteo de un horno u otros procesos.

### Arrays.
 - Son conjuntos de ItemID, ModID, Tags, RecipeID, Boolean, Integrer (Int) o conjuntos de Arrays (que se llaman Arrays indexados) que sirven para agrupar distintos objetos. Siempre se definen entre []. Sus usos son múltiples, desde definir ingredientes o resultados de recetas hasta refinado de código. Los componentes no se pueden mezclar (ItemID + ModID, por ejemplo) salvo en el caso de ItemID+Tags, ya que al fin y al cabo están referenciando lo mismo: un objeto dentro del juego.

 ### Var, Let y Const (y global.const).
Esto es lo más complejo de todo el tutorial, no te preocupes sin con esto no lo entiendes, lo trataremos en profundidad más adelante.
 - Var: Casi no se usa. Se puede re-definir dentro del código, causando algunos problemas
 - Let: Es la más utilizada. Te permite gererar una variable (darle nombre a un array) para utilizarla dentro del código.
 - Const: Funciona de la misma forma que Let, pero con la posibilidad de definirla con ámbito global y que funcione en todos tus scripts.

### Orden del código y prioridades de archivo.

- El código siempre se lee de arriba a abajo, empezando desde la línea 1 hasta el final del archivo.
- Para definir las prioridades de los archivos usamos 'priority: int', donde int es un número entero. Cuanto más alto sea el número, antes se va a cargar dentro de KubeJS.

### ¿Qué es un evento?

-Un evento (event) es aquello que pasa dentro de Minecraft, como una receta, abrir un cofre o conseguir un logro, y que Kubejs nos permite detectar para modificar, añadir o eliminar características dentro del juego. Hay multitud de variedad y cada uno tiene su lugar en las carpetas antes mencionadas. Ten en cuenta que puede que los eventos funcionen de manera diferente dependiendo de en qué carpeta lo pongas. Ejemplo:
```js
ServerEvents.recipes(event => { })
```
Aquí vemos el evento 'recipes' que es considerado un evento de Servidor (ServerEvents).
### ¿Qué es un callback?

- Un callback (apodo) es el nombre que le damos dentro del código a nuestro evento para referirnos a él y poder modificarlo. Este apodo se define justo después del evento y debemos utilizarlo dentro del bloque de código para que funcione. Podemos poner el apodo que queramos, pero dentro del bloque del evento tengo que mantener el mismo. En el ejemplo anterior, el apodo o callback es 'event'.

### ¿Qué es un bloque de código (block code)?
```js
ServerEvents.recipes(event => {

// Todo lo que pones aquí dentro es el bloque de código o block code. Está limitado por las dos {}

})
```

### ¿Qué es un método (method)? ¿Y los métodos encadenados (chained methods?
El método nos permite modificar el evento de diversas maneras. Dependiendo del evento podremos emplear unos métodos u otros, y el relleno dependerá de lo que nos permita modificar el método. A mayores, hay métodos que pueden ser modificados con otro método, estos son los **métodos encadenados**. Ejemplos:
```js
event.smelting('minecraft:diamond', 'minecraft:stick').cookingTime(2000)
//'.smelting' es un evento que nos permite añadir una receta y '.cookingTime' es un método que nos permite modificar '.smelting' para definir la cantidad de tiempo que tarda la receta dentro del horno.
```
### ¿Usar /reload o restart?
