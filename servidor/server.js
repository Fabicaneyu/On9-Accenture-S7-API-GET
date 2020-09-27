const express = require('express')
const app = express();
const porta = 3000;
const biografias = require('../mulheres/biografia.json')

//@route GET /biografias
//@desc Biografias 
//@access Public
app.get('/biografias', (req, res) => {
    res.json(biografias);
})

//@route GET /biografias/:id
//@desc Retorna uma biografia
//@access Public
app.get('/biografias/:id', (req,res)=> {
    const {id} = req.params;
    const biografia = biografias.find(bio => bio.id == id);

    if(!biografia) return res.status(204).json();

    res.json(biografia);
})



app.listen(porta, function() {
    console.log("Servidor rodando")
})




