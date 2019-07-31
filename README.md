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
- Cookies :cookie: :cookie:
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

Existen distintos tipos de variables aunque se cree de la misma manera:
- Numéricas
- Strings
- Booleanas

Estas variables son case sensitive, lo que quiere deccir que las variables:
```
var nombrePersona;
var nombrepersona;
```
no son la misma variable.
Normalmente para que nuestro código quede más limpio y mas entendible los nombres de las variables deben tener un significado.

> *podéis ver más sobre las variables en el archivo variables.js de este repo*

###### Diferencia entre var, let y const

> *podéis ver la diferencia entre var, let y const en el archivo variables.js de este repo*

## Arrays

Son un conjunto de datos ordeandos por posiciones. En javascript, estos datos pueden ser de cualquier tipo. Podemos tener en la primera posición un number, en la segunda un String y en la tercera un boolean.
Las posiciones empiezan desde 0 siendo la primera posición y (array.length-1) la última posición.
```
let my_array = ['primero', 22, true]; // La posición 0 sería 'primero'
console.log(my_array[3]); // true
```

###### Formas de crear un array :wrench:

```
let colores = new Array();
let colores = new Array(3); // lo inicializamos con tres posiciones
et colores = new Array('amarillo', 'azul', 'rojo');
let colores = [];
let colores = ['amarillo', 'azul', 'rojo'];
```

> *profundizaremos más en los arrays en el archivo arrays.js de este repo*







