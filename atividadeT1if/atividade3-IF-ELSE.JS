let taxaEUR = 0.1818; 
let taxaUSD = 0.1742; 
let taxaGBP = 0.1587; 

let valorBRL = 100; 
let moeda = "USD"; 
let valorConvertido = 0;

if (moeda === "EUR") {
    valorConvertido = valorBRL * taxaEUR;
} else if (moeda === "USD") {
    valorConvertido = valorBRL * taxaUSD;
} else if (moeda === "GBP") {
    valorConvertido = valorBRL * taxaGBP;
} else {
    console.log("Moeda inválida.");
}

switch (moeda) {
    case "EUR":
        console.log(`R$${valorBRL} é equivalente a €${valorConvertido.toFixed(2)} (Euro).`);
        break;
    case "USD":
        console.log(`R$${valorBRL} é equivalente a $${valorConvertido.toFixed(2)} (Dólar).`);
        break;
    case "GBP":
        console.log(`R$${valorBRL} é equivalente a £${valorConvertido.toFixed(2)} (Libra).`);
        break;
    default:
        console.log("Nenhuma conversão realizada.");
}