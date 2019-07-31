let colores = [] // inicializamos un array vacio

colores[0] = 'amarillo';
console.log(colores);

colores.push('azul'); // Añadimos a la última posición del array otro elemento más
console.log(colores);

console.log(colores.length); // Nos devuelve la última posición del array

let color = colores.shift(); // Nos devuelve el primer elemento
console.log(color);

colores.unshift('rojo'); // Añadimos a la primera posición del array otro elemento más
console.log(colores);

colores.reverse(); // Invertimos los elementos del array
console.log(colores);

colores.push('verde');
colores.push('marron');

colores.sort(); // Ordenamos el array por orden alfabético
console.log(colores);

/* más métodos interesantes: splice(), slice(), pop()*/

// Como recorrer arrays (los bucles los veremos más adelante)

for(let i = 0; i<colores.length; i++){
    console.log(colores[i]);
}