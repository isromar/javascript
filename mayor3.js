const rl = require('readline-sync');

/* Pide dos números al usuario */
let numero1 = rl.question('Dime un número: ');
let numero2 = rl.question('Dime otro número: ');
let numero3 = rl.question('Dime otro número: ');
let mayor, medio, menor;



/* Comprueba que sean números */
if (!(isNaN(numero1)) && !(isNaN(numero2)) && !(isNaN(numero3))) {

    numero1 = Number(numero1);
    numero2 = Number(numero2);
    numero3 = Number(numero3);

    /* Comprueba si los números son iguales */
    if (numero1 > numero2 && numero1 > numero3) {
        console.log('mayor: ' + numero1);
    } else {
        if (numero2 > numero3) {
            console.log('mayor: ' + numero2);
        } else {
            console.log('mayor: ' + numero3);
        }
    }
}
