function calcImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function clasImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc > 18.5 && imc < 25) {
        return 'Peso normal'
    } else if (imc > 25 && imc < 30) {
        return 'Acima do Peso'
    } else if (imc > 30 && imc < 40) {
        return 'Obeso'
    } else {
        return 'Obesidade Grave'
    }
}

function main() {
    const peso = 85;
    const altura = 1.80;

    const imc = calcImc(peso, altura)
    console.log(clasImc())
}

main();