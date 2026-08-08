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
