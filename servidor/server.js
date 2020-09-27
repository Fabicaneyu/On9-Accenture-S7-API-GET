const express = require('express')
const router = express.Router()
const porta = 3000;
const biografias = require('../mulheres/biografia.json')

//@route GET /biografias
//@desc Biografias 
//@access Public
router.get('/biografias', (req, res) => {
    res.json(biografias);
})

//@route GET /biografias/:id
//@desc Retorna uma biografia
//@access Public
router.get('/biografias/:id', (req,res)=> {
    const {id} = req.params;
    const biografia = biografias.find(bio => bio.id == id);

    if(!biografia) return res.status(204).json();

    res.json(biografia);
})

/* const id = req.params.id;
    const mensagem = mensagens[id]
    res.json(mensagem); */

app.listen(porta, function() {
    console.log("Servidor rodando")
})




