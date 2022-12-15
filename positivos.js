const rl = require('readline-sync');
let numeroPos = 0;
let suma = 0;
let contador = 0;
let media = 0;

do {
    suma += Number(numeroPos);
    contador++;
    numeroPos = rl.question('Introduce un número: ');
} while (numeroPos > 0)

media = suma / (contador - 1);

console.log(media);