const express = require('express');
const  router = express.Router();

router.post("/ex1" , function(req,res){

    res.json(req.body)

     const num = req.body

    // for(i=0; i<num.length; i++){
    //     console.log(num[i])
    // }   
    
    let soma = 0
    for( let n of num){
        soma += n
        //soma = soma + n
    }

    const media = soma / num.length

     
    res.json({media})
})

router.post('/ex2', function(req, res) {
    let num = req.body;

    let maior = num[0];
    let menor = num[0];

    for (let i = 1; i < num.length; i++) {
        if (num[i] > maior) {
            maior = num[i];
        }
        if (num[i] < menor) {
            menor = num[i];
        }
    }

    res.json({ maior, menor });
});

router.post('/ex3', function(req, res) {
    let num = [];
   
    for (let i = 1; i <= 10; i++) {
        num.push(i);
    }
   
    res.json({ num: num });
});

router.post("/ex4", (req, res) => {
    const num = [];
    
    for (let i = 10; i >= 1; i--) {
        num.push(i);
    }
   
    res.json({ num });
});

router.post("/ex5", (req, res) => {
    const num = [];
    
    let contador = 0;
    
    for (let i = 101; contador < 10; i++) {
        num.push(i);
        contador++;
    }
    
    res.json({ num });
});

router.post("/ex6", (req, res) => {
    const { num } = req.body;
    
    let total = 0;

    if (num.length === 10) {
        for (let i = 0; i < 10; i++) {
            total += parseInt(num[i]);
        }
        
        res.json({ total });
    } else {
        
        res.status(400).json({ error: "Você colocou exatamente 10 números?" });
    }
});

router.post("/ex7", (req, res) => {
    const { n } = req.body;

    const num = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            num.push(i)
        }
    }

    res.json({ num });
})

router.post("/ex8", (req, res) => {
    const { valores } = req.body;
    
    let quantos = 0;

    for (let i = 0; i < valores.length; i++) {
      
        if (valores[i] < 0) {
            quantos++;
        }
    }

    res.json({ quantos });
});

router.post("/ex9", (req, res) => {
    const { valores } = req.body;

    let quais = [];

    for (let i = 0; i < valores.length; i++) {
       
        if (valores[i] < 0) {
            quais.push(valores[i]);
        }
    }

    res.json({ quais });
});

router.post("/ex10", (req, res) => {
    const { valores } = req.body;
    
    let noIntervalo = 0;
    let foraIntervalo = 0;

    for (let i = 0; i < valores.length; i++) {

        if (valores[i] >= 10 && valores[i] <= 20) {
            noIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    res.json({ noIntervalo, foraIntervalo });
});

router.post("/ex11", (req, res) => {
    const { valores } = req.body;

    if (!valores || valores.length === 0 || !Array.isArray(valores)) {
        return res.status(400).json({ error: "Os valores fornecidos não são validos, Insira apenas valores válidos! " });
    }

    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        if (isNaN(valores[i])) {
            return res.status(400).json({ error: "Contém valor(es) inválido(s)!!" });
        }
        total += parseFloat(valores[i]);
    }

    const media = total / valores.length;

    res.json({ media });
});

router.post("/ex12", (req, res) => {
    const { valores } = req.body;

    if (!valores || valores.length === 0 || !Array.isArray(valores)) {
        return res.status(400).json({ error: "Os valores fornecidos não são validos, Insira apenas valores válidos! " });
    }

    let total = 0;

    for (let i = 0; i < valores.length; i++) {
        if (isNaN(valores[i])) {
            return res.status(400).json({ error:"Contém valor(es) inválido(s)!!" });
        }
        total += parseFloat(valores[i]);
    }

    const media = total / valores.length;

    res.json({ media });
});

router.post("/ex13", (req, res) => {
    const { num } = req.body;

    if (!num || !Array.isArray(num)) {
        return res.status(400).json({ error: "Os valores não foram fornecidos corretamente, Insira os valores corretamente!" });
    }

    const triplo = [];

    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            return res.status(400).json({ error: "Contém valores que não são numéricos" });
        }
        const triplo = num[i] * 3;
        triplo.push(triplo);
    }

    res.json({ triplo });
})

router.post("/ex14", (req, res) => {
    const { num } = req.body;

    if (!num || !Array.isArray(num)) {
        return res.status(400).json({ error: "Os valores não foram fornecidos corretamente, Insira os valores corretamente!"});
    }

    const oDobro = [];

    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            return res.status(400).json({ error: "Contém valores que não são numéricos" });
        }
        const dobro = num[i] * 2;
        oDobro.push(dobro);
    }

    res.json({ oDobro });
})

