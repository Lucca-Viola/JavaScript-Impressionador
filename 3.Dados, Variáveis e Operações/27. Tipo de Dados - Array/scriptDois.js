// Array
let lista = ["Monitor", "Teclado", "Mouse"];
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

lista[0] = "WebCam";
console.log(lista);

lista[4] = "Monitor";
console.log(lista);

console.log(lista.length);

//lista.length = lista.length - 3;
//console.log(lista);

let matrizVendas = [
  [100, 200, 300],
  [400, 500, 600],
  [700, 800, 900],
];
console.log(matrizVendas);
console.log(matrizVendas[1]);
matrizVendas[1][2] = 1000;
console.log(matrizVendas[1]);

let resultadoLojaB =
  matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);
