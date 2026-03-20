// Importação dos módulos necessários
const express = require('express'); //importe o módulo 'express'
const path = require('path'); // Importe o módulo 'path'
const rotas = require('./routes/index.js'); // Importe o arquivo de rotas

//  Criação da aplicação Express
const app = express();
const port = process.env.PORT || 3000; // Usa a porta da nuvem ou a 3000 localmente

// Configurar o diretório para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// body parser para processar dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conectando as Rotas à aplicação principal
app.use('/', rotas);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
