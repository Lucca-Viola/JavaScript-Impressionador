//Operador  &&  |  Operação  AND (operação e)  |  Exemplo  X && Y
//Operador  ||  |  Operação  OR (operação ou)  |  Exemplo  X || Y
//Operador  !   |  Operação  NOT (invasor)  |  Exemplo  !X

// && (AND) - ambas as condições são verdadeiras
let idade = 20;
let idadeDois = 15;
let codigoPromocional = true;

// Verificação se o usuário tem idade suficiente e possui código
let podeFazerLogin = idade >= 18 && codigoPromocional; // true
console.log(podeFazerLogin);
let podeFazerLoginDois = idadeDois >= 18 && codigoPromocional; // false
console.log(podeFazerLoginDois);

// || (OR) - apenas uma condição é verdadeira
let loginOr = idade >= 18 || codigoPromocional; // true
let loginOrDois = idadeDois >= 15 || codigoPromocional; // true
console.log(loginOr);
console.log(loginOrDois);

// ! (NOT) - inverte o valor booleano
let perfilConfigurado = false;
// Verificação se o perfil não está configurado
let alerta = !perfilConfigurado;
console.log(alerta);
