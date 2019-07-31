var nameperson = 'Jacobo'; // Estas dos variables son distintas
var namePerson = 'Hugo';

var declared_before;
declared_before = 'Asigno un valor'; // Declaramos la variable y una vez declarada le asignamos el valor

var global_scope = 'var';
let condition_scope = 'let';

if (global_scope == 'var'){
    let condition_scope = 'let_cambia'; // Esta variable pertenece a este scope (dentro de los {})
    global_scope = 'var_cambia';
    console.log(condition_scope);
}

console.log(condition_scope); // Esta variable tendría el valor de let ya que solo adquiere el valor de let_cambia en el scope del if 
console.log(global_scope);

const i = 0;
i = 1; // Nos lanzará un error diciendo que es una variable constante

const person = {
    name: 'Jacobo',
    role: 'boss'
}

person.name = 'Joaquin'; // Si nos dejará cambiarlo porque estamos modificando una propiedad de un objeto JSON

console.log(person);