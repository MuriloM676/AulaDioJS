class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever(params) {
        console.log(`Meu nome eh ${this.nome} e minha idade eh ${this.idade}`);
        
    }
}


function comparaPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} eh mais velho que ${p2.nome}`)
    } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} eh mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} tem a mesma idade ${p2.nome}`)
    }
}

const murilo = new Pessoa('Murilo', 23);
const renan = new Pessoa('Renan', 29);

comparaPessoas(murilo, renan);
