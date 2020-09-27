const express = require('express')
const app = express();
const porta = 3000;
const biografias = require('../mulheres/biografia.json')

//Get
app.get('/biografias', (req, res) => {
    res.json(biografias);
})

//Get ID
app.get('/biografias/:id', (req,res)=> {
    const id = req.params.id;
    const mensagem = biografias[id];
    res.json(mensagem);
})

/* const id = req.params.id;
    const mensagem = mensagens[id]
    res.json(mensagem); */

app.listen(porta, function() {
    console.log("Servidor rodando")
})




