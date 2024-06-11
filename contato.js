document.addEventListener('DOMContentLoaded', function() {
    // Função para validar e enviar formulário de contato
    const contatoForm = document.getElementById('contatoForm');
    const feedback = document.getElementById('feedback');

    contatoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            // Simulação de envio de mensagem
            setTimeout(function() {
                feedback.style.display = 'block';
                contatoForm.reset();
            }, 500);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
