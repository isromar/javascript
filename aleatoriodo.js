const umbral = 0.95;

let contador = 1;
let n = Math.random();

do {
    n = (Math.random()).toFixed(4);
    contador++;
} while (n <= umbral);

console.log('Número: ' + n + ' después de: ' + contador + ' veces');