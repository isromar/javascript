const rl = require('readline-sync');
let numero = rl.question('Dame un número: ');

for (var i = 2; i <= 5; i++){
    if (numero % i == 0){
        console.log('Es divisible por ' + i);
    }
}
/*
if (numero % 5 == 0){
    console.log('Es divisible por 5';)
}
if (numero % 4 == 0){
    console.log('Es divisible por 4';)
}
if (numero % 3 == 0){
    console.log('Es divisible por 3';)
}
if (numero % 2 == 0){
    console.log('Es divisible por 2';)
}
*/