const precoEtanol = 4.20;
const precoGasol = 5.59;
const gastoMedKM = 18;
const dist = 100;

const valorGastoEtanol = (dist / gastoMedKM) * precoEtanol
console.log('Etanol: R$', valorGastoEtanol.toFixed(2));

const valorGastoGas = (dist / gastoMedKM) * precoGasol
console.log('Gasolina: R$', valorGastoGas.toFixed(2));