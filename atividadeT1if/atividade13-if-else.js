var prompt = require ('prompt-sync')();
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("digite a segunda nota:"));
let nota3 =  parseFloat(prompt("digite a terceira nota:"))
let media = (nota1 + nota2 + nota3)/3
console.log("Media:" + media.toFixed(2))
if(media >=7){
console.log("Aluno aprovado");
}else if ( media >=5) {
console.log("Aluno em recuperação");
let recuperaçao = parseFloat(prompt("Digite a nota da recuperaçao"));
let novaMedia = (media + recuperaçao)/2;
if (novaMedia >= 5){
console.log("Aluno aprovado na recuperação!");
}else {
   console.log("Aluno reprovado!");
}
}