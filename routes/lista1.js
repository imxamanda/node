const express = require('express');
const  router = express.Router();

router.post('/ex1', function(req, res){

  /*   const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)
 */

    const {n1, n2, n3, n4} = req.body

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

    res.json(retorno)
}  
})

router.post('/ex3', function(req, res){
    
    const salAtual = Number(req.body.salario);

        const reajuste = 0.09; 
        const salNovo = salAtual * (1 + reajuste); 

        retorno = {
            codigo: salNovo,
            mensagem: "Salário com reajuste!!" 
        }

        res.status(200).json(retorno)  
})

router.post('/ex4', function(req, res){

    const cFabrica = Number(req.body.cFabrica)
    const cDistribuidor =  cFabrica * 28/100
    const cImposto = cFabrica * 45/100
    const cFinal = cFabrica + cDistribuidor + cImposto

    const retorno = {
        Custo: cFinal
    }
        
    res.json(retorno)         
})

router.post('/ex5', function(req, res){

    const {cFabrica, percDistribuidor, percImposto} = req.body
    const cDistribuidor =  cFabrica * Number(percDistribuidor/100)
    const cImposto = cFabrica * (Number(percImposto) /100)
    const cFinal = cFabrica + cDistribuidor + cImposto

    const retorno = {
        Custo: cFinal
    }
        
    res.json(retorno)   
})

router.post('/ex6', function(req, res){

    const {totalCarros, valCarro, valendas, salario} = req.body

    const pagCarro = Number(totalCarros) * Number(valCarro)
    const pagVenda = (Number(valendas) * 5 /100)
    const salFinal = Number(salario) + pagCarro + pagVenda

    const retorno = {
        SalFinal: salFinal
    }
        
    res.json(retorno) 

})

router.post('/ex7', function(req, res){

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)

    const soma = (n1 * 0.4) + (n2 * 0.6)
    const media = soma / (0.4 + 0.6)

    const retorno = {
        mediaFinal: media
    }

    res.json(retorno)
})

router.post('/ex8', function(req, res){

    const {raio, altura} = req.body
    const pi = 3.14
    const volume = pi * raio ** 2 * altura

    const retorno = {
        Volume: volume 
    }

   res.json(retorno)

})

router.post('/ex9', function(req, res){

    const {num1, num2} = req.body

    const soma = Number(num1) + Number(num2)
    const multiplicado = soma * num1

    const retorno = {
        Multiplicado: multiplicado 
    }

   res.json(retorno)
    
})

module.exports = router                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          