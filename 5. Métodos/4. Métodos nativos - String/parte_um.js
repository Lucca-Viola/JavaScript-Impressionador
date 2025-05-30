// String - Sequência de caracteres
let string = "Hello, World!";

console.log(string.toUpperCase()); // Converte a string para maiúsculas
console.log(string.toLowerCase()); // Converte a string para minúsculas

// Método de slice(start, end) - Retira uma parte da string
// slice(início, fim) - Início é obrigatório, fim é opcional
console.log(string[7]);
console.log(string.slice(0, 5)); // Extrai do índice 0 ao 4
console.log(string.slice(-6)); // slice() com índice negativo - Extrai do final da string

// Substring(start, end) - Extrai uma parte da string
console.log(string.substring(0, 5)); // Extrai do índice 0 ao 4
console.log(string.substring(-6)); // Converte o índice negativo para 0, então extrai do início da string
console.log(string.substring(7, 3)); // Inverte os índices, mas o resultado é o mesmo que substring(3, 7)
