// Crie um perfil profissional que 
// Interpole uma frase e um objeto com 
// as carcterísticas de um Profissional a sua escolha

// criar objeto profissional

// criar variável com interpolação (template)

// imprimir perfilProfissional 

const nome = 'Kauana'
const profissional = {
    profissão: "Fisioterapeuta",
    curso: "Fisioterapia",
    salário: "2.700"
}

const perfil = `\nOlá, ${nome}, \nsua profissão é: ${profissional.profissão}, \nvocê faz curso de${profissional.curso}, \ne ganha em torno de ${profissional.salário} `
console.log(perfil)