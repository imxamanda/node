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

router.post('/ex3', function(req, res){
 
    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

     res.json({salarioBruto, bonificacaoFilhos, salarioFinal})
})


module.exports = router