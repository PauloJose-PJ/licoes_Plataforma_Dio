const pessoa = {
  nome: "Vitor J Guerra",
  idade: 25,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

pessoa.descrever = function () {
  console.log(`Meu nome é ${this.nome}`);
};

pessoa.descrever();
