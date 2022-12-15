/* Devuelva el área de un cuadrado
    @param lado 

*/

const l = 5;

function areaCuadrado(lado) {
    if (isNaN(l)) return -1;

    return lado * lado;
}

function perimetroCuadrado(lado) {
    if (isNaN(l)) return -1;
    return lado * 4;
}

console.log(areaCuadrado(l));
console.log(perimetroCuadrado(l));