function calcularImposto(valorProduto, taxaImposto = 0.08875) {
  return valorProduto - valorProduto * taxaImposto;
}

console.log(calcularImposto(2012, 0.14));
console.log(calcularImposto(303));
console.log(calcularImposto(938, 0.3));
