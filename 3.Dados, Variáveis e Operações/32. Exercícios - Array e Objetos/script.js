//Exercício 1: Manipulação de Array - parte 1
//a. Crie um array chamado produtos contendo três nomes de produtos.
//b. Acesse e imprima o segundo produto.
//c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.

let produtos = ["Celular", "Tablet", "Computador"];
console.log(produtos[1]);
produtos[2] = "Notebook";
console.log(produtos);

//Exercício 2: Manipulação de Array - parte 2
//a. Crie um array chamado clientes contendo três nomes de clientes.
//b. Adicione um quarto cliente ao array.
//c. Remova o último cliente e imprima o array atualizado.

let clientes = ["João", "Maria", "Pedro"];
clientes[3] = "Ana";
delete clientes[2];
console.log(clientes);

//Exercício 3: Manipulação de Objeto - parte 1
//a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
//b. Acesse e imprima o nome do produto.
//c. Modifique o preço do produto e imprima o objeto atualizado.

let produto = {
  nome: "Celular",
  preco: 2300,
  quantidade: 300,
};
console.log(produto.nome);
produto.preco = 2000;
console.log(produto);

//Exercício 4: Manipulação de Objeto - parte 2
//a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
//b. Adicione uma nova propriedade chamada data.
//c. Remova a propriedade produto e imprima o objeto atualizado.

let venda = {
  cliente: "Lucca",
  produto: "Celular",
  valor: 2500,
};
venda.data = "2025-05-17";
delete venda.produto;
console.log(venda);

//Exercício 5: Manipulação dos Tipos Referências
//a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
//b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
//c. Crie um objeto funcionario e atribua seus valores para um novo objeto novoFuncionario.
//d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi alterado.
let estoque = ["Celular", "Tablet", "Computador"];
let novoEstoque = [...estoque];
novoEstoque[2] = "Notebook";
console.log(novoEstoque);
console.log(estoque);

let funcionario = {
  nome: "João",
  idade: 30,
  cargo: "Desenvolvedor",
};
let novoFuncionario = { ...funcionario };
novoFuncionario.cargo = "Gerente";
console.log(novoFuncionario);
console.log(funcionario);
