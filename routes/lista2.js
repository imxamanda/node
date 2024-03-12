const express = require('express');
const  router = express.Router();

router.post("/ex1" ,(req,res)=>{
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let n3 = Number(req.body.n3);
    let n4 = Number(req.body.n4);

    const media = (n1 + n2 + n3 + n4) / 4;
    let retorno = {};
    if((n1 > 10) || (n2 > 10) || (n3 > 10) ||( n4 > 10)){
        res.status(400).json({erro : "Erro! A nota não deve passar de 10"})
    }
    else  {
        retorno.msg = media >= 7 ? "Aprovado" : "Reprovado"
        res.status(200).json(retorno);
    }
})

/*

router.post("/ex2" ,(req,res)=>{

let eleitores =  Number(req.body.total);
let brancos = Number(req.body.branco);
let nulos =  Number(req.body.nulos);
let validos =  Number(req.body.validos);

const total = brancos + nulos + validos;
    if(total > eleitores){
        res.status(500).json({erro :  "Erro! O numero de votos não pode passar o total de eleitores"});
    }
    else  {

        const percBranco = brancos / total * 100;
        const percNulo = nulos / total * 100;
        const percValidos = validos / total * 100;
        const retorno = {
            brancos: percBranco,
            nulos: percNulo,
            validos: percValidos
        }
        res.status(200).json(retorno);
    }

}) 

*/

router.post('/ex3', function(req, res){
 
    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

     res.json({salarioBruto, bonificacaoFilhos, salarioFinal})
})

/* router.post("/ex4" ,(req,res)=>{
    const percDistrubuidor = 28;
    const impostos = 45;
    let custoFabrica = Number(req.body.custo)
    let custoF2 = custoFabrica + (custoFabrica * percDistrubuidor) / 100;
    let custoF3 = custoFabrica + (custoFabrica * impostos) / 100;
    let custoFinal = custoFabrica + custoF2 + custoF3;
    res.status(200).json({custoFinal});
})

router.post("/ex5" ,(req,res)=> {
    const custoFabrica = req.body.fabrica;
    const percentualDistribuidor = req.body.distribuidor;
    const impostos = req.body.impostos;
    const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    const custoTotal = custoFabrica + custoDistribuidor + impostos;
    res.status(200).json({custoTotal});
})

router.post("/ex6" ,(req,res)=> {
    const numeroCarrosVendidos = req.body.vendidos;
    const valorTotalVendas = req.body.vendas;
    const salarioFixo = req.body.salario;
    const valorPorCarro = req.body.valor
    const comissaoFixaPorCarro = numeroCarrosVendidos * valorPorCarro;
    const comissaoPorVendas = valorTotalVendas * 0.05;
    const salarioFinal = salarioFixo + comissaoFixaPorCarro + comissaoPorVendas;
    res.status(200).json({salarioFinal});
})

router.post("/ex7" ,(req,res)=> {
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const pesoNota1 = 4;
    const pesoNota2 = 6;
    const mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);
    res.status(200).json({mediaFinal});
})

router.post("/ex8" ,(req,res)=> {
    const raio = req.body.raio;
    const altura = req.body.altura;
    const pi = Math.PI;
    const volume = pi * Math.pow(raio, 2) * altura;
    res.status(200).json({volume});
})


router.post("/ex9" ,(req,res)=> {
    const numero1 = req.body.numero1;
    const numero2 = req.body.numero2;
    const soma = numero1 + numero2;
    const resultado = soma * numero1;
    res.status(200).json({resultado});
})
 */
module.exports = router