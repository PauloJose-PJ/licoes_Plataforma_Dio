class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.ataque = this.ataqueClass();
    }

    ataqueClass() {
        switch (this.classe.toLowerCase()) {
            case 'guerreiro':
                return 'espada';
            case 'mago':
                return 'magia';
            case 'monge':
                return 'artes marciais';
            case 'ninja':
                return 'shuriken';
            default:
                return 'desconhecido';
        }
    }

    executarTipoAtaque() {
       console.log(`Lendário/a ${this.nome} idade de ${this.idade} alto grau de sua classe como ${this.classe} atacou o monstro usando ${this.ataque}`);
    }
}

const heroi1 = new Heroi("Buda", 42, "Monge");
const heroi2 = new Heroi("Shadown", 40, "Ninja");
const heroi3 = new Heroi("Bersek", 39, "Guerreiro");
const heroi4 = new Heroi("Noisés", 33, "Mago"); 

const herois = [heroi1, heroi2, heroi3, heroi4];

for (let heroi of herois) {
    heroi.executarTipoAtaque();
    console.log(`----`);
}

