document.addEventListener('DOMContentLoaded', function() {
    // Simulação de uma lista de pedidos anteriores
    const pedidos = [
        { id: 1, produto: 'Produto 1', data: '2024-05-01', status: 'Entregue' },
        { id: 2, produto: 'Produto 2', data: '2024-05-05', status: 'Enviado' },
        // Adicione mais pedidos conforme necessário
    ];

    // Função para exibir pedidos anteriores
    function exibirPedidos() {
        const pedidosUl = document.getElementById('pedidos');
        pedidosUl.innerHTML = '';
        pedidos.forEach(pedido => {
            const li = document.createElement('li');
            li.textContent = `${pedido.produto} - ${pedido.data} - ${pedido.status}`;
            pedidosUl.appendChild(li);
        });
    }

    // Função para alterar email
    window.alterarEmail = function() {
        const novoEmail = prompt('Digite seu novo email:');
        if (novoEmail) {
            alert(`Email alterado para: ${novoEmail}`);
        }
    };

    // Função para salvar preferências de comunicação
    window.salvarPreferencias = function() {
        const newsletter = document.getElementById('newsletter').checked;
        alert(`Preferências salvas. Receber Newsletter: ${newsletter ? 'Sim' : 'Não'}`);
    };

    // Exibir pedidos ao carregar a página
    exibirPedidos();
});
