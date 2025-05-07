let usuario = "visitante"
let senha = 12345

let verificar  = (usuario == "admin" || usuario == "moderador")&& senha == 12345&& 'acesso permitido' || 'acesso negado' 

console.log (verificar)