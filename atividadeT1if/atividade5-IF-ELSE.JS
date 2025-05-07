var prompt = require ('prompt-sync')();
let num1 = parseFloat(prompt("digite o primeiro numero: "));
let operador = prompt("digite a operaçao(+,-,*,/: ");
let num2 = parseFloat(prompt("digite o segundo numero: "));

let resultado;
switch(operador){
    case "+":
resultado= num1+num2;
break;
case"-":
resultado = num1-num2;
break;
case"*":
resultado = num1*num2;
break;
case"/":
if (num2!==0){
    resultado = num1/num2;
}else {
    resultado = "erro:divisão por zero!";    
}
break;
default:
    resultado = "operação invalida";
}
console.log(resultado)
