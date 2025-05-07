var prompt = require ('prompt-sync')();
function mensagem1 (mensagem1){
    console.log("voce esta estudando progamaçao?")
    setTimeout(()=>{
        mensagem1()
    },2000)
    
}
function respostasmensagem(){
    console.log("sim,estou estudando logica de progamaçao")
}
mensagem1(respostasmensagem)
