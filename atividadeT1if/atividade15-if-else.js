var prompt = require ('prompt-sync')();

 let A = parseFloat(prompt('coloque o valor de A: '));
 let B = parseFloat(prompt('Coloque o valor de  B: '));
 let C = parseFloat(prompt('coloque o valor de C: '));

    let pi = 3.14159;
    let triangulo= (A * C)/ 2;
    let circulo = pi * Math.pow(C, 2); 
    let trapezio = ((A + B) * C) / 2;
    let quadrado = B * B;
    let retangulo = A * B;

    console.log(`triangulo: ${triangulo.toFixed(3)}`);
    console.log(`circulo: ${circulo.toFixed(3)}`);
    console.log(`trapezio: ${trapezio.toFixed(3)}`);
    console.log(`quadrado: ${quadrado.toFixed(3)}`);
    console.log(`retangulo: ${retangulo.toFixed(3)}`);
    calcular(A, B, C);
    


