// modulo para ler o cardápio do restaurante

const fs = require('fs');// Importa o módulo 'fs' para manipulação de arquivos
const path = require('path');// Importa o módulo 'path' para manipulação de caminhos de arquivos    

// Função para ler o conteúdo de um arquivo
const getProdutos = (filename) => {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Erro ao ler o arquivo ${filename}:`, err);
        return null; // Retorna null em caso de erro
    }
}

// Exibe o cardápio formatado
const showProdutos = (cardapio) => {
    if (cardapio && Array.isArray(cardapio)) {
        console.log("Cardápio carregado com sucesso:");
        // Agora você pode iterar sobre o array 'cardapio' e acessar seus objetos
        let tabela = `<table class="table table-striped"><tr><th>Nome</th><th>Preco</th></tr>`;
        let linha= ``;  
        // Itera sobre o array 'cardapio' e cria uma linha para cada item
        cardapio.forEach(item => {
            linha += `<tr><td>${item.nome}</td><td>${item.preco}</td></tr>`;
      });

        tabela += linha + `</table>`;
        return tabela;
    } else {
        console.log("Não foi possível carregar o cardápio.");
    }
}

module.exports = {
  getProdutos : getProdutos,
  showProdutos: showProdutos
}