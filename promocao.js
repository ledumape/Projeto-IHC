document.addEventListener('DOMContentLoaded', function() {
    // Simulação de uma lista de promoções
    const promocoes = [
        { id: 1, nome: 'Anão Cachaceiro', descricao: 'Conheça nosso carismático e único anão cachaceiro! Com uma altura de pouco mais de um metro, ele traz uma presença inesquecível e uma alegria contagiante para qualquer evento. Vestido com trajes típicos de boteco, incluindo uma camisa xadrez, suspensórios e um chapéu de palha, ele é a alma da festa. Seu bigode bem aparado e seu sorriso largo são complementados por um olhar brilhante e divertido. Especialista em entreter convidados, ele serve bebidas com uma destreza impressionante, contando piadas e fazendo malabarismos com garrafas e copos. Além de ser um excelente barman, ele também pode conduzir jogos de bebida e dançar músicas populares, garantindo que todos no evento se divirtam. Contrate nosso anão cachaceiro para fazer do seu evento uma ocasião memorável e cheia de risadas.', precoAntigo: 99.99, precoNovo: 79.99, imagem: 'imagens/Foto-02.jpg' },
        { id: 2, nome: 'Anão Zezinho', descricao: '>Apresentamos Zezinho, nosso anão especialista em direito que promete condenar a rapaziada a se divertir sem limites em sua festa! Zezinho sempre marca presença com seu elegante terno, completo com gravata e um distintivo broche de lapela, transmitindo uma imagem de autoridade e sofisticação. Com um diploma em direito e uma habilidade inata para entreter, Zezinho usa seu conhecimento jurídico de maneira criativa e divertida. Ele atua como o "juiz" da festa, dando "sentenças" que garantem que todos se divirtam. Com um martelo de brinquedo, ele "julga" os convidados em casos hilários e festivos, como quem deve ser o próximo a dançar ou quem precisa contar a melhor piada.Zezinho não só traz uma atmosfera de alegria com suas brincadeiras jurídicas, mas também sabe como manter todos envolvidos e animados. Ele é perfeito para eventos que procuram um toque de originalidade e humor, garantindo que todos os "réus" deixem a festa com um sorriso no rosto.Contrate Zezinho, o anão especialista em direito vestido de terno, e deixe que ele condene seus convidados a uma noite inesquecível de diversão e risadas!.', precoAntigo: 149.99, precoNovo: 129.99, imagem: 'imagens/Foto-03.jpg' },
        // Adicione mais promoções conforme necessário
    ];

    // Função para exibir promoções
    function exibirPromocoes() {
        const listaPromocoes = document.getElementById('listaPromocoes');
        listaPromocoes.innerHTML = '';
        promocoes.forEach(promocao => {
            const promocaoDiv = document.createElement('div');
            promocaoDiv.className = 'promocao';
            promocaoDiv.innerHTML = `
                <img src="${promocao.imagem}" alt="${promocao.nome}">
                <h3>${promocao.nome}</h3>
                <p>${promocao.descricao}</p>
                <p>De: R$ ${promocao.precoAntigo} Por: R$ ${promocao.precoNovo}</p>
                <button onclick="adicionarAoCarrinho(${promocao.id})">Adicionar ao Carrinho</button>
            `;
            listaPromocoes.appendChild(promocaoDiv);
        });
    }

    // Carrinho de compras
    const carrinho = [];

    // Função para adicionar ao carrinho
    window.adicionarAoCarrinho = function(id) {
        const produto = promocoes.find(p => p.id === id) || produtos.find(p => p.id === id);
        if (produto) {
            carrinho.push(produto);
            alert(`Produto ${produto.nome} adicionado ao carrinho!`);
            atualizarCarrinho();
        }
    };

    // Função para atualizar carrinho
    function atualizarCarrinho() {
        const carrinhoDiv = document.getElementById('carrinho');
        if (carrinhoDiv) {
            carrinhoDiv.innerHTML = '';
            carrinho.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item-carrinho';
                itemDiv.innerHTML = `
                    <p>${item.nome} - R$ ${item.precoNovo || item.preco}</p>
                `;
                carrinhoDiv.appendChild(itemDiv);
            });
        }
    }

    // Exibir promoções ao carregar a página de promoções
    if (document.getElementById('listaPromocoes')) {
        exibirPromocoes();
    }
});
