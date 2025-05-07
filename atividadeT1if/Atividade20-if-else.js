var prompt = require ('prompt-sync')();
let x = parseFloat(prompt("DIGITE UM VALOR DE 1 A 1000: "));
if (x >= 1 && x <= 1000){
    for(let i = 1; i <=x; i++){
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}else{
    console.log("Número fora do permitido");
}
