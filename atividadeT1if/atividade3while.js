var prompt = require ('prompt-sync')();
let nome = ""; 
while (nome === "") {
  nome = prompt("DIGITE SEU NOME: "); 
  if (nome === "") {
    console.log("Você não digitou um nome! Tente novamente.");
  }
}
console.log("Olá, " + nome + "!");
