const rl = require('readline-sync');
let gasto = rl.question('Dame el gasto anual: ');

let bronce = 25.34; /* Más de 25.34 y menos de 57.16 */
let plata = 57.16;  /* Más de 57.16 y menos de 68.04 */
let oro = 68.04;  /* Más de 68.04 */
let categoria = 'estandar';

if (gasto >= 0) {
    if (gasto > oro) {
        categoria = 'oro';
    } else if (gasto > plata) {
        categoria = 'plata';
    } else if (gasto > bronce) {
        categoria = 'bronce';
    }
    console.log('Categoría cliente: ' + categoria);
} else {
    console.log('No es válido');
}