router.post("/ex15", (req, res) => {
    const { numeros } = req.body;

    if (!numeros || !Array.isArray(numeros)) {
        return res.status(400).json({ error: "Os valores não foram fornecidos corretamente, Insira os valores corretamente!" });
    }

    let inferior40 = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 40) {
            inferior40 += numeros[i];
        }
    }

    res.json({ inferior40 });
})

router.post("/ex16", (req, res) => {
    const { numMercadorias, numMercadoria } = req.body;
    let total = 0;

    for (let i = 0; i < numMercadorias; i++) {
        total += numMercadoria[i];
    }

    const media = total / numMercadorias;

    res.json({ total, media });
})

router.post("/ex17", (req, res) => {
    const { valorI, valorF } = req.body;
    let impares = [];
    let soma = 0;

    for (let i = valorI; i <= valorF; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
            soma += i;
        }
    }

    res.json({ impares, soma });
})

router.post("/ex18", (req, res) => {
    const { num } = req.body;

    if (!num || !Array.isArray(num)) {
        return res.status(400).json({ error: "Os valores não foram fornecidos corretamente, Insira os valores corretamente!" });
    }

    let maior = num[0];
    let menor = num[0];
    let soma = 0;

    for (let i = 0; i < num.length; i++) {
        const valor = num[i];
        if (valor > maior) maior = valor;
        if (valor < menor) menor = valor;
        soma += valor;
    }

    const media = soma / num.length;

    res.json({ maior, menor, media });
})

router.post("/ex19", (req, res) => {
    const { alunos } = req.body;

    if (!alunos || !Array.isArray(alunos)) {
        return res.status(400).json({ error: "Os valores não foram fornecidos corretamente, Insira os valores corretamente!" });
    }

    const numAlunosPorCurso = [0, 0, 0];
    const numAlunosEntre20e25PorCurso = [0, 0, 0];
    const somaIdadesPorCurso = [0, 0, 0];
    const numAlunosPorCursoParaMedia = [0, 0, 0];

    for (let aluno of alunos) {
        numAlunosPorCurso[aluno.curso - 1]++;
        if (aluno.idade >= 20 && aluno.idade <= 25) numAlunosEntre20e25PorCurso[aluno.curso - 1]++;
        somaIdadesPorCurso[aluno.curso - 1] += aluno.idade;
        numAlunosPorCursoParaMedia[aluno.curso - 1]++;
    }

    const mediaIdadePorCurso = somaIdadesPorCurso.map((soma, index) => soma / numAlunosPorCursoParaMedia[index]);

    let menorMediaIdadeCurso = 1;
    for (let i = 1; i < mediaIdadePorCurso.length; i++) {
        if (mediaIdadePorCurso[i] < mediaIdadePorCurso[menorMediaIdadeCurso]) {
            menorMediaIdadeCurso = i;
        }
    }

    res.json({ numAlunosPorCurso, numAlunosEntre20e25PorCurso, menorMediaIdadeCurso });
})

router.post("/ex20", (req, res) => {
    let tabuada = '';

    for (let i = 1; i <= 10; i++) {
        tabuada += `Tabuada do ${i}:\n`;

        for (let j = 1; j <= 10; j++) {
            tabuada += `${i} x ${j} = ${i * j}\n`;
        }
        tabuada += '\n'; 
    }

    res.json(tabuada);
})

router.post("/ex21", (req, res) => {
    const { espectadores } = req.body;

    if (!espectadores || !Array.isArray(espectadores)) {
        return res.status(400).json({ error: "Os valores não foram fornecidos corretamente, Insira os valores corretamente!" });
    }

    const qtdNotas10 = espectadores.filter(espectador => espectador.nota === 10).length;
    const somaIdades = espectadores.reduce((soma, espectador) => soma + espectador.idade, 0);
    const mediaIdade = somaIdades / espectadores.length;
    const qtdNotas5ouMenos = espectadores.filter(espectador => espectador.nota <= 5).length;
    const percentagemNotas5ouMenos = (qtdNotas5ouMenos / espectadores.length) * 100;
    const pessoaMaisVelha = espectadores.reduce((maisVelha, espectador) => {

        return (espectador.idade > maisVelha.idade) ? espectador : maisVelha;
    });

    const resposta = { qtdNotas10, mediaIdade, percentagemNotas5ouMenos };

    resposta.pessoaMaisVelha =  pessoaMaisVelha.nome;

    res.json(resposta);
})

router.post("/ex22", (req, res) => {
    const { produtos } = req.body;

    let maiorPreco = produtos[0].preco;
    let somaPrecos = 0;

    for (let i = 0; i < produtos.length; i++) {
        const preco = produtos[i].preco;
        if (preco > maiorPreco) maiorPreco = preco;
        somaPrecos += preco;
    }

    const mediaPrecos = somaPrecos / produtos.length;   
    
     res.json({maiorPreco, mediaPrecos});
})


module.exports = router