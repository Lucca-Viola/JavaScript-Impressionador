// Função
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("João")); // Saída: Olá, João!

// Método
const pessoa = {
  nome: "Ana",
  saudacao: function () {
    return `Olá, ${pessoa.nome}!`;
  },
};

console.log(pessoa.saudacao());
