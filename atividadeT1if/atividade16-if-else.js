var prompt = require('prompt-sync')();

let x = parseFloat(prompt("DIGITE O VALOR DO EIXO X: "));
let y = parseFloat(prompt("DIGITE O VALOR DO EIXO Y: "));

switch (true) {
    case (x == 0 && y == 0):
        console.log("COORDENADAS APONTAM PARA A ORIGEM");
        break;
    case (x > 0 && y > 0):
        console.log("COORDENADAS APONTAM PARA Q1");
        break;
    case (x < 0 && y > 0):
        console.log("COORDENADAS APONTAM PARA Q2");
        break;
    case (x < 0 && y < 0):
        console.log("COORDENADAS APONTAM PARA Q3");
        break;
    case (x > 0 && y < 0):
        console.log("COORDENADAS APONTAM PARA Q4");
        break;
    default:
        console.log("ERRO, COLOQUE AS COORDENADAS NOVAMENTE");
}