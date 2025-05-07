var prompt = require('prompt-sync')();
let sair = false;

while (!sair) {
    let operacao = prompt("DIGITE A OPERAÇÃO +,-,*,/,%,**,sair: ");
    
    if (operacao === "sair") {
        sair = true;
        console.log("Encerrando a calculadora...");
        break;
    }

    if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/" &&
        operacao !== "%" && operacao !== "**") {
        console.log("Operação inválida");
        continue;
    }

    let num1 = parseFloat(prompt("DIGITE O PRIMEIRO VALOR: "));
    let num2 = parseFloat(prompt("DIGITE O SEGUNDO VALOR: "));
    let resultado = 0;

    switch (operacao) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/":
            if (num2 == 0) {
                console.log("Não pode dividir por zero");
                continue;
            }
            resultado = num1 / num2;
            break;
        case "%": resultado = num1 % num2; break;
        case "**": resultado = num1 ** num2; break;
    }

    console.log("RESULTADO:", resultado);
}