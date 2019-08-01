# FORMACIÓN JAVASCRIPT EPHM
## ¿Qué vamos a tratar?
###### Conceptos básicos para iniciarnos en el mundo de la programación web con javascript

## Indice :clipboard:

- ¿Qué es JavaScript?
- Variables
- Arrays
1. Bucles :pushpin:
    - for
    - while
    - do while
1. Condicionales :pushpin:
    - if {}
    - if {} else {}
    - if {} else if {}
- Funciones
- Local Storage
- DOM
- POO en JavaScript
- JSON
- Extra
- Ejercicios :tada:

## ¿Qué es JavaScript?

Es un lenguaje de programación interpretado que te permite realizar actividades en una página web.
Se usa principalmente **del lado del cliente**, aunque puede existir código javascript del lado del servidor.
Para programar con javascript necesitamos un **editor de texto y un navegador**.

###### Creando nuestro primer Hello World.
Podemos utilizar como editor de texto, Atom, VSCODE, Brackets...
Yo voy a utilizar VSCODE.
Abrimos la terminal, nos posicionamos en el escritorio de nuestro ordenador y escribimos
```
mkdir learning_js
```
con esto vamos a crear una carpeta con ese nombre donde vamos a almacenar todos nuestros archivos.
Con el comando:
```
cd learning_js
```
entraremos a esa carpeta, luego de esto crearemos un archivo .html que se llamará hello_world.html
```
touch hello_world.html
```
En ese archivo podremos lanzar nuestro primer mensaje al navegador metiendo código javascript dentro de un bloque de html.
> *lo podéis ver en el archivo hello_world.html de este repo*

## Variables

Todas las variables se crean con las palabras reservadas var, let o const.
En que se diferencian cada una lo tocaremos más tarde.

Existen distintos tipos de variables aunque se creen de la misma manera:
- Numéricas
- Strings
- Booleanas

Estas variables son case sensitive, lo que quiere decir que las variables:
```
var nombrePersona;
var nombrepersona;
```
no son la misma variable.
Normalmente para que nuestro código quede más limpio y mas entendible los nombres de las variables deben tener un significado.

> *podéis ver más sobre las variables en el archivo variables.js de este repo*

###### Diferencia entre var, let y const

> *podéis ver la diferencia entre var, let y const en el archivo variables.js de este repo*

## Arrays :wrench:

Son un conjunto de datos ordeandos por posiciones. En javascript, estos datos pueden ser de cualquier tipo. Podemos tener en la primera posición un number, en la segunda un String y en la tercera un boolean.
Las posiciones empiezan desde 0 siendo la primera posición y (array.length-1) la última posición.
```
let my_array = ['primero', 22, true]; // La posición 0 sería 'primero'
console.log(my_array[3]); // true
```

###### Formas de crear un array 

```
let colores = new Array();
let colores = new Array(3); // lo inicializamos con tres posiciones
let colores = new Array('amarillo', 'azul', 'rojo');
let colores = [];
let colores = ['amarillo', 'azul', 'rojo'];
```

> *profundizaremos más en los arrays en el archivo arrays.js de este repo*

# Bucles :arrows_counterclockwise:

Es la repetición de un trozo de código un determindo número de veces.
Normalmente se usa para recorrer arrays, o cuando necesitamos ejecutar una acción un determinado número de veces.

- for
- while
- do while 
- for...of
- for...in

**for**:
Lo usamos para realizar una sentencia un número de veces, viene acompañado de un contador.

```
for(let i = 0; i < 5; i++){
    // bloque de código
}
```

**while**:
Ejeuta un bloque de código siempre que se cumple la condición.

```
while(contador < 2) {
    // bloque de código
}
```

**do while**:
Similar al bucle while solo que está vez el bloque de código se ejecutará al menos una vez.

```
do{
    //bloque de código
} while (contador < 5);
```

**for...of**:
Se usa para recorrer arrays, recorre hasta la última posición del array, en cada iteración nos devuelve el valor de la posición.

```
for(let color of colores){
    console.log(color); // azul
}
```

**for...in**:
Lo usamos también para recorrer arrays, está vez cada iteración nos devolverá el indice o posición.

```
for(let indice in colores){
    console.log(indice); // 0 en la primera iteración o si el array es asociativo, nos devolverá el indice.
}
```
> *profundizaremos más en los bucles en el archivo loops.js de este repo*

