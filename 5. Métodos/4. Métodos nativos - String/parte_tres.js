// split() - Divide uma string em um array de substrings
// split(delimiter, limit) - Divide uma string em um array de substrings com um delimitador e limite opcional
let string =
  "Death Stranding 2, Death Stranding, Death Stranding Director's Cut";
// split(", ") - Divide a string em um array de substrings usando a vírgula como delimitador
// let melhoresJogosDoMundo = string.split(/\s+/);
let melhoresJogosDoMundo = string.split(", ");
let melhoresJogosDoMundoLimite = string.split(", ", 2); // Limita o array a 2 elementos
console.log(melhoresJogosDoMundo);
console.log(melhoresJogosDoMundoLimite);

// splice() - Altera o conteúdo de uma string, adicionando, removendo ou substituindo elementos - Não é um método de string, mas sim de array
string.splice(1, 2);
console.log(string);
