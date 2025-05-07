let nota1 = 5; 
let nota2 = 5;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média do aluno é: " + media.toFixed(2));

const resultado = 
    media >= 7 ? "Aprovado" :
    media >= 5 ? "Recuperação" :
    "Reprovado";

console.log("Status: " + resultado);
