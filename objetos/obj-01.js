// Objetos são estruturas do tipo chave-valor
// podemos atribuir de forma dinâmica, assim como em arrays
// Objetos tem índices nomeados
// Podemos usar (for of) ou (for in)

const carros ={
    nome: "camaro",
    modelo: "xpto Cam",
    cores: ["amarelo", "preto"]

}
carros.modelo = "Fusca"
carros["nome"] = "Chev"
console.log(carros.modelo)
console.log(carros.nome)

//for(carro in carros){ console.log(carro)}