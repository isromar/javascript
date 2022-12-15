const rl = require('readline-sync');
let vector = [];
let componentesVector = 40;
let valorMinimo = 5;
let valorMaximo = 80;
let numeroRepetido = 25;
let valorAReemplazar = 30;
let valorParaPoner = 45;

// Devuelve un número aleatorio entero entre los valores mínimo y máximo incluídos
function valorAleatorioEntero(minimoValor, maximoValor) {
    let valor = Math.floor((Math.random() * (maximoValor - minimoValor + 1))) + minimoValor;
    return valor;
}

// Devuelve un vector entre dos valores mínimo y máximo incluídos y con tantos componentes como se reciba
function rellenar(componentes, minimo, maximo) {
    for (let i = 0; i < componentes; i++) {
        vector[i] = valorAleatorioEntero(minimo, maximo);
    }
    return vector;
}

// Devuelve el número de veces que está repetido el valor que se recibe en el array
function contar(componentes, repetido) {
    let contador = 0;
    for (let i = 0; i < componentes.length; i++) {
        if (repetido == componentes[i]) {
            contador++;
        }
    }
    return contador;
}

// Devuelve un vector entre dos valores mínimo y máximo incluídos y con tantos componentes como se reciba pero sin repetirlas
function rellenarSinDup(componentes, minimo, maximo) {
    let vectorSinRepetir = [];

    while (vectorSinRepetir.length < componentes) {
        let num = valorAleatorioEntero(minimo, maximo);
        let dup = (contar(vectorSinRepetir, num) > 0);
        if (!dup) {
            vectorSinRepetir.push(num);
        }
    }
    return vectorSinRepetir;
}

// Devuelve el valor máximo de un array
function valorMax(array) {
    let maximoDelArray = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximoDelArray) {
            maximoDelArray = array[i];
        }
    }
    return maximoDelArray;
}

// Devuelve el valor mínimo de un array
function valorMin(array) {
    let minimoDelArray = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimoDelArray) {
            minimoDelArray = array[i];
        }
    }
    return minimoDelArray;
}

// Devuelve las veces que se reemplazar un número por otro, ambos valores recibidos
function reemplazar(numQuitar, numPoner) {
    let contador = 0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] == numQuitar) {
            vector[i] == numPoner;
            contador++;
        }
    }
    return contador;
}

// Devuelve el vector en una línea y el número de elementos que tiene
function mostrar() {
    console.log("El vector es " + vector + " que son " + vector.length + " elementos");
}

// Devuelve el vector recibido pero traspuesto
function trasponer(array) {
    let traspuesto = [];

    for (let i = 0; i < vector.length; i++) {
        traspuesto[i] = vector[vector.length - i - 1]
    }
    return traspuesto;
}

console.log(componentesVector + " valores del " + valorMinimo + " al " + valorMaximo + " : " + rellenar(componentesVector, valorMinimo, valorMaximo));

console.log("El " + numeroRepetido + " aparece " + contar(vector, numeroRepetido) + " vez/veces");

console.log("Máximo del array: " + valorMax(vector));

console.log("Mínimo del array: " + valorMin(vector));

console.log("Remplazo " + valorAReemplazar + " con " + valorParaPoner + ". Hay " + reemplazar(valorAReemplazar, valorParaPoner) + " remplazo/remplazos");

mostrar();

console.log("El vector " + vector + " traspuesto es " + trasponer(vector));

console.log(componentesVector + " valores no repetidos del " + valorMinimo + " al " + valorMaximo + " : " + rellenarSinDup(componentesVector, valorMinimo, valorMaximo));