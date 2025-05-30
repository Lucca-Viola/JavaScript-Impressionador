// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras maiúsculas
let desafioUm = "javascript é divertido";
// let java = (desafioUm.slice(0, 10));
console.log(desafioUm.replace("javascript", "javascript".toUpperCase()));

// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e, em seguida, converta essa palavra para letras minúsculas
let desafioDois = "Aprendendo Javascript";
let aprendendo = desafioDois.slice(0, 10);
console.log(aprendendo.toLowerCase());

// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por “Javascript”
let desafioTres = "Aprendendo Python";
console.log(desafioTres.replace("Python", "JavaScript"));

//  Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de produtos e remova o item 'sofá' da lista
let desafioQuatro = "cadeira, mesa, sofá, armário";
desafioQuatro = desafioQuatro.split(", ");
desafioQuatro.splice(2, 1);
console.log(desafioQuatro);
