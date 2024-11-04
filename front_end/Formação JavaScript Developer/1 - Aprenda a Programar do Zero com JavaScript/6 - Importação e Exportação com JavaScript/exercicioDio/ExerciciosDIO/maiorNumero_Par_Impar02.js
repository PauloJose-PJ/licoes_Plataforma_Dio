// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require("./funcoes_auxiliares02.js");

const parEimpar = gets();

let numeros = 0;
function addIpPa() {
 for (let i = 0; i < parEimpar.length; i++) {
   numeros += parEimpar[i];
   
//    if (numeros % 2 == 0) {
//      numeros += numeros;
//      Math.max(numeros);
//      continue;
//    }
//    if (numeros % 2 == 1) {
//      numeros += numeros;
//      print(`O número é Ímpar`);
//      Math.max(numeros);
//      continue;
//    }
  }
  console.log(numeros)
}

print(addIpPa())
