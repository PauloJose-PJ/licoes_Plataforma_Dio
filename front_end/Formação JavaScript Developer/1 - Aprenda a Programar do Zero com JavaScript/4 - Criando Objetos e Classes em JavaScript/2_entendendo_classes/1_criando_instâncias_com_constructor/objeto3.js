class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const vitor = new Pessoa('vitor', 26);
const renan = new Pessoa('renan', 31);

console.log(vitor);