# Condicionales

**if**:
Por medio de un *if* se indica una condición que si se llega a cumplir se ejecuta el bloque de código que existe dentro de la condición.

```
if(true){
    // bloque de código a ejecutar
}
```

**else**:
Por medio de este *else* se establece una alternativa a la condición propuesta en el *if*.
```
if(false){
    // no se cumple la condición
} else {
    // bloque de código a ejecutarse
}
```

**if...else if**:
Por medio de este *if...else* se indica que de no cumplirse la condición del *if* previo puede llegar a cumplirse la del *if...else if* y asi ejecutar el bloque de código de esta condición.

```
if(false){
    // no se cumple la condición
} else if (true){
    // se cumple la condición, ejecuta este bloque de código
} else {
    // no ejecuta este bloque de código
}
```

**switch**:
Con el switch podemos listar una serie de condiciones, que de cumplirse ejecutarían el bloque de código correspondiente.

```
switch (variable){
    case(valor1):
        …enunciados a ejecutar para ese valor…
        break;
    case(valor2):
        …enunciados a ejecutar para ese valor…
        break;
    case(valor3):
        …enunciados a ejecutar para ese valor…
        break;
    default:
        …enunciados a ejecutar cuando el valor no 
        coincida con ninguno de los anteriores…
        break;
}
```

> *profundizaremos más en los condicionales en el archivo conditionals.js de este repo*

# Funciones:

Es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.
Pueden ser reutilizadas.

Las funciones sirven para estructurar nuestro código de manera que si una operación se va a realizar repetidas veces lo mejor será crear una función y reutilizarla siempre que sea necesario.
Tienen un nombre y pueden o no tener argumentos (separado por comas), también pueden o no devolver un valor.

```
function suma(){
    // bloque de código
}

function resta(numero1, numero2){
    resultado = numero1 - numero2;
    return resultado;
}
```
Para que esta función se ejecute es necesario llamarla cuando sea necesario.

```
let resultado_resta = resta(4,2);
console.log(resultado_resta); // 2
```

```
if(numero < 5){
    suma();
} else {
    // bloque de código
}
```

> *profundizaremos más en las funciones en el archivo functions.js de este repo*

# LocalStorage / SessionStorage :open_file_folder:

El Web Storage te permite almacenar elementos con indice/valor en el navegador.
Estos elementos permanecerán después de refrescar la página (sessionStorage) y también de un refresco total del navegador (localStorage).

A diferencia de las cookies, estos elementos no se envían al servidor con cada petición.
También, el servidor no puede manipular estos elementos a través de las cabeceras de HTTP.

El localStorage y el sessionStorage tienen los mismos métodos y propiedades:

- setItem(key, value) – store key/value pair.
- getItem(key) – get the value by key.
- removeItem(key) – remove the key with its value.
- clear() – delete everything.
- key(index) – get the key on a given position.
- length – the number of stored items.

