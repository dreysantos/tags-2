let idade = 18 
let mensagem1 = "Se voce tiver 18 anos ou mais pode entrar na festa"
let mensagem2 = "Se voce tiver 16,17 anos pode entrar na festa com acompanhante "
let mensagem3 = "Se voce tiver menos de 16 nao sera permitida a entrada na festa mesmo com acompanhante "

let resultado = idade >= 18 && mensagem1
let resultado2 = idade >= 17 && mensagem2
let resultado3 = idade <= 16

console.log(mensagem1)
console.log(mensagem2)
console.log(mensagem3)