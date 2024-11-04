// https://web.dio.me/course/funcoes-com-retorno/learning/31fc8eda-fbe9-46ca-992f-4f238951b338?back=/track/formacao-logica-de-programacao&tab=undefined&moduleId=undefined
//----------------------------------------------------------------------------------

// 4 - Queria fazer algo especial um mini formulário que carregaria os dados input de vitória e derrota em duas variável cada só que tive dificuldade em acionar o dados de saída output e o acionamento do botão, pois sendo assim não perderei mais tempo e continuarei porque saíria do foco já que usei HTML, CSS e JS. 

let inVit = document.querySelector(".vit");
let inDer = document.querySelector(".der");
let outEnsina = document.querySelector(".ensina");

let vit = Number(inVit);
let der = Number(inDer);


function game(vit, der) {
  let result = vit - der;
  if (vit <= -1 && der <= -1) {
    alert("Você não pode digitar número negativo");
  }
  let trofeu = "trofeus"

  if (result < 10) {
    trofeu = `Ferro`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  } else if (result > 10 && result < 20) {
    trofeu = `Bronze`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  } else if (result > 20 && result < 50) {
    trofeu = `Prata`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  } else if (result > 50 && result < 80) {
    trofeu = `Ouro`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  } else if (result > 80 && result < 90) {
    trofeu = `Diamantes`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  } else if (result > 90 && result < 100) {
    trofeu = `Lendário`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  } else {
    trofeu = `Imortal`;
    outEnsina.textContent = `Sua colocação é de: ${trofeu}`;
  }
}

let btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", game);
