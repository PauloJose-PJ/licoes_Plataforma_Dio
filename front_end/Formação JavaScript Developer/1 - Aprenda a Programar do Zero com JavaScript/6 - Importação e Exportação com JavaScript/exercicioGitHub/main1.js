const { gets, print } = require("./funcoes_auxiliares1");


const tabuada = gets();
let resultado = "";

for (let i = 1; i <= 10; i++) {
  resultado += (`${tabuada}x${i} = ${tabuada * i}\n`)  
}

print(resultado);
