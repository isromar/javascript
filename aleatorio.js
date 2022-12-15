const umbral = 0.95;

let contador = 1;
let n = Math.random();

while (n <= umbral) {
    n = (Math.random()).toFixed(4);
    contador++;
}
console.log('Número: ' + n + ' después de: ' + contador + ' veces');