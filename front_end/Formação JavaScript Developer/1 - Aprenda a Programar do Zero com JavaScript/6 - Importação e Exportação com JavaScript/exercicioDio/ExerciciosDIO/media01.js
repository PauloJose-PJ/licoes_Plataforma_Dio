/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const { gets, print } = require("./funcoes_auxiliares01.js");

const MEDIA = gets();
  if (MEDIA < 0) {
  print(`Número Invalido`)
}else if (MEDIA < 5) {
  print(`Reprovado`);
} else if (MEDIA >= 5 && MEDIA <= 7) {
  print(`Recuperação`);
} else {
  print(`Aprovado`);
}

print(` `);
