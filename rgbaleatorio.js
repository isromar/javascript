function daColorRGBAleatorio() {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);

    return ("(" + red + "," + green + "," + blue + ")");
}

console.log(daColorRGBAleatorio());