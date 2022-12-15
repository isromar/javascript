let filas = 9;  /* Filas que tendrá el rombo, los números pares los considera como (número par + 1) */
let texto = '';
let mitad = parseInt(filas / 2); /* Calcula la mitad y lo trunca para dejarlo sin decimales */
let dibujo = '*'    /* Carácter con que se hace el rombo */

for (let i = 0; i <= mitad; i++) { /* Hace la mitad de filas +1 */

    texto = ''.padStart(mitad - i, ' ');    /* Pone los espacios iniciales */
    texto += ''.padEnd((2 * i) + 1, dibujo);   /* Coloca los asteriscos de la fila */

    console.log(texto);
}

for (let i = mitad; i > 0; i--) {   /* Hace el resto del rombo */

    texto = ''.padStart(mitad - i + 1, ' ');    /* Pone los espacios iniciales */
    texto += ''.padEnd((2 * i) - 1, dibujo);    /* Coloca los asteriscos de la fila */

    console.log(texto);
}