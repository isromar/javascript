const rl = require('readline-sync');
let factorial = 1;
let numero;

do {
    numero = rl.question('Número: ');
} while (isNaN(numero));

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log('Factorial de ' + numero + ' = ' + factorial);
