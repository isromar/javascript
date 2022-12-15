/*const leerTexto = require('readline-sync');
let fechaHoy = leerTexto.question('Fecha de hoy: ');
let fechaNac = leerTexto.question('nacimiento: ');
console.log(fechaHoy - fechaNac);*/

/* Calculo de superficie de círculos */
/* Declaro variables y les asigno valores */
/*let radio1, radio2, superficie1, superficie2, diferenciaSuperficies, pi
radio1 = 5.5
radio2 = 3.5
pi = 3.14159
/* Cálculos de las superficies y diferencia entre ellas */
/*
superficie1 = pi * radio1 ** 2;
superficie2 = pi * radio2 ** 2;
diferenciaSuperficies = superficie1 - superficie2;/*
/* Saca por pantalla el resultado */
/*console.log('Superficie 1: ' + superficie1 + ' m');
console.log('Superficie 2: ' + superficie2 + ' m');
console.log('Diferencia: ' + diferenciaSuperficies + ' m');

console.log(3 > 4 === false);
console.log('valencia' == 'valencia ')
console.log('4 ' === 4)
console.log('A' > 'a')*/

const rl = require('readline-sync');
let pass = 'dam/daw'
let contrasena = rl.question('Dame la contraseña: ');
let fecha = new Date();
if (contrasena == pass) {
    console.log('Bienvenida al sistema, hoy es ' + fecha)
} else {
    console.log('Contraseña incorrecta');
}