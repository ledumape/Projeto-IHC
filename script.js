document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 99.99, imagem: 'imagens/anao.jpg' },
        { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 149.99, imagem: 'imagens/Foto-02.jpg' },
        { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 199.99, imagem: 'imagens/Foto-01.jpg' },
        { id: 4, nome: 'Produto 4', descricao: 'Descrição do Produto 4', preco: 249.99, imagem: 'imagens/Foto-04.jpg' },
        { id: 5, nome: 'Produto 5', descricao: 'Descrição do Produto 5', preco: 299.99, imagem: 'imagens/Foto-03.jpg' },
    ];

    function adicionarAoCarrinho(id) {
        const produto = produtos.find(produto => produto.id === id);
        if (produto) {
            alert(`${produto.nome} foi adicionado ao carrinho.`);
        }
    }

    document.querySelectorAll('.add-carrinho').forEach(button => {
        button.addEventListener('click', function() {
            adicionarAoCarrinho(parseInt(this.getAttribute('data-id')));
        });
    });
});
