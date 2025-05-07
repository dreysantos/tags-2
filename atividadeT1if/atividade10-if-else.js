var prompt = require ('prompt-sync')();
let minutos = 103;
let valorbase = 50;
let custoextra = 2.00;
let minutofranquia = 100;
let valortotal;

if (minutos > minutofranquia) {
valortotal = valorbase + ( minutos - minutofranquia) * custoextra
} else {
valortotal = valorbase;
}
console.log("Valor a pagar: R$" + valortotal.toFixed(2));
