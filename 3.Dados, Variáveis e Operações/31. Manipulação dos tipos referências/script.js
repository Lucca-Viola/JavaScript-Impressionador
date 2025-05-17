let listaA = [1, 2, 3];

let listaB = listaA;
listaB[0] = 99;

console.log(listaB);
console.log(listaA);

//let string = "Olá";
//let mensagem = string;
//mensagem = "Olá, Bem vindo";
//console.log(mensagem);
//console.log(string);

let objA = { nome: "Lucca" };
let objB = objA;
objB.idade = 20;
console.log(objB);
console.log(objA);

let listaC = [...listaA];
console.log(listaC);
listaC[3] = 100;
console.log(listaC);
console.log(listaA);

let objC = { ...objA };
objC.corDeCabelo = "Castanho Escuro";
console.log(objC);
console.log(objA);
