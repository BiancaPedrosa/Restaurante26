// modulo para ler o cardápio do restaurante usando require() (estilo Express)

// Lê o JSON do cardápio direto com require() — igual ao require() do Express
const cardapio = require('./data/cardapio.json');

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
  cardapio: cardapio,
  showProdutos: showProdutos
}
