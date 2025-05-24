// Funções de Alta Ordem
// Recebem uma ou mais funções como argumento
// Recebem uma função como resultado

function aplicarOperacao(x, operacao) {
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado);

// Recebem uma função como resultado
function criarIncrementador(incremento) {
  return function (numero) {
    return numero + incremento;
  };
}

const incrementarPorDois = criarIncrementador(2);

console.log(incrementarPorDois(2)); // 7
