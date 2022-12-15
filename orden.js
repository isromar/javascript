const rl = require('readline-sync');
let nombre = '';
numero = 5;
listado = [];

for (let i = 0; i < numero; i++) {
    nombre = rl.question('Dame el nombre ' + (i + 1) + ' : ');
    nombre = nombre.toLowerCase();
    listado.push(nombre);
    listado = listado.sort();
}

console.log(listado);