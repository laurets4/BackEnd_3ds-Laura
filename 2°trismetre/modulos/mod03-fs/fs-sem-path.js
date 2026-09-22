
const fs = require('fs')

//console.log(fs)

//const arquivo = fs.readFileSync('./README.md', 'utf-8')
///workspaces/BackEnd_3ds-Laura/2° trismetre/modulos/mod03-fs/README.md
//2° trismetre/modulos/mod03-fs/README.md
const arquivoFinal = fs.readFileSync(__dirname + "/README.md", 'utf-8')
console.log(arquivoFinal)