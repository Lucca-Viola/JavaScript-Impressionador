// Escopo Global - Local (Funções) - Bloco

let global = "Sou do escopo GLOBAL";

function mensagem() {
  // Escopo local da minha função
  let local = "Sou local da função";
  console.log(local);
}

mensagem();
console.log(global);

// Não é uma função - escopo de bloco
if (true) {
  let bloco = "Sou do bloco do IF";
  console.log(bloco);
}
