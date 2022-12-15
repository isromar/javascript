let red = 201;
let green = 255;
let blue = 12;
let valor = 1;
let colorRGB = red + "," + green + "," + blue;

function daColorRGBValor(rgb, valor) {
    // Control de errores con los if
    if ((valor < 0) || (valor > 2)) {
        return -1;
    }
    let cadenaRGB = rgb.split(','); // Separo la cadena de texto RGB con split
    if (cadenaRGB.length != 3) return -2;
    if (isNaN(cadenaRGB[valor])) return -3;

    return cadenaRGB[valor];
}

console.log(daColorRGBValor(colorRGB, valor));