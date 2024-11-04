const nome = "Matéria ate que vire um";
const xp = 10000;
let nivel = "";
let cont = 0;

while (cont < 2){
  if (xp < 10) {
    nivel = "Ferro";
  } else if (xp >= 11 && xp <= 20) {
    nivel = "Bronze";
  } else if (xp >= 21 && xp <= 50) {
    nivel = "Prata";
  } else if (xp >= 51 && xp <= 60) {
    nivel = "Ouro";
  } else if (xp >= 61 && xp <= 70) {
    nivel = "Platina Diamante";
  } else if (xp >= 81 && xp <= 90) {
    nivel = "Ascendente";
  } else if (xp >= 91 && xp <= 10) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  console.log(`O Herói de nome ${nome} está no nível de ${nivel} em ${xp} de xp`);
  cont++
}
