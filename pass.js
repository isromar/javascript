const rl = require("readline-sync");
let passBuena = "1234";
let pass = "";
intentos = 3;

while ((pass != passBuena) && (intentos > 0)) {
    pass = rl.question('Dame password: ');
    intentos--;
    console.log('Quedan ' + intentos + ' intentos');
}
