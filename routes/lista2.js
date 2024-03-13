const express = require('express');
const  router = express.Router();

router.post("/ex1" , function(req,res){
    
})

router.post('/ex3', function(req, res){
 
    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

     res.json({salarioBruto, bonificacaoFilhos, salarioFinal})
})


module.exports = router