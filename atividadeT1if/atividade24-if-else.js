var prompt = require ('prompt-sync')();

function mensagem1 (mensagem1){
    console.log("Pedido feito,avisando ao cliente")
    setTimeout(()=>{
        mensagem1()
    },2000)
}
function respostasmensagem(){
    console.log("A pizza chegou")
}
mensagem1(respostasmensagem)
