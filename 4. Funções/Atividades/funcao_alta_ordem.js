function executarOperacao(n1, n2, operacao) {
  return operacao(n1, n2);
}

function soma(n1, n2) {
  return n1 + n2;
}

console.log(executarOperacao(3, 7, soma));
console.log(executarOperacao(9, 36, soma));
console.log(executarOperacao(1, -7, soma));
