function searchSite(term) {
    // Seleciona todo o conteúdo do site onde a busca será feita
    const content = document.querySelectorAll('p');

    // Limpa marcações anteriores
    content.forEach(paragraph => {
        paragraph.innerHTML = paragraph.textContent; // Remove qualquer tag <mark> anterior
    });

    // Se o termo de busca estiver vazio, não faz nada
    if (term.trim() === "") return;

    // Expressão regular para buscar o termo, ignorando maiúsculas/minúsculas
    const regex = new RegExp(`(${term})`, 'gi');

    // Percorre todos os parágrafos e aplica a busca
    content.forEach(paragraph => {
        // Substitui o texto encontrado, envolvendo-o com a tag <mark>
        paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<mark>$1</mark>');
    });
}

// Manipula o envio do formulário para executar a busca sem recarregar a página
document.getElementById('form-busca').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio normal do formulário
    const searchTerm = document.getElementById('busca').value;  // Obtém o termo digitado
    searchSite(searchTerm);  // Chama a função de busca
});

// Seleciona o botão de alternância e o elemento body
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// Adiciona um evento de clique ao botão
toggleBtn.addEventListener('click', function() {
    // Alterna entre as classes "light-mode" e "dark-mode"
    body.classList.toggle('dark-mode');
    
    // Verifica se o modo escuro está ativo e altera o texto do botão
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Modo Claro';
    } else {
        toggleBtn.textContent = 'Modo Escuro';
    }
});

