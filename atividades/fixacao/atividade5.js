let totalCompra = 257.00;
let numParcelas = 3;

let valorParcela = totalCompra / numParcelas;

let totalPago = valorParcela * numParcelas;

let restante = totalCompra - totalPago;

console.log("Valor de cada parcela: R$", valorParcela.toFixed(2));
console.log("Valor restante: R$", restante.toFixed(2)); 
console.log("Valor total pago é:", totalPago )