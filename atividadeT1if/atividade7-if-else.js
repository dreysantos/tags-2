var prompt = require ('prompt-sync')();
let idade = prompt("Digite sua idade:")
if (idade<12){
console.log("criança")
}else if (idade>=12&& idade<=17) {
    console.log("adolescente");
} else if (idade>=18 && idade<=59){
    console.log("Adulto");
}else{
    console.log("Idoso");
}
