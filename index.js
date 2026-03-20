const express = require('express');
const router = express.Router();
const path = require('path');
const cardapio = require('../cardapio.js'); // Voltou uma pasta para achar o cardapio.js

// Página Principal
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});

// Cardápio
router.get('/cardapio', (req, res) => {
    // Executa a lógica do seu módulo
    const dados = cardapio.getProdutos(path.join(__dirname, '../data/cardapio.json'));
    const tabela = cardapio.showProdutos(dados);

    // Cria o HTML "na mão" usando crases (Template Literals)
    const htmlFinal = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="css/estilo.css"> 
            <title>Cardápio Dinâmico</title>
        </head>
        <body>
            <h1>Cardápio do Dia</h1>
            <div class="container">
                ${tabela}
            </div>
        </body>
        </html>
    `;

    // Envia a página pronta
    res.send(htmlFinal);
});

// Fale Conosco
router.get('/faleconosco', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/faleconosco.html'));
});

router.post('/faleconosco',(req, res) => {
  res.write("Mensagem recebida: " + req.body.nome + " - " + req.body.email + " - " + req.body.mensagem); 
  res.end();
});

// Reservas
router.get('/reservas', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/reserva.html'));
});
router.post('/reservas', (req, res) => {
   const { nome, email, data } = req.body;
   res.send(`dados recebidos: ${nome} ${email} ${data}`);
});

module.exports = router; // Exporta o roteador para ser usado no app.js