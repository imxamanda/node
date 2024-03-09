const express = require('express');
const  router = express.Router();

router.post('/ex1', function(req, res){

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)

    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    // let mensagem = ''
    // if(media > 7){
    //     mensagem = 'Aprovado'
    // } else {
    //     mensagem = 'Reprovado'
    // }

    res.json({media, mensagem})
})

router.post('/ex2', function(req, res){

    const {total, brancos, nulos, validos} = req.body

    // const total = Number(req.body.total)
    // const brancos = Number(req.body.brancos)
    // const nulos = Number(req.body.nulos)
    // const validos = Number(req.body.validos)

    // const soma = brancos + nulos + validos

    const soma = Number(brancos) + Number(nulos) + Number(validos)

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

module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          