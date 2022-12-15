let linea = 0;

for (let i = 0; i <= 10; i++) {
    linea += i + '\t';
} linea += '\n'
console.log(linea);

for (let i = 0; i <= 10; i++) {
    linea = i + '\t';

    for (let j = 1; j <= 10; j++) {
        linea += 'x' + i+ '=' +j * i + '\t';

    } console.log(linea + '\t');
}
