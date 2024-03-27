const express = require('express');
const  router = express.Router();

router.post('/ex1', function(req, res){
    const { salario } = req.body;

    let salarioReajuste;

    if (salario <= 2000) {
        //  50% até 2000
        salarioReajuste = parseFloat((salario * 1.5).toFixed(2)); 
    } else {
        // 30% maiores que 2000
        salarioReajuste = parseFloat((salario * 1.3).toFixed(2)); 
    }

    res.json({ salarioReajuste });
});

router.post('/ex2', function(req, res){
    const { n1, n2, n3 } = req.body;

    const intN1 = parseInt(n1);
    const intN2 = parseInt(n2);
    const intN3 = parseInt(n3);

    let maior = intN1;
    if (intN2 > maior) {
        maior = intN2;
    }
    if (intN3 > maior) {
        maior = intN3;
    }

    res.json({ maior });
});

router.post('/ex3', function(req, res){
    const { numeroTulipas, numeroCoberturas, numeroPessoas } = req.body;

    const precoTulipa = 4.80;
    const precoPizzaBase = 17.00;
    const precoCobertura = 1.50;

    const precoPizza = parseFloat((precoPizzaBase + (numeroCoberturas * precoCobertura)).toFixed(2));
    const custoTotal = parseFloat(((numeroTulipas * precoTulipa) + precoPizza).toFixed(2));
    const gorjeta = parseFloat((custoTotal * 0.1).toFixed(2));
    const custoTotalComGorjeta = parseFloat((custoTotal + gorjeta).toFixed(2));
    const valorPorPessoa = parseFloat((custoTotalComGorjeta / numeroPessoas).toFixed(2));

    res.json({ valorPorPessoa });
});

router.post('/ex4', function(req, res){
    
    const {salarioMinimo, horasTrabalhadas, dependentes, horasExtras} = req.body

    const valorHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valorHoraTrabalhada * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0
    if(salarioBruto > 2000){
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1
    } 

    const salarioLiquido = salarioBruto - imposto

    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

    res.json({ salarioBruto, imposto, gratificacao, salarioReceber })
});

router.post('/ex5', function(req, res){
    const { idAluno, n1, n2, n3, mediaEx } = req.body;

    const aproveitamento = parseFloat(((n1 + n2 * 2 + n3 * 3 + mediaEx) / 7).toFixed(2));

    let conceito, status;
    if (aproveitamento >= 9.0) {
        conceito = 'A';
        status = 'APROVADO';
    } else if (aproveitamento >= 7.5) {
        conceito = 'B';
        status = 'APROVADO';
    } else if (aproveitamento >= 6.0) {
        conceito = 'C';
        status = 'APROVADO';
    } else if (aproveitamento >= 4.0) {
        conceito = 'D';
        status = 'REPROVADO';
    } else {
        conceito = 'E';
        status = 'REPROVADO';
    }

    res.json({ 
        idAluno, 
        notas: { n1, n2, n3 }, 
        mediaEx, 
        aproveitamento, 
        conceito,
        status
    });
});

router.post('/ex6', function(req, res){
    const { altura, sexo } = req.body;

    let pesoIdeal;

    if (sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'homem') {
        pesoIdeal = parseFloat(((72.7 * altura) - 58).toFixed(2));
    } else if (sexo.toLowerCase() === 'feminino' || sexo.toLowerCase() === 'mulher') {
        pesoIdeal = parseFloat(((62.1 * altura) - 44.7).toFixed(2));
    } else {
        return res.status(400).json({ error: 'Essa resposta não é aceita no sistema. Por favor, insira "masculino" ou "feminino".' });
    }

    res.json({ pesoIdeal });
});

router.post('/ex7', function(req, res){
    const { v1, v2, v3 } = req.body;

    const n1 = parseFloat(v1);
    const n2 = parseFloat(v2);
    const n3 = parseFloat(v3);

    let soma;
    if (n1 >= n2 && n1 >= n3) {
        soma = n1 + (n2 > n3 ? n2 : n3);
    } else if (n2 >= n1 && n2 >= n3) {
        soma = n2 + (n1 > n3 ? n1 : n3);
    } else {
        soma = n3 + (n1 > n2 ? n1 : n2);
    }

    res.json({ soma });
});

router.post('/ex8', function(req, res){
    const { salario, idCargo } = req.body;

    let percentual;

    switch(idCargo) {
        case 101:
            percentual = 0.05;
            break;
        case 102:
            percentual = 0.075;
            break;
        case 103:
            percentual = 0.10;
            break;
        default:
            percentual = 0.15;
            break;
    }

    const salarioAntigo = parseFloat(salario);
    const novoSalario = salarioAntigo * (1 + percentual);
    const diferenca = novoSalario - salarioAntigo;

    res.json({ salarioAntigo, novoSalario, diferenca });
});

module.exports = router