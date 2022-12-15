const rl = require('readline-sync');
let cantidad = rl.question('Dame una cantidad: ');
let descuento = rl.question('Dame una descuento en %: ');
let importe = cantidad - (cantidad * descuento / 100);

console.log('El precio es: ' + importe + ' €');