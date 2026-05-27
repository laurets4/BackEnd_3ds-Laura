// importar PATHE E FS 
// Path possui (join para jutar caminhos e Resolve
// para deduzir subdiretórios e S.O.)
const fs = require('fs')
const path = require('path')

// Salvar o Caminho em um variável 
//const caminho = path.join(__dirname, 'README.md')
const caminho = path.resolve(__dirname, 'README.md') // Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')

console.log(arquivo)