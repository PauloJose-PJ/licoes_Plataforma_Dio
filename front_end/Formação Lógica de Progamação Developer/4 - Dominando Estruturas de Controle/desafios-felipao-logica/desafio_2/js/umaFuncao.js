// https://web.dio.me/course/funcoes-com-retorno/learning/31fc8eda-fbe9-46ca-992f-4f238951b338?back=/track/formacao-logica-de-programacao&tab=undefined&moduleId=undefined
//----------------------------------------------------------------------------------------------------------------------------------------=

// 1 - Uma função pode ser uma boa escolha se não tiver muitas em uma página, como sites de uma página, landing-page, blogue, etc.. ou seja  só ou aquelas que não tem tantas ações.

let play = game(100, 5);

function game(vit, der) {
  let result = vit - der;

  if (result <= -1) {
    return `Nesse jogo não existe pontuação negativa`;
  }
  if (result < 10) {
    trofeu = `Ferro`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  } else if (result > 10 && result < 20) {
    trofeu = `Bronze`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  } else if (result > 20 && result < 50) {
    trofeu = `Prata`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  } else if (result > 50 && result < 80) {
    trofeu = `Ouro`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  } else if (result > 80 && result < 90) {
    trofeu = `Diamantes`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  } else if (result > 90 && result < 100) {
    trofeu = `Lendário`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  } else {
    trofeu = `Imortal`;
    return `O Herói de saldo de ${result} está no nível de: ${trofeu}`;
  }
}

console.log(play)
