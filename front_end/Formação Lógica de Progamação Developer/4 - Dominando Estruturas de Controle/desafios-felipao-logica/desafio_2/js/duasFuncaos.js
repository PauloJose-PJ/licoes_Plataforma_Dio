// https://web.dio.me/course/funcoes-com-retorno/learning/31fc8eda-fbe9-46ca-992f-4f238951b338?back=/track/formacao-logica-de-programacao&tab=undefined&moduleId=undefined
//----------------------------------------------------------------------------------------------------------------------------------------=


// 2 - As duas funções são realmente interessante pois para melhor organização só modificar o parâmetro de determinada função importante em locais de fácil acesso mudará outras funções inteiras sendo assim uma forma muito útil.


let result = play(55, 15);

function play(vit, der) {
  return vit - der;
}
console.log(result);

function game(result) {
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

let fist = game(result);
console.log(fist);
