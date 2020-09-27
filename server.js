const express = require('express')
const app = express();
const porta = 3000;
const estudantes = require('./estudantes.json')

app.use(express.json());

app.get('/estudantes', function(req, res) {
    res.json(estudantes);
})

//app.post('/')

app.listen(porta, function(){
    console.log("Servidor rodando")
})




