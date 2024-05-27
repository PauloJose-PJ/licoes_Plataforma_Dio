let elementos = [1, 3, 4, 6, 80, 33, 23, 90];

function parZero() {
  for (let i = 1; i < elementos.length; i++) {
    if (elementos[i] % 2 == 0) {
      elementos = push(elementos[i] * 0);
    }
    if (elementos[i] === null) {
      elementos = 0;
    }
  }
}
parZero();
