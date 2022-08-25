const tela = document.getElementById("resultado")

function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){//limpar o resultado
            tela.value = ''
        }
        if(valor ==='+' || valor ==='-' || valor ==='*' || valor ==='/' || valor ==='.'){
            tela.value += valor
        }
        if(valor === '='){
            let calculo = tela.value
            tela.value = eval(calculo)//eval() Consegue transformar uma string em valor a ser calculado
        }
    }else if(tipo === 'valor'){
        tela.value += valor
    }
}