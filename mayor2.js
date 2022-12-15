const rl = require('readline-sync');

/* Pide dos números al usuario */
let numero1 = rl.question('Dime un número: ');
let numero2 = rl.question('Dime otro número: ');

/* Comprueba que sean números */
if (!(isNaN(numero1)) & !(isNaN(numero2))) {

    /* Comprueba si los números son iguales */
    if (numero1 === numero2) {
        console.log('Son iguales');

        /* Comprueba si el numero1 es mayor que el numero2 */
    } else if (numero1 > numero2) {
        console.log('El número: ' + numero1 + ' es mayor que ' + numero2);
    } else {
        console.log('El número: ' + numero2 + ' es mayor que ' + numero1);
    }
} else {
    console.log('Solo se admiten números');
}