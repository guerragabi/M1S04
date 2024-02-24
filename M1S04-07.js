//[M1S04] Ex 7 - Laço while/do...while: Você foi contratado por um supermercado para catalogar a compra de uma cliente. 
// Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:
// (1)Hortifruti
// (2)Laticínios
// (3)Carnes
// (4)Peixes
// (5)Aves
// (6)Fechar pedido
// Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
// Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
// Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.

// Objeto para armazenar as quantidades de cada produto
const quantidades = {
    Hortifruti: 0,
    Laticinios: 0,
    Carnes: 0,
    Peixes: 0,
    Aves: 0
};

// Função para calcular e imprimir o produto com a maior quantidade
function imprimirMaiorQuantidade() {
    let maiorProduto = null;
    let maiorQuantidade = -1;

    for (const produto in quantidades) {
        if (quantidades[produto] > maiorQuantidade) {
            maiorProduto = produto;
            maiorQuantidade = quantidades[produto];
        }
    }

    console.log(`Produto com maior quantidade: ${maiorProduto} - Quantidade: ${maiorQuantidade} unidades.`);
}

// Loop para perguntar ao cliente qual produto deseja comprar e a quantidade
while (true) {
    const pedido = prompt("Digite o item que deseja comprar entre as opções a seguir: (1)Hortifruti; (2)Laticínios; (3)Carnes; (4)Peixes; (5)Aves; (6)Fechar pedido");

    if (pedido === "6") {
        // Se o cliente escolheu fechar o pedido, imprime o produto com maior quantidade
        imprimirMaiorQuantidade();
        break;
    }

    const produto = {
        "1": "Hortifruti",
        "2": "Laticinios",
        "3": "Carnes",
        "4": "Peixes",
        "5": "Aves"
    }[pedido];

    if (produto) {
        const quantidade = parseInt(prompt(`Quantidade de ${produto}:`), 10);
        quantidades[produto] += quantidade;
    } else {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}
