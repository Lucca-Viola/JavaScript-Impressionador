//Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00. Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do produto após aplicar o desconto e o imposto.
let produtoUm = 200;
let desconto = 40;
let imposto = 12;

let valorFinal = produtoUm - desconto + imposto;
console.log(`O preço final do produto é de R$${valorFinal}`);

//Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00. Calcule o preço de venda do produto.
let produtoDois = 100;
let lucro = 30;
let precoVenda = produtoDois + lucro;
console.log(`O preço de venda do produto é de R$${precoVenda}`);

//Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.
let orcamento = 250;
let custoProduto = 300;
let descontoDois = 50;
let custoComDesconto = custoProduto - descontoDois;
console.log(`O custo do produto com desconto é de R$${custoComDesconto}`);
let dentroDoOrcamento = custoComDesconto <= orcamento;
console.log(`Está dentro do orçamento? ${dentroDoOrcamento}`);

//Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em umestoque como uma string ("20") e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número. Imprima no console se a quantidade é suficiente ou não.
let quantidadeEstoque = "20";
let quantidadeMinima = 20;
quantidadeEstoque = Number(quantidadeEstoque);
let quantidadeSuficiente = quantidadeEstoque >= quantidadeMinima;
console.log(`A quantidade no estoque é suficiente: ${quantidadeSuficiente}`);

//Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto está disponível e tem a quantidade suficiente.
let produtoDisponivel = true;
let quantidadeEstoqueDois = 10;
let quantidadeMinimaDois = 15;
let produtoSuficiente =
  produtoDisponivel && quantidadeEstoqueDois >= quantidadeMinimaDois;
console.log(
  `O produto está disponível e tem quantidade suficiente: ${produtoSuficiente}`
);
console.log(`O produto está indisponível: ${!produtoDisponivel}`);
