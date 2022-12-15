const rl = require('readline-sync');
let texto = rl.question('Dame un número: ');

if (!isNaN(texto)) {
    console.log('Es un número');
} else console.log('No es un número');