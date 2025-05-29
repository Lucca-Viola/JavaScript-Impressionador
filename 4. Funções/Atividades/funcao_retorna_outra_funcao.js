function criarSaudacao(saudacao) {
  return function bomDia(nome) {
    return `${saudacao}, ${nome}!`;
  };
}

console.log(criarSaudacao("Bom dia")("Lucca"));
console.log(criarSaudacao("Bom dia")("Laura"));
console.log(criarSaudacao("Bom dia")("Maria"));
