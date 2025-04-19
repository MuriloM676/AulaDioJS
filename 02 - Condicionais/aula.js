const nmr = 10;

const verPar = (nmr % 2) === 0;

if (nmr === 0) {
    console.log('O numero e invalido')
} else if (verPar === true) {
    console.log("O numero e par");
} else {
    console.log("O numero nao e par");
}