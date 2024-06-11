document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { id: 1, nome: 'Cachaceiro', descricao: 'Conheça nosso carismático e único anão cachaceiro! Com uma altura de pouco mais de um metro, ele traz uma presença inesquecível e uma alegria contagiante para qualquer evento. Vestido com trajes típicos de boteco, incluindo uma camisa xadrez, suspensórios e um chapéu de palha, ele é a alma da festa. Seu bigode bem aparado e seu sorriso largo são complementados por um olhar brilhante e divertido. Especialista em entreter convidados, ele serve bebidas com uma destreza impressionante, contando piadas e fazendo malabarismos com garrafas e copos. Além de ser um excelente barman, ele também pode conduzir jogos de bebida e dançar músicas populares, garantindo que todos no evento se divirtam. Contrate nosso anão cachaceiro para fazer do seu evento uma ocasião memorável e cheia de risadas.', preco: 99.99, imagem: 'imagens/anao.jpg' },
        { id: 2, nome: 'Keke', descricao: 'Conheça o Keke, nosso anão dançarino que transforma qualquer evento em uma verdadeira festa! Com sua estatura marcante de pouco mais de um metro, Keke traz uma energia vibrante e contagiante para a pista de dança. Vestido com uma camisa xadrez azul e branca, complementada por um estiloso gorro vermelho, ele é o destaque em qualquer celebração. Keke possui um sorriso cativante e olhos brilhantes, refletindo seu espírito alegre e entusiasta. Ele é um mestre na arte da dança, capaz de executar uma variedade de estilos, desde danças populares até movimentos mais complexos, garantindo entretenimento e diversão para todos os convidados. Além de dançar, Keke interage com o público, levando todos a se juntarem a ele na dança e criar momentos memoráveis. Contrate Keke, o anão dançarino, para adicionar um toque especial e inesquecível ao seu evento!.', preco: 149.99, imagem: 'imagens/Foto-02.jpg' },
        { id: 3, nome: 'Thiago', descricao: 'Apresentamos Thiago, o anão especialista em pole dance que traz um toque super-heroico para qualquer evento! Com sua estatura memorável e sua presença energética, Thiago se destaca não apenas por suas habilidades impressionantes no pole dance, mas também por seu traje icônico de Superman. Vestido com a capa azul e o "S" no peito, ele incorpora a alegria e a força do famoso super-herói, enquanto executa acrobacias e movimentos elegantes ao redor do poste. Thiago tem uma habilidade natural para capturar a atenção de todos na sala, com uma performance que combina força, flexibilidade e uma dose generosa de carisma. Seu show é uma mistura perfeita de entretenimento e arte, ideal para eventos que buscam oferecer uma experiência única e vibrante. Ele não só domina a técnica do pole dance, mas também sabe como interagir com o público, fazendo com que cada apresentação seja personalizada e inesquecível. Contrate Thiago para o seu próximo evento e deixe que esse super-herói do pole dance eleve a diversão a novas alturas, garantindo uma noite de espetáculo e magia!.', preco: 199.99, imagem: 'imagens/Foto-01.jpg' },
        { id: 4, nome: 'Pitoco', descricao: 'Conheça Pitoco, nosso anão especialista em calistenia, conhecido por ser o menor da loja, mas com um talento gigantesco! Pitoco sempre chega aos eventos vestido como Homem-Aranha, completo com o traje vermelho e azul icônico e a máscara que captura a essência do super-herói ágil e destemido. Pitoco utiliza suas habilidades excepcionais em calistenia para realizar movimentos que desafiam a gravidade e demonstram incrível força e flexibilidade. Ele combina acrobacias, escaladas e equilíbrio em uma rotina dinâmica que captura a admiração de todos os presentes. O traje de Homem-Aranha não só adiciona um elemento visual emocionante às suas performances, mas também enfatiza sua agilidade e habilidade para escalar e se mover com a leveza de um verdadeiro super-herói. Ideal para eventos que procuram entretenimento dinâmico e inspirador, Pitoco não apenas exibe sua maestria em calistenia, mas também interage com o público, encorajando-os a participar e experimentar a alegria do movimento. Contrate Pitoco, o anão especialista em calistenia vestido de Homem-Aranha, para trazer um espetáculo de força, habilidade e diversão ao seu próximo evento!', preco: 249.99, imagem: 'imagens/Foto-04.jpg' },
        { id: 5, nome: 'Zezinho', descricao: 'Apresentamos Zezinho, nosso anão especialista em direito que promete condenar a rapaziada a se divertir sem limites em sua festa! Zezinho sempre marca presença com seu elegante terno, completo com gravata e um distintivo broche de lapela, transmitindo uma imagem de autoridade e sofisticação.Com um diploma em direito e uma habilidade inata para entreter, Zezinho usa seu conhecimento jurídico de maneira criativa e divertida. Ele atua como o "juiz" da festa, dando "sentenças" que garantem que todos se divirtam. Com um martelo de brinquedo, ele "julga" os convidados em casos hilários e festivos, como quem deve ser o próximo a dançar ou quem precisa contar a melhor piada.Zezinho não só traz uma atmosfera de alegria com suas brincadeiras jurídicas, mas também sabe como manter todos envolvidos e animados. Ele é perfeito para eventos que procuram um toque de originalidade e humor, garantindo que todos os "réus" deixem a festa com um sorriso no rosto.Contrate Zezinho, o anão especialista em direito vestido de terno, e deixe que ele condene seus convidados a uma noite inesquecível de diversão e risadas!.', preco: 299.99, imagem: 'imagens/Foto-03.jpg' },
    ];

    function buscarProdutos(query) {
        return produtos.filter(produto => produto.nome.toLowerCase().includes(query.toLowerCase()));
    }

    function exibirResultadosBusca(resultados) {
        const resultadosBusca = document.getElementById('resultadosBusca');
        resultadosBusca.innerHTML = '';
        if (resultados.length > 0) {
            resultados.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.className = 'produto';
                produtoDiv.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <p>R$ ${produto.preco}</p>
                    <button class="add-carrinho" data-id="${produto.id}">Adicionar ao Carrinho</button>
                `;
                resultadosBusca.appendChild(produtoDiv);
            });
            document.querySelectorAll('.add-carrinho').forEach(button => {
                button.addEventListener('click', function() {
                    adicionarAoCarrinho(parseInt(this.getAttribute('data-id')));
                });
            });
        } else {
            resultadosBusca.innerHTML = '<p>Nenhum produto encontrado.</p>';
        }
    }

    function adicionarAoCarrinho(id) {
        const produto = produtos.find(produto => produto.id === id);
        if (produto) {
            alert(`${produto.nome} foi adicionado ao carrinho.`);
        }
    }

    document.getElementById('searchButton').addEventListener('click', function() {
        const query = document.getElementById('searchInput').value;
        const resultados = buscarProdutos(query);
        exibirResultadosBusca(resultados);
    });
});
