var prompt = require ('prompt-sync')();
let i = parseInt(prompt("Digite um número:")); 
while (i >= 1) {
    console.log(`i = ${i}`); 
    i = i - 1; 
}