// Usar parametros distintos
function sayMyName(name) {
  console.log("Your name is: " + name);
}
sayMyName("Renan");
sayMyName("Vitor");

// Usar o quadrado para fazer outra conta usando o comando RETURN para returnar o resultado
function quadrado(valor) {
  return valor * valor;
}
const quadradoDez = quadrado(10);
console.log(quadrado(10) * quadrado(10));

//Usar uma função Dinamicamente
function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrecimo = (percentualJuros / 10) * valor;
  return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));

// Programa Principal MAIN
function main() {
  console.log("Programa Princpal")
}
main();