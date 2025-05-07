let totalCompra = 356.00;
let numParcelas = 6;

let valorParcela = totalCompra / numParcelas;

let totalPago = valorParcela * numParcelas;

let restante = totalCompra - totalPago + 2 ;
 
console.log("Valor de cada parcela: R$", valorParcela.toFixed(2));
console.log("Valor restante: R$", restante.toFixed(2)); 
console.log("Valor total pago é:", totalPago ) 
