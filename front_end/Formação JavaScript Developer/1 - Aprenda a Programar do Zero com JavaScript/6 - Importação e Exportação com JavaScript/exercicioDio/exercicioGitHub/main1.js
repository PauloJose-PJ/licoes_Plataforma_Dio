/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require("./funcoes_auxiliares1");
const maiorMenor = gets();
let resposta = "";

for (let i = 0; i < maiorMenor.length - 1; i++) {
  resposta = maiorMenor[i];
  
  if (Math.max(resposta)){
    return `Maior Valor${resposta}`
  }
  if (Math.min(resposta)){
    return `Menor Valor${resposta}`
  }
}

print();
