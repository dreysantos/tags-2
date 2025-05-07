var prompt = require ('prompt-sync')();
let senha = parseFloat(prompt("DIGITE A SENHA:"))
let Senha = 2002
while(senha != 2002){
console.log("acesso invalido");
senha = parseInt(prompt("digite sua senha:"))
}
console.log("acesso permitido")