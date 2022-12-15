const leerTexto = require('readline-sync');
let fechaHoy = leerTexto.question('Fecha de hoy: ');
let fechaNac = leerTexto.question('nacimiento: ');
console.log(fechaHoy - fechaNac);

/* Calculo de superficie de círculos */
/* Declaro variables y les asigno valores */
let radio1, radio2, superficie1, superficie2, diferenciaSuperficies, pi
radio1 = 5.5
radio2 = 3.5
pi = 3.14159
/* Cálculos de las superficies y diferencia entre ellas */
superficie1 = pi * radio1**2;
superficie2 = pi * radio2**2;
diferenciaSuperficies = superficie1 - superficie2;
/* Saca por pantalla el resultado */
console.log('Superficie 1: ' + superficie1 + ' m');
console.log('Superficie 2: ' + superficie2 + ' m');
console.log('Diferencia: ' + diferenciaSuperficies + ' m');