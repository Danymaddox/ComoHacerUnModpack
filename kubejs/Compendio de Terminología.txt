## Compendio de terminología.

### Estructura de la carpeta.
- assets: funciona como un ResourcePack. Puedes introducir texturas y modelos para tus bloques o items personalizados.
- client_scripts: En esta carpeta tienes que introducir todos los archivos que modifiquen solo el cliente. Por ejemplo cambiar nombre de items, su tooltip o cualquier evento que sea de cliente.
- config: Funciona como una carpeta de config de mods, pero solo se carga una primera vez en cada modpack, para no sobreescribir las configuraciones de cliente.
- data: Es una carpeta de datapacks, donde puedes crear el tuyo propio o meter un datapack descargado para que se cargue siempre por defecto en tus modpacks.
- server_scripts: Es la carpeta que más vas a utilizar. En ella metemos todos los cripts que tengan que ver con modificar funciones ya existentes dentro de Minecraft. El ejemplo más sencillo es crear/cambiar/eliminar recetas.
- startup_scripts: Aquí introducimos los scripts que creen algo nuevo (excepto recetas). Es decir, si quieres crear un nuevo item o bloque, el código va dentro de esta carpeta.

### Tipos de archivo más frecuentes.
- JS: Formato JavaScript. Es el más utilizado con mucha diferencia.
- JSON: Formato especialmente utilizado para datapacks o modelos de item/bloques.
- PNG: Formato de imagen para darle textura a tus items/bloques.

### ItemID, ModID, Tags, RecipeID, Boolean, Integrer (Int).

- ItemID: Es la forma en la que nos referimos a un item en concreto. Por ejemplo 'minecraft:obsidian' o 'create:cut_ochrum'.
- ModID: Es la forma en la que nos referimos a un mod en concreto. Por ejemplo 'minecraft' o 'create'. Ten cuidado porque algunos no son tan intuitivos, como por ejemplo Mana and Artifice, que utiliza 'mna'. 
- Tags:Es la forma en la que podemos referenciar un conjunto de items, como por ejemplo la lana. En este caso siempre va con un # delante: '#minecraft:wool'.
- RecipeID: Es la forma en la que nos referimos a una receta en concreto. Por ejemplo: 'minecraft:prismarine_stairs' o 'minecraft:emerald_from_blasting_emerald_ore'.
- Boolean: Sirve para delimitar si una condición es true (verdadera) o false (falsa).
- Integrer (Int): Es un número que sirve para definir multitud de cosas. Por ejemplo la cantidad de objetos en una receta o la velocidad de crafteo de un horno u otros procesos.

### Arrays.
 - Son conjuntos de ItemID, ModID, Tags, RecipeID, Boolean, Integrer (Int) o conjuntos de Arrays (que se llaman Arrays indexados) que sirven para agrupar distintos objetos. Siempre se definen entre []. Sus usos son múltiples, desde definir ingredientes o resultados de recetas hasta refinado de código. Los componentes no se pueden mezclar (ItemID + ModID, por ejemplo) salvo en el caso de ItemID+Tags, ya que al fin y al cabo están referenciando lo mismo: un objeto dentro del juego.

 ### Var, Let y Const (y global.const).

 - Var: Casi no se usa. Se puede re-definir dentro del código, causando algunos problemas
 - Let: Es la más utilizada. Te permite gererar una variable (darle nombre a un array) para utilizarla dentro del código.
 - Const: Funciona de la misma forma que Let, pero con la posibilidad de definirla con ámbito global y que funcione en todos tus scripts.

### Orden del código y prioridades de archivo.

- El código siempre se lee de arriba a abajo, empezando desde la línea 1 hasta el final del archivo.
- Para definir las prioridades de los archivos usamos 'priority: int', donde int es un número entero. Cuanto más alto sea el número, antes se va a cargar dentro de KubeJS.

### ¿Qué es un evento?

-Un evento (event) es aquello que pasa dentro de Minecraft y que Kubejs nos permite detectar para modificar, añadir o eliminar características dentro del juego. Hay multitud de variedad y cada uno tiene su lugar en las carpetas antes mencionadas. Ten en cuenta que puede que los eventos funcionen de manera diferente dependiendo de en qué carpeta lo pongas. Ejemplo:

ServerEvents.recipes(event => { })

### ¿Qué es un callback?

- Un callback (apodo) es el nombre que le damos dentro del código a nuestro evento para referirnos a él y poder modificarlo. Este apodo se define justo después del evento y debemos utilizarlo dentro de

### ¿Qué es un bloque de código (block code)?

### ¿Qué es un método (method)?

### ¿Qué son los métodos encadenados (chained methods)?

### ¿Usar /reload o restart?
