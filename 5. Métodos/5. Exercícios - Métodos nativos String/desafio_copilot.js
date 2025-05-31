// Desafio Um
let desafioUm = "hashtag impressionador";
console.log(desafioUm.toUpperCase());

// Desafio Dois
let desafioDois = "Aprendendo JavaScript";
console.log(desafioDois.slice(0, 11));

// Desafio Três
let desafioTres = "Eu gosto de estudar programação";
console.log(desafioTres.replace("programação", "JavaScript"));

// Desafio Quatro
let desafioQuatro = "cadeira, mesa, sofá, armário";
desafioQuatro = desafioQuatro.split(", ");
desafioQuatro.splice(2, 1);
console.log(desafioQuatro);

// Desafio Cinco
let desafioCinco = "  Olá, mundo!  ";
console.log(desafioCinco.replace(/\s/g, "")); // Remove espaços no início e no final
let boolean = desafioCinco.indexOf("mundo") !== -1; // Verifica se "mundo" está presente
console.log(boolean);
