
function verificarPromocoes() {
    // TODO: Defina uma constante taxaDesconto com valor 0.10, que representa uma taxa de desconto de 10%:

    const entrada = gets(`Bola: 7, 10.00 - Quebra-Cabeca: 4, 20.00`);
    const produtos = entrada.split(' - ');
    const resultado = [];
    const taxaDesconto = 0.10;

    produtos.forEach(produto => {
        const [nome, quantidadePreco] = produto.split(': ');
        const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number);

        let precoFinal;
        // TODO: Verifique se a quantidade é maior ou igual a 5 e aplicar o desconto se necessário
        // precoFinal = precoUnitario * (1 - taxaDesconto);

        if (quantidade >= 5) {
            precoFinal = precoUnitario * (1 - taxaDesconto);
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
        } else {
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
        }
    });

    print(resultado.join(' - '));
}
// TODO: Chame a função:
verificarPromocoes();
