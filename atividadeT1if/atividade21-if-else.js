var prompt = require ('prompt-sync')();
let entrada = parseInt(prompt("DIGITE O VALOR DESEJADO: "));
let incount = 0, outcount = 0;

for (let i = 0; i < entrada; i++) {
    let valor = parseFloat(prompt(`Digite o valor ${i + 1}:`));
    if (valor >= 10 && valor <= 20) incount++;
    else outcount++;
}

console.log(`${incount} in`);
console.log(`${outcount} out`);