via (https://javascript.info/)

**Guardando un elemento en el localStorage**:
```
localStorage.setItem('name', 'jacobo');
```

**Consiguiendo el elemento**:
```
alert( localStorage.getItem('name'));
```

Estos valores que se almacenan son siempre strings. Sin embargo, podemos usar JSON para almacenar estos objetos:
```
let user = {
    name: 'Jacobo',
    surname: 'Ospina'
}
//Almacenamos el objeto convirtiendolo a string.
localStorage.setItem('user', JSON.stringify(user));
```

Para recoger este objeto y parsearlo nuevamente al formato JSON:
```
//Recogemos el objeto y lo parseamos a JSON
JSON.parse(localStorage.getItem('user'));
```

> *profundizaremos más en el localStorage y sessionStorage en el archivo store.js de este repo*

# DOM:

La manera en la que el contenido del Documento es modificado o accedido es a través del Document Object Model.
La manera en la que se organizan los objetos es de manera jerárquica.

Podemos acceder a los elementos del HTML a través de los id (único para cada elemento), de las clases, del tagName, etc.

```
document.getElementById('id');
document.getElementsByClassName('class');
```

> *profundizaremos más en el DOM en el archivo dom.js de este repo*

# POO en JavaScript:

Es un paradigma que se basa en la abstracción para crear objetos que se asemejen a los del mundo real.

**Terminología**

1. Clase
    - Define las características del Objeto.
2. Objeto
    - Una instancia de una Clase.
3. Propiedad
    - Una característica del Objeto, como el color.
4. Método
    - Una capacidad del Objeto, como caminar.
5. Constructor
    - Es un método llamado en el momento de la creación de instancias.
6. Herencia
    - Una Clase puede heredar características de otra Clase.
7. Encapsulamiento
    - Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
8. Abstracción
    - La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
9. Polimorfismo
    - Diferentes Clases podrían definir el mismo método o propiedad.

via (https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)

**Objetos personalizados**:

JavaScript es un lenguaje basado en prototipos. La creación de objetos no conlleva el uso de una clase.

En lugar de usar clases, utiliza funciones, y definir esas "clases" es tan sencillo como definir una función.

```
function Animal(){}
```

Al ser un objeto lo normal es que la primera letra de la función vaya con mayúsculas.
Instanciar una clase, en este caso una función sería tan simple como:
```
let animal1 = new Animal();
```

Al instanciar un objeto estamos llamando al **constructor**. Este constructor es un método de la clase. En javascript el constructor es la propia función. Al llamar a la función estamos llamando al constructor y por lo tanto estamos instanciando el objeto.
Las **propiedades** son las caracteristicas que va a tener nuestro objeto (color, peso, raza, etc). Se definen dentro de este constructor o de esta función. Para que podamos trabajar con estas **propiedades tenemos que hacer uso de la palabra reservada _this_ seguida de la propiedad**.
Para acceder a la propiedad desde fuera de la clase lo haríamos: **Instancia._propiedad_**.

```
function animal(raza){
    this.raza = raza;
}

let perro = new Animal('perro');
let gato = new Animal('gato');
```

Podemos también definir métodos a nuestros objetos, estos serían las acciones de dicho objeto (caminar, saltar, etc).

```
function animal(raza){
    this.raza = raza;
}

let perro = new Animal('perro');
perro.prototype.ladrar = function (){
    alert('guau guau');
};
```
## Herencia:
Ver: (https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)

Para aprender más sobre: [Prototypes](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)

# JSON:

JavaScript Object Notation, es un formato para compartir datos.

Lo podemos utilizar a la hora de enviar datos, de organizar los datos que nos vengan de un formulario, al almacenar datos, etc.

La sintaxis y la estructura cuenta con un indice y un valor:
```
{
    "key": "value"
}
```
Los diferentes tipos de datos que pueden ser usados en un JSON son:
- strings (entre comillas)
- numbers
- objects
- arrays
- Booleans
- null

Un **ejemplo** de un JSON sería:
```
let coche = {
    marca: "Renault",
    modelo: "Clio",
    color: "rojo",
    deportivo: false,
    ruedasRepuesto: 1
    accesorios: [
        "aleron",
        "turbo"
    ],
    propietario:{
        nombre: "Jacobo",
        apellido: "Ospina",
        edad: 24
    }
};
```

**Métodos de un JSON**:
```
JSON.stringify() // Explicado con anterioridad
JSON.parse()
```

# Incluir código javascript en un documento HTML:

Podemos incluir este código JavaScript en nuestro documento de html.
Tenemos dos opciones de hacerlo:

1. Bajo la etiqueta script
```
<script></script>
```
2. Con archivo distinto e importándolo en el documento html
```
<script src="ubicacion.js"></script>
```

Si el archivo lo incluimos  dentro del head del html, cargará todo el script antes que el resto de etiquetas del body, por tanto podremos tener problemas a la hora de acceder al DOM. En estos casos es recomendable incluir el archivo .js al final dek body o llamar a un evento desde el archivo js para que una vez se haya cargado todo el documento, te cargue el script.
```
window.addEventListener('load', function(){
    // todo el bloque de código
});
```

**¿Cuando usar una forma u otra?**

La respuesta es que si el código es muy grande y es un proyecto extenso será mejor ubicarlo en otro archivo distinto, de esta manera tendremos nuestro código mas estructurado y separado del HTML.

Si el script del que necesitamos hacer uso es de apenas unas lineas podemos meter el código directamente en el HTML.

# ¿PREGUNTAS?

# FIN :tada: :tada: :tada: :tada: :tada:

