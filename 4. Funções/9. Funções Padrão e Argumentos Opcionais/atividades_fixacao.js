/*
Atividades de Fixação – Parâmetros Opcionais e Valores Padrão

1. Crie uma função chamada `soma`
   - Deve receber dois parâmetros, ambos com valor padrão 0.
   - A função deve retornar a soma dos dois números.


2. Função de saudação personalizada
   - Crie uma função `saudar` que recebe três parâmetros: `nome`, `mensagem` e `pontuacao`.
   - `nome` deve ter valor padrão "Amigo".
   - `mensagem` deve ter valor padrão "Bem-vindo".
   - `pontuacao` deve ter valor padrão "!".
   - A função deve imprimir: mensagem, nome pontuacao (exemplo: "Bem-vindo, Amigo!").

3. Função de desconto
   - Crie uma função `calcularDesconto` que recebe dois parâmetros: `preco` e `desconto` (valor padrão 0.1, ou seja, 10%).
   - A função deve retornar o preço com desconto aplicado.

4. Função de multiplicação com valor padrão
   - Crie uma função `multiplicar` que recebe dois parâmetros, sendo que o segundo tem valor padrão 1.
   - Teste a função passando apenas um argumento.
*/

// 1

function soma(a = 0, b = 0) {
  return a + b;
}
console.log(soma());
console.log(soma(3));
console.log(soma(33, 4.4));

// 2

function saudacao(nome = "amigo", mensagem = "Bem-vindo", pontuacao = "!") {
  console.log(`${mensagem}, ${nome}${pontuacao}`);
}
saudacao();
saudacao("Lucca");
saudacao("Lucca", "Seja bem-vindo");

// 3
function calcularDesconto(preco, desconto = 0.1) {
  return preco - preco * desconto;
}
console.log(calcularDesconto(100));
console.log(calcularDesconto(54.99));
console.log(calcularDesconto(150, 0.5));

// 4
function multiplicar(a, b = 1) {
  return a * b;
}
console.log(multiplicar(5));
console.log(multiplicar(5, 33));
console.log(multiplicar(5, -1));
