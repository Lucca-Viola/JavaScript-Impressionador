// Redeclarações
let nome = "Lucca";
const nomeamigo = "Gabriel";

var mensagem = "Olá";
console.log(mensagem);
var mensagem = "Olá novamente";
console.log(mensagem);

// Reatribuição - Mutabilidade
console.log(nome);
nome = "Lucca Schwingel";
console.log(nome);

mensagem = "Olá novamente novamente";
console.log(mensagem);

// const não é reatribuido

// Hoinsting
console.log(segundaMensagem); // Não atribui nenhum valor  ficando "undefined"
var segundaMensagem = "Utilizando Hoisting"; // Só é possível realizar Hoinsting com 'var', sendo impossível realizar com 'const' e 'let'
console.log(segundaMensagem);

// Visibilidade
{
  console.log("Isso é um bloco");
  let idade = 60;
  const real = 50;
  console.log(idade);
  console.log(real);
} // Bloco de instrução
//function() {instruções - tarefas especificas} // Isto é um bloco de função

function executar() {
  //Instrução dentro da função
  console.log("Dentro da função");
  let numero = 10;
  console.log(numero);
}

executar();
