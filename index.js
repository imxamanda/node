const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const lista1 = require('./routes/lista1')
const lista2 = require('./routes/lista2')
const introducao = require('./routes/introducao')

app.use('/lista1', lista1)
app.use('/lista2', lista2)
app.use('/', introducao)

app.listen(3000, function(){
    console.log('Server up port 3000')
})