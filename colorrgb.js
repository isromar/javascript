const rl = require('readline-sync');
let rojo = rl.question('¿Tiene color rojo (s/n)?: ');
let verde = rl.question('¿Tiene color verde (s/n)?: ');
let azul = rl.question('¿Tiene color azul (s/n)?: ');
let color ='';
ColorSi = 'FF';
ColorNo = '00'

if (rojo == 's' ) color = ColorSi;
else color = ColorNo;

if (verde == 's') color += ColorSi;
else color += ColorNo;

if (azul == 's') color += ColorSi;
else color += ColorNo;

console.log('Valor RGB: ' + color);