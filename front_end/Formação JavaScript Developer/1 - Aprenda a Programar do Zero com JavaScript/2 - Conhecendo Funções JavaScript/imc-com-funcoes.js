// REFATORANDO código usando FUNÇÕES
function calcularImc(peso, altura) {
  //Retornando Valor para as variaveis
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }
}

//main
(function () {
  const peso = 119;
  const altura = 1.86;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();
