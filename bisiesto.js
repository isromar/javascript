const rl = require('readline-sync');
let anno = rl.question('¿Qué año es?: ');
if ((anno % 4 === 0) && (anno % 100 !== 0) || (anno % 400 === 0)) {
    console.log(anno + ' SI es año bisiesto');
} else {
    console.log(anno + ' NO es año bisiesto');
}