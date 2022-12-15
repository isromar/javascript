const rl = require("readline-sync");
let passBuena = "1234";
let pass = "";

do {
    pass = rl.question('Dame password: ');
} while (pass != passBuena);
