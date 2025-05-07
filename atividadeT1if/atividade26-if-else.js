var prompt = require ('prompt-sync')(); 

let array = ["Eder" , " Andrey"]
let continuar = ""
while(continuar != "sair"){

   let nome = Number(prompt("Oque deseja fazer? 1 adicionar paciente , 2 atender paciente , 3 cancelar o paciente "))
   switch (nome){

      case 1: 
      let paciente = prompt("Nome do paciente: ")
      array.push(paciente)
      console.log(array)
   break;
   case 2:
      console.log(`CHAMANDO ${array[0]}`)
   array.shift()
   console.log(array)
break;
case 3:
   console.log(`CANCELANDO PACIENTE`)
   array.pop()
      console.log(array)
break;
default:
   console.log("Ultilize um comando valido")
   }
   continuar = prompt("Deseja continua?(sim/sair)")

}
console.log(array)
