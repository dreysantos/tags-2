var prompt = require ('prompt-sync')();
let codigo1 = parseInt(prompt("Digite o codigo1 do produto:"));
let quantidade1 = parseInt(prompt("digite a quantidade1 do produto:"));
let valor1 =  parseFloat(prompt("digite o valor1 do produto:"))

let codigo2 = parseInt(prompt("digite o codigo2 do produto:"))
let quantidade2 = parseInt(prompt("digite a quantidade2 do produto:"))
let valor2 = parseFloat(prompt("Digite o valor2 do produto:"))

let total;

if (quantidade1 > 0 && valor1 > 0 && quantidade2 > 0 && valor2 > 0){
total = (quantidade1 * valor1) + (quantidade2 * valor2);
console.log ("Valor a pagar:R$ " + total.toFixed(2))
} else {
console.log("Valores invalido para calculo")
}