let condition = true;

if(condition) { // Si la condición es true, también se puede poner con (condition == true)
    alert('He entrado en la condición!');
} else {
    alert('Aqui no voy a entrar');
}

if(condition == false){ // Como la condición no se cumple se ejecuta el else
    alert('No he entrado!');
} else {
    alert('Entro porque no se cumple la condición');
}

if(condition == false){
    alert('No he entrado!');
} else if (condition){ // Esta es la condición que se cumple
    alert('He entrado en la condición!');
} else {
    alert('Esto no debería ejecutarse');
}


// SWITCH
console.log('Comienza el switch')

let personaje = 'Chuck Norris';

switch(personaje){
    case ('Iron Man'): console.log('El personaje es Iron Man');
    break;
    case ('Chuck Norris'): console.log('El personaje es Chuck Norris');
    break;
    default: console.log('Ha ocurrido un problema');
    break;
}