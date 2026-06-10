// importar PATHE E FS 
// Path possui (join para jutar caminhos e Resolve
// para deduzir subdiretórios e S.O.)
// npm -> chalk
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
const caminho = path.resolve(__dirname, 'README.md') // Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(chalk.green('Arquivo carregado com sucesso'))
console.log(arquivo)
} catch(erro){
    console.log(chalk.yellow('Falha ao carregar o arquivo. Tente novamnete mais tarde.'))
    console.log(chalk.red('Erro interno de leitura de arquivo:\n', erro.message))
}