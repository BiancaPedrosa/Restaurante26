// Importação dos módulos necessários
const express = require('express'); //importe o módulo 'express'
const path = require('path'); // Importe o módulo 'path'
const cardapio = require('./cardapio.js'); // Importe o módulo 'cardapio'

//  Criação da aplicação Express
const app = express();
const port = 3000;

// Configurar o diretório para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// body parser para processar dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rotas
// Página Principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

// Cardápio
app.get('/cardapio', (req, res) => {
    // Executa a lógica do seu módulo
    const dados = cardapio.getProdutos(path.join(__dirname, 'data', 'cardapio.json'));
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
app.get('/faleconosco', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/faleconosco.html'));
});

app.post('/faleconosco',(req, res) => {
  res.write("Mensagem recebida: " + req.body.nome + " - " + req.body.email + " - " + req.body.mensagem); 
  res.end();
});

// Reservas
app.get('/reservas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/reserva.html'));
});
app.post('/reservas', (req, res) => {
   const { nome, email, data } = req.body;
   res.send(`dados recebidos: ${nome} ${email} ${data}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
