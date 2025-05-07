let idade = 70;

console.log([
  "Nao pode votar",      
  "voto opcional",      
  "voto obrigatorio",     
  "Nao pode votar"      
][
  (idade >= 18 && idade <= 70) * 2 ||  
  (idade >= 16 && idade < 18) * 1 ||  
  (idade < 16) * 0 ||                 
  3                        
]);
