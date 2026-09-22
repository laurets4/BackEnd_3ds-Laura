export function alugarFilme(nomeFilme, dataAluguel, preco){
    return `O filme ${nomeFilme}, foi alugado no dia: ${dataAluguel}, no valor de: ${preco}`
}

export function devolverFilme(nomeFilme, dataEntrega){
    return `O filme ${nomeFilme}, precisa ser entregue até o dia: ${dataEntrega}`
}

