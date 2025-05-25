// Resolução exercício 1
function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média desse aluno é ${media}`);
}

calcularMedia(9, 8, 9);

// Resolução exercício 2
function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3) / 3;
  let mediaFinal = (media + nota4) / 2;
  console.log(`A média desse aluno é ${mediaFinal}`);
}

calcularMedia(7, 5, 5, 10);

// Resolução exercício 3
function converterTemperatura(celcius) {
  let farenheit = (9 / 5) * celcius + 32;
  console.log(`A temperatura correspondente em Farenheit é de ${farenheit}°F`);
}

converterTemperatura(40);

// Resolução exercício 4
function calcularImposto(produto) {
  let valorFinal = produto * 1.08875;
  console.log(`O valor a ser pago é ${valorFinal}`);
}

calcularImposto(345);
