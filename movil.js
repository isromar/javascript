const rl = require('readline-sync');
let minutos = rl.question('¿Qué minutos has hablado?: ');
let factura;

factura = 10;

if (minutos > 240) {
    factura += (minutos - 240) * 0.20;
    minutos = minutos - (minutos - 240);
}
if (minutos > 180) {
    factura += (minutos - 180) * 0.10;
}
console.log('La factura asciende a ' + factura + ' €')