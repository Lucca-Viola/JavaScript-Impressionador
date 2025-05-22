// function nameFunction() {Instrução} - sintax báscia

// Mensagem para iniciar o cadastro

function enviarMensagem() {
  console.log(
    "Para continuar, você precisa informar o seu nome para o cadastro"
  );
}

// enviarMensagem();

// Cadastro de usuário

function cadastrarUsuario(nome, sobrenome) {
  console.log(`Olá ${nome} ${sobrenome}, seu cadastro foi realizado!`);
}

// cadastrarUsuario("Lucca", "Viola");

// Operação matemáticas

function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo;
}

// console.log(`R$${banco(739, 345)}`);

function mainFunction() {
  enviarMensagem();
  cadastrarUsuario("Lucca", "Viola");
  let saldo = banco(10000, 780);
  console.log(`O saldo atual da sua conta é de R$${saldo}`);
}

mainFunction();
