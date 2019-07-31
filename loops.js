let colors = ['amarillo', 'azul', 'rojo', 'verde'];
let cont = 0;
let contador = 0;

for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element); // nos mostrará el valor de esa posición por cada vuelta que de el bucle
}

do{
    console.log(cont); // el bucle se ejecutará hasta que cont sea 4 o mayor
    cont++;
}while(cont < 4);

while(contador < 8){
    console.log(contador); // el bucle se ejecutará hasta que contador sea 8 o mayor
}

for (const color of colors) {
    console.log(color); // nos mostrará un valor distinto por cada iteración
}

for (const index_color in colors) {
    console.log(index_color); // nos mostrará un index distinto por cada iteración
}