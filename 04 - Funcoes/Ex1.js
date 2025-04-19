function meuNome(nome) {
    console.log('Meu nome:', nome)
}

meuNome('Murilo')


function maiorDeIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maiorDeIdade(19))