let carrinho ={}

function add(protudoId,protudoNome){

let valor = parseInt(document.getElementById(protudoId).value)

if(!carrinho[protudoNome]){
    carrinho[protudoNome] = 0
}

carrinho[protudoNome] += valor

mensagem(protudoNome,carrinho[protudoNome],'add')

document.getElementById(protudoId).value =''

}

function excluir(protudoId,protudoNome){
    let valor = parseInt(document.getElementById(protudoId).value)

    carrinho[protudoNome] -= valor

    mensagem(protudoNome,carrinho[protudoNome],'excluir')

    document.getElementById(protudoId).value =''
}

function mensagem(protudoNome,valorTotal,tipo){
    let elementoPai = document.getElementById('father')
    let idMensagem = `msg-${protudoNome.replace(/\s+/g,'')}`

    let novoElemento = document.createElement('div')
    novoElemento.id =idMensagem
    
    let excluirElemento = document.getElementById(idMensagem)
    
    let excluirFinalizador = document.getElementById('finalizar')
    
    if(excluirElemento){
        excluirElemento.remove();
    }else if(excluirFinalizador){
        excluirFinalizador.remove()
    }
    
    if(tipo === 'add'){
        novoElemento.innerHTML = `Você acabou de adicionar ${valorTotal} unidades do ${protudoNome}`
    }else{
        novoElemento.innerHTML = `Você acabou de excluir. Agora restam ${valorTotal} unidades do ${protudoNome}`
    }

    elementoPai.appendChild(novoElemento)

}

function finalizar(){

    let mensagem = document.querySelectorAll('[id^="msg-"]')
    mensagem.forEach(msg => msg.remove())

    let excluirFinalizador = document.getElementById('finalizar')

    if(excluirFinalizador){
        excluirFinalizador.remove();
    }

    let elementoPai = document.getElementById('father')

    let elementoFinalizador = document.createElement('div')
    elementoFinalizador.id = 'finalizar'

    let resumo = `Seu pedido foi finalizado<br>`

    let total = 0

    for(protudo in carrinho){
        resumo += `${protudo} : ${carrinho[protudo]} unidades<br>`
        total += carrinho[protudo] 
    }

    resumo += `<br> 
    Total acumulado foi! ${total} unidades .<br><br>`

    resumo += `<button onclick = "reiniciar()">Fechar</button>`

    elementoFinalizador.innerHTML = resumo

    elementoPai.appendChild(elementoFinalizador)
}

function reiniciar(){
    // limpa o carrinho
    carrinho = {};

    //remove resumo final

    let resumoFinal = document.getElementById('finalizar')
    if(resumoFinal){
        
        resumoFinal.remove()
    }
// limpa os inputs
    let inputs = document.querySelectorAll('input[type="number"]')
    inputs.forEach(input => input.value = '')

// opcional: mensagem de aviso

let elementoPai = document.getElementById('father')

let aviso = document.createElement('p')

aviso.innerHTML = `O carrinho reiniciado! Você pode começar um novo pedido.`

elementoPai.appendChild(aviso)

setTimeout(() => aviso.remove(),2000)
}