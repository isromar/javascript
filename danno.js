const rl = require('readline-sync');
let personaje = rl.question('Seleccione tipo de personaje caballero o clérigo (cab/cle): ');
let dannoBase;
const dannoBaseClerigo = 620;
const dannoBaseCaballero = 850;
let danno = -1;

if (personaje == 'cab') {
    dannoBase = dannoBaseCaballero;
    let arma = rl.question('Qué tipo de arma llevas? (doble/daga/otra): ');

    if (arma == 'doble') {
        danno = dannoBase * 2;
    }
    if (arma == 'daga') {
        danno = dannoBase * 0.8;
    }
}

if (personaje == 'cle') {
    dannoBase = dannoBaseClerigo;
    danno = dannoBase;
    let enemigo = rl.question('Enemigo no-muerto? (s/n): ');
    let armaClerigo = rl.question('Arma bendecida? (s/n): ');

    /* Consultarle qué ocurre si se altera el orden ¿mejor añadir if para evitar problemas que minimizar código?*/
    if (enemigo == 's') {
        danno = danno + dannoBase * 0.15;
    }
    if (armaClerigo == 's') {
        danno = danno + dannoBase * 0.18;
    }
} else console.log('El personaje ha de ser (cab/cle)');

console.log('Total daño: ' + danno);