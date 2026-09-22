//module.exports = function multiplicaPorDois(n1, n2){
// const res = `resultado ${n1 * n2}`
//  return res = 
//}

function dividePorDois(n1, n2){
    const res = `resultado ${n1 / n2}`
    return res
}
function multiplicaPorDois(n1, n2){
    const res = `resultado ${n1 * n2}`
    return res 
}
function somaDois(n1, n2){
    const res = `resultado ${n1 + n2}`
    return res
}
function subtraiDois(n1, n2){
    const res = `resultado ${n1 - n2}`
    return res
}

module.exports = {
    dividePorDois,
    multiplicaPorDois,
    somaDois,
    subtraiDois
}
