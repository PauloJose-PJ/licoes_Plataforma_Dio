// https://web.dio.me/course/funcoes-com-retorno/learning/31fc8eda-fbe9-46ca-992f-4f238951b338?back=/track/formacao-logica-de-programacao&tab=undefined&moduleId=undefined
//----------------------------------------------------------------------------------------------------------------------------------------=

// 3 - Funções com repetições serão inevitáveis, pois acionando um botão levará a outra ação que talvez estará na mesma página carregando vários itens diferentes ao mesmo tempo requerento várias funções simultaneas ou em repetições.

let result = play(30, 15);

function play(vit, der) {
  return vit - der;
}

function game(result) {
  for (let i = 1; i <= 7; i++) {
    if (result <= -1) {
      console.log(`Nesse jogo não existe pontuação negativa`);
    }
    if (result < 10) {
      trofeu = `Ferro`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    } else if (result > 10 && result < 20) {
      trofeu = `Bronze`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    } else if (result > 20 && result < 50) {
      trofeu = `Prata`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    } else if (result > 50 && result < 80) {
      trofeu = `Ouro`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    } else if (result > 80 && result < 90) {
      trofeu = `Diamantes`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    } else if (result > 90 && result < 100) {
      trofeu = `Lendário`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    } else {
      trofeu = `Imortal`;
      console.log(`O Herói de saldo de ${result} está no nível de: ${trofeu}`);
    }
  }
}

game(result);
//let fist = game(result);
//console.log(fist);
