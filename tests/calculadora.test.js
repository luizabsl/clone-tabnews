const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
  console.log(resultado);
});

test("nome de teste", callbackFunction); // referencia a definicao externa

function callbackFunction() {
  console.log("passei por aqui"); //definicao externa
}

test("nome de teste 2", function () {
  console.log("também passei por aqui"); //tira definição externa da função, n é mais necessário referencia-la
});

test("nome de teste 3", () => {
  console.log("aqui de novo"); //com arrow function - mais utilizado atualmente
});
