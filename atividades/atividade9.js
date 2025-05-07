let funcionarios = [
    { nome: "Carlos", salarioMensal: 3000, valorPorHora: 12.50 },
    { nome: "João", salarioMensal: 2500, valorPorHora: 10.42 },
    { nome: "guilherme", salarioMensal: 4000, valorPorHora: 16.67 },
    { nome: "Ana", salarioMensal: 2000, valorPorHora: 8.33 }
  ];
  
  console.log(funcionarios.map(f => `${f.nome}: Salário: R$${f.salarioMensal.toFixed(2)} | Valor por Hora: R$${f.valorPorHora.toFixed(2)}`).join('\n'));
  
  console.log("O salário 1 ganha mais por hora que o salário 2? " + (funcionarios[0].valorPorHora > funcionarios[1].valorPorHora));
  console.log("O salário 3 tem um salário maior que o salário 4? " + (funcionarios[2].salarioMensal > funcionarios[3].salarioMensal));
  console.log("O salário 2 e 4 ganham o mesmo por hora? " + (funcionarios[1].valorPorHora === funcionarios[3].valorPorHora));
  console.log("O salário 1 tem o salário diferente do salário 3 por hora? " + (funcionarios[0].valorPorHora !== funcionarios[2].valorPorHora));
  