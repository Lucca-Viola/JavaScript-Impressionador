function descreverProduto(nome, preco = 0) {
  console.log(`Produto: ${nome}, Preço: R$${preco}`);
}

descreverProduto("Notebook");
descreverProduto("Celular", 1500);
descreverProduto("Telescópio", 25000);
