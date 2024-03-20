const express = require('express');
const  router = express.Router();

router.post("/ex1" , function(req,res){
    const { quantidadeMinima, quantidadeMaxima} = req.body;
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
    res.json({ estoqueMedio });
    
})

router.post('/ex2', function(req, res){
 
    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

     res.json({salarioBruto, bonificacaoFilhos, salarioFinal})
})

router.post('/ex3', function (req, res) {

    const {anos, meses, dias} = req.body;

    const anosEmDias = Number(anos) * 365;
    const mesesEmDias = Number(meses) * 30;
    const resultadoDias = Number(dias) + anosEmDias + mesesEmDias;

    res.json({resultadoDias});
})

router.post('/ex4', function(req, res){

    const {idade} = req.body;

    const anosIdade = Number(idade) / 365;
    const mesesIdade = (Number(idade) % 365) / 30;
    const diasIdade = (Number(idade) % 365) % 30;

    res.json({anosIdade, mesesIdade, diasIdade});
});

router.post('/ex5', function(req, res){

    const {n1, n2, n3} = req.body;

    const media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
    res.json({media});
});

router.post('/ex6', function(req, res){

    const {duracaoSeg} = req.body;

    const moduloSeg = Number(duracaoSeg) % 3600;
    const horas = Math.floor(Number(duracaoSeg) / 3600);
    const minutos = Math.floor(moduloSeg / 60);
    const segundos = moduloSeg % 60;

    res.json({horas, minutos, segundos});
});

router.post('/ex7', function(req, res){

    const {nome, salarioFixo, totalVendas, percentual} = req.body;

    const salarioTotal = Number(salarioFixo) + ((Number(percentual) * Number(totalVendas)) / 100);

    res.json({
        'nome': nome,
        'salarioTotal': salarioTotal
    });
});

router.post('/ex8', function(req, res){

    const {nome, distanciaPercorrida, tempo} = req.body;

    const velocidadeMedia = Number(distanciaPercorrida) / Number(tempo);
    const retorno = 'A velocidade média do piloto' + nome + ' foi de' + velocidadeMedia + 'km/h';

    res.json({retorno});
});

router.post('/ex9', function(req, res){
    
    const {salarioAtual} = req.body;

    const mensagem = 'Funcionário não entra nos requisitos para aumento!!';

    if (Number(salarioAtual) > 1000) {
        res.json({mensagem});
    } else {
        const novoSAlario = Number(salarioAtual) + (Number(salarioAtual) * 30/100);
        res.json({novoSAlario});
    }
});



module.exports = router