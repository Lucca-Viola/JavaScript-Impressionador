// function nomeFuncao(PARAMETRO) { INSTRUÇÃO}

function soma(numeroUm, numeroDois) {
  return numeroUm + numeroDois;
}

//  nomeFunction(ARGUMENTO) - Chamada da função (executa o bloco de instruções)

console.log(soma(10, 20));

function calcularPrecoTotal(precoUnitario, quantidade) {
  let total = precoUnitario * quantidade;
  console.log(`O preço total da compra é R$${total}`);
}

let camiseta = 30;
let quantiade = 7;

// calcularPrecoTotal(30, 3);
calcularPrecoTotal(camiseta, quantiade);
