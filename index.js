const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', function(req, res){
    res.send('Rota principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome', function(req, res){
    res.send('Amanda Vieira Peres')
})

app.post('/lista/ex1', function(req, res){

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if(soma > total){

        retorno = {
            codigo:'SOMA_ELEITORES',
            mensagem:"Erro: A soma dos votos não pode passar o total de eleitores"
        }

        res.status(400).json(retorno)

    } else {

    const percBranco = brancos / total * 100
    const percNulos = nulos / total * 100
    const percValidos = validos / total * 100

    retorno = {percBranco, percNulos, percValidos}

    res.status(200).json(retorno)
}  
    
    })

app.listen(3000, function(){
    console.log('Server up port 3000')
})