let gasto = 150;
let vip = false;

let desconto = 0;

desconto = (gasto > 200 || vip) * 20 + (gasto >= 100 && gasto <= 199 && !(gasto > 200 || vip)) * 10;

let valorfinal = gasto * (1 - desconto / 100);

console.log("gasto R$: " + gasto);
console.log("vip: " + vip);
console.log("desconto " + desconto + "%");
console.log("valor final R$: " + valorfinal.toFixed(2));


