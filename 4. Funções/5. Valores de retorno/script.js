// Retorno de uma função

let pedido = {
  id: 1234,
  nome: "Lucca",
  email: "lucca@exemplo.com",
  lanche: 10,
  batataFrita: 3,
  refrigerante: 2,
};

function enviarNotificacao(nome, idPedido, email) {
  console.log(
    `Enviando email para ${email} confirmando o pedido n°${idPedido}`
  );
  console.log(`Mensagem: ${nome} pedido confirmado`);
} // Não possui retorno explicito

enviarNotificacao(pedido.nome, pedido.id, pedido.email);

// Função principal, ela irá calcular e retornar o valor do pedido

function processarPedido(id, item1, item2, item3) {
  let valorTotalPedido = item1 + item2 + item3;
  console.log(`Pedido: ${id} processando`);
  console.log(`O total do pedido é: R$${valorTotalPedido}`);
  return valorTotalPedido; // encerrou a função
}

let retornoDaFuncao = processarPedido(
  pedido.id,
  pedido.lanche,
  pedido.batataFrita,
  pedido.refrigerante
);

console.log(retornoDaFuncao + retornoDaFuncao);
