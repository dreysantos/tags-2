var prompt = require ('prompt-sync')();

let codigo =prompt("Digite o codigo do produto");
codigo = Number (codigo);
let mensagem;

if (codigo === 1) {
    mensagem = "hamburguer - R$15";
} else if (codigo === 2) {
mensagem = "pizza - R$25";
} else if (codigo === 3) {
    mensagem = "suco - R$8";   
}else if (codigo === 4) {
    mensagem = "refrigerante - R$6";
}else {
    mensagem = "opção invalida!";
}
console.log(mensagem);

