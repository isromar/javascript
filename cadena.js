let cadena = 'My name is Bond, James Bond';
let contar = 0;

/*
for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i]);
    if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {
        contador++;
        vocales += cadena[i] + ' ';
    }
}
*/

contar = cadena.match(/[aeiou]/gi);

console.log('Contiene ' + contar.length + ' vocales: ' + contar);
