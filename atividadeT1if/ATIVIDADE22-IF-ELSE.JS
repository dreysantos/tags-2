var prompt = require ('prompt-sync')();
let n = parseFloat(prompt("QUANTOS NUMEROS VC QUER DIGITAR:"));
for (let i = 0; i < n; i++){
 console.log ("DIGITE OS TRES VALORES DO CASO:" + i + 1);
let v1 = parseFloat(prompt("DIGITE O PRIMEIRO VALOR: "));
let v2 = parseFloat(prompt("DIGITE O SEGUNDO VALOR: "));
let v3 = parseFloat(prompt("DIGITE O TERCEIRO VALOR: "));
let p1 = 2;
let p2 = 3;
let p3 = 5;
let somapesos = p1 + p2 + p3;
let media = (v1 * p1 + v2 * p2 + v3 * p3)/somapesos;
console.log("Média:", media.toFixed(1));
}
;