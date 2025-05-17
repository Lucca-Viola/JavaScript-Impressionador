// Objeto

let carro = {
  marca: "Hyundai",
  modelo: "Creta",
  ano: 2022,
  cor: "Prata",
  airbeg: true,
  itens: ["Ar-condicionado", "Direção elétrica", "Vidros elétricos"],
};
//console.log(carro);

// Acessando os valores das propriedades (chaves)

//console.log(carro.marca);
//console.log(carro.ano);
//console.log(carro.cor);
//console.log(carro.airbeg);
//console.log(carro.itens);

console.log(carro["modelo"]);

carro.cor = "Preto";
console.log(carro);

carro.potencia = 1.5;
console.log(carro);
