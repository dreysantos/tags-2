var prompt = require ('prompt-sync')();
let combustivel = parseFloat(prompt("DIGITE O CÓDIGO DO COMBUSTÍVEL: "));
while (combustivel !== 0) {

    if (combustivel === 1) {
        mensagem = "ÁLCOOL";
    } 
    else if (combustivel === 2) {
        mensagem = "GASOLINA";
    }
     else if (combustivel === 3) {
        mensagem = "DIESEL";
    } 
    if (combustivel === 4){
        mensagem = "CÓDIGO INVÁLIDO";
    }
    console.log(mensagem);
    combustivel = parseFloat(prompt("DIGITE O CÓDIGO DO COMBUSTÍVEL: "));
}