const rl = require('readline-sync');
let asteriscos = rl.question('¿Cuanto asteriscos quieres poner?: ');
let cadena = '';

for (let i = 1; i <= asteriscos; i++) {
    cadena = cadena + '*';
}
console.log(cadena);