var prompt = require ('prompt-sync')();

let codigo = parseInt(prompt("Digite o código do produto: "));
let quantidade = parseInt(prompt("Digite a quantidade do produto: "));
let valor = 0;

if (codigo === 1) {
    valor = 4.00;
    mensagem = `Cachorro quente - R$${valor}`;
} else if (codigo === 2) {
    valor = 4.50;
    mensagem = `X-salada - R$${valor}`;
} else if (codigo === 3) {
    valor = 5.00;
    mensagem = `X-bacon - R$${valor}`;
} else if (codigo === 4) {
    valor = 2.00;
    mensagem = `Torrada simples - R$${valor}`;
} else if (codigo === 5) {
    valor = 1.50;
    mensagem = `Refrigerante - R$${valor}`;
} else {
    mensagem = "Opção inválida!";
}

let total = quantidade * valor;

console.log(mensagem);
if (valor > 0) {
    console.log(`Total: R$${total.toFixed(2)}`);
}