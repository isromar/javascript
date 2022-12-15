const rl = require('readline-sync');
let v = [];
let count = 10;
let texto;

for (let i = 0; i < count; i++) {
    do {
        texto = rl.question('¿Dame número: ' + i + '?');
    } while (isNaN(texto));
    v[i] = Number(texto);
}

console.log(v);