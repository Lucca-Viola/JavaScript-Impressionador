// Parâmetros Opcionais e Valores Padrão

function cumprimentar(nome = "Visitante", saudacao = "Boa noite!") {
  console.log(`Olá ${nome}, ${saudacao}`);
}

cumprimentar(undefined, "Boa tarde!");
