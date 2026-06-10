// importar PATHE E FS 
// Path possui (join para jutar caminhos e Resolve
// para deduzir subdiretórios e S.O.)
const { default: chalk } = require('chalk')
const fs = require('fs')
const path = require('path')

// Salvar o Caminho em um variável 
//const caminho = path.join(__dirname, 'README.md')
try {
const caminho = path.resolve(__dirname, 'READM.md') // Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')

console.log(arquivo)
} catch(erro){
    console.log('--------------------')
    console.warn("Atenção!"+erro.path)
    throw new Error('Mensagem de erro personalizada');

    console.log('--------------------')
}


