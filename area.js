const rl = require('readline-sync');

/* Pide dos números al usuario */
let radio = rl.question('Dame el radio: ');
let lado = rl.question('Dime el lado: ');

let areacuadrado, areacircunferencia;

/* Comprueba que sean números */
if (!(isNaN(radio)) && !(isNaN(lado))) {

    /* Convierte a tipo número */
    radio = Number(radio);
    lado = Number(lado);

    /* Calcula áreas */
    areacuadrado = lado * lado;
    areacircunferencia = Math.PI * radio**2;

    /* Compara el área más grande */
    if (areacuadrado > areacircunferencia) {
        console.log('Mayor area del cuadrado: ' + areacuadrado);
    } else {
        console.log('Mayor area de la circunferencia: ' + areacircunferencia);
    }
} else {
    console.log('No es un número');
}