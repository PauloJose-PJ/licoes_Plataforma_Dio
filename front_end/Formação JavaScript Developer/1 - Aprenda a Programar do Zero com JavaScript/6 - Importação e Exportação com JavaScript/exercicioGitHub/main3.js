const { gets, print } = require("./funcoes_auxiliares3");

const NumeroPAR = gets();
let resultado = "";

for (let i = 0; i < NumeroPAR; i++) {
  const numero = gets();
  if (numero % 2 == 0) {
    resultado += `${numero}\n`;
  }
}

print(resultado);
