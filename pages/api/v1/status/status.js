// /api/status
import database from "infra/database.js";

async function status(request, response) {
  console.log(database);
  const result = await database.query("SELECT 1 + 1 AS SOMA;");
  console.log(result.rows);
  response.status(200).json({ text: "Envio de status code" }); //assume charset como utf-8
}

export default status; //um arquivo pode ter várias funções, no export default eu
//deixo explícito qual é a função de entrada da classe.
// Ela que lida com o request e response desse endpoint
