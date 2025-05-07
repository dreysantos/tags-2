var prompt = require ('prompt-sync')();
let numerofuncionario = 25;
let horastrabalhadas = 100;
let valorporhora = 5.50;
let salario;

if (horastrabalhadas > 0 && valorporhora > 0){
salario = horastrabalhadas * valorporhora;
console.log("number = "+ numerofuncionario);
console.log("salario = R$ " + salario.toFixed(2))
}else {
console.log("Valores  invalidos para calculo");
}
