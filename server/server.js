const express = require('express');
const mongoose = require('mongoose');
const Contato = require('../models/Contato');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json()); 
app.use(express.static('public'));

// colocando a irl do mongo db funciona (:
const uri = '';

mongoose.connect(uri)
  .then(() => console.log('conectado no banco de dados'))
  .catch(err => console.error(' erro ao entrar no banco de dados:', err));

app.post('/contato', async (req, res) => {
  const { nome, email, feedback } = req.body;

  try {
    await Contato.create({ nome, email, mensagem: feedback });
    res.json({ mensagem: 'contato enviado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: 'erro ao salvar contato.' });
  }
});

app.post('/contato', async (req , res) =>{

  const {nome, email , senha} =  res.body;

  try{

    const usuario = await Usuario.create ({nome, email, senha})
    res.json({ mensagem: 'Usuario foi cadastrado' , usuario})

  }catch(err){

    console.error(err);
    res.status(500).json({mensagem: 'Erro no cadastro do usuario'})

  }

}) 

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    
    if (!usuario) {
      return res.status(400).json({ mensagem: 'Usuário não foi encontrado' });
    }

    if (usuario.senha !== senha) {
      return res.status(400).json({ mensagem: 'Senha incorreta' });
    }

    res.json({ mensagem: 'Login foi realizado com sucesso', usuario });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ mensagem: 'Erro ao tentar realizar o login' });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
