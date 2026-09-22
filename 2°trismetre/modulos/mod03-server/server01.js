const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8002


const home =  path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const bolo1 = path.join(__dirname, 'images/bolo1.png')
const css = path.join(__dirname, 'public/estilo.css')
const bolos = path.join(__dirname, 'pages/bolos.html' )
const donuts = path.join(__dirname, 'pages/donuts.html')
const cafes = path.join(__dirname, 'pages/cafes.html')

console.log(home)

const server = http.createServer((req, res)=>{
    const novaUrl = new URL(req.url, `http://${req.headers.host}`) //http://localhost
    const caminhoUrl = novaUrl.pathname

    if(caminhoUrl === '/'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(home, 'utf-8'))
    } 
    
    if(caminhoUrl === '/sobre'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    } 
    if(caminhoUrl === '/donuts'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(donuts, 'utf-8'))
    } 
    if(caminhoUrl === '/bolos'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(bolos, 'utf-8'))
    } 
    if(caminhoUrl === '/cafes'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(fs.readFileSync(cafes, 'utf-8'))
    } 
    if(caminhoUrl === '/public/index.js'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/javascript')
        return res.end(fs.readFileSync(js, 'utf-8'))
    } 
    if(caminhoUrl === '/public/estilo.css'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'text/css;')
        return res.end(fs.readFileSync(css, 'utf-8'))
    } 
    if(caminhoUrl === '/images/bolo1.png'){

        res.statusCode = '200'
        res.setHeader('Content-Type', 'images/png;')
        return res.end(fs.readFileSync(bolo1, ))
    } 
    else { 

    res.statusCode = '401'
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h3>401 Não Autorizado</h3>')
}
})
server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta 
        http://localhost:${porta}`)
    })