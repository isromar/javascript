const rl = require('readline-sync');

let hora = rl.question('Dime la hora: ');
let minutos = rl.question('Dime los minutos: ');
/* Comprueba que sean números y positivos */
if (!(isNaN(hora)) & !(isNaN(minutos)) & hora >= 0 & minutos >= 0) {

    /* Comprueba que sean menores que 23 horas y 59 minutos */
        if (hora > 24 || minutos > 59) {
        console.log('¡ Te pasaste !');

        /* Si la hora es mayor de 12 la pasa a AM */
    } else if (hora > 12) {
        console.log('Hora: ' + (hora - 12) + ':' + minutos + ' PM')
        /* Al ser menor de 12 h pone directamente la hora en AM' */
    } else {
        console.log('Hora: ' + hora + ':' + minutos + ' AM');
    }
} else {
    console.log('Datos incorrectos');
}