// String - Sequência de caracteres
let string = "Hello, World!";

// string.toUpperCase() - Converte todos os caracteres para maiúsculas
// string.toLowwerCase() - Converte todos os caracteres para minúsculas

// Slice(start,end) - Extrai uma parte da string
// substring(start, end) - Retorna uma parte da string, não aceita índices negativos

// replace(search, replaceWith) - Substitui uma parte da string por outra
console.log(string.replace("World", "JavaScript"));

// indexOf(search) - Retorna o índice da primeira ocorrência de uma substring
console.log(string.indexOf("World"));
console.log(string.indexOf("JavaScript")); // Retorna -1 se não encontrar
