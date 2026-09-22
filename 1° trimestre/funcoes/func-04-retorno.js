// Funções de retorno exigiam a
// Cláusula/termo 'return'
// isso permite fazer operações
// sequenciais com o resultado
// armazenar funções em variáveis 

function SobraDoSalário(meuSalário){
    const contaDeLuz = 150.0
    const aluguel = 1400.0
    const resto = meuSalário - (contaDeLuz+aluguel)
    return `O que restou no fim do mês R$ ${resto.toFixed(2).replace('.',',')}`
}
const minhasSobras = SobraDoSalário(1700.0) 
// teste - experimento 
console.log(SobraDoSalário(50000))