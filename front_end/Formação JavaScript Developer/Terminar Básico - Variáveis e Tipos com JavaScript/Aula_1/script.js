function palindromo() {
  let frase = prompt("Digite para verificarmos se a palavra é palíndromo");
  //  let contrario = "rota met em amoR";
  let fraseContraria = frase.split("", frase.length).reverse();
  fraseContrario = String(fraseContraria).replaceAll(",", "").toString();

  if (frase === fraseContrario) {
    alert("É uma palavra palíndromo");
  } else {
    alert("Não é um palíndromo");
  }
}

palindromo()
/////////////////////////////////////////////////////////////
