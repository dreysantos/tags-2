var prompt = require ('prompt-sync')();
let numero = prompt("digite o número:")
numero = Number(numero);
if(numero % 2 === 0) {
console.log("PAR");
}else{
console.log("IMPAR");
}
