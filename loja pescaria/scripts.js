// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
    abrirCarrinho(); // Mostra o carrinho automaticamente ao adicionar
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoItens = document.getElementById('carrinho-itens');
    const carrinhoTotal = document.getElementById('carrinho-total');
    
    // Limpa o carrinho visual
    carrinhoItens.innerHTML = '';
    
    // Adiciona cada item ao carrinho visual
    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$${item.preco.toFixed(2)}`;
        carrinhoItens.appendChild(li);
        total += item.preco;
    });

    // Atualiza o total
    carrinhoTotal.textContent = `Total: R$${total.toFixed(2)}`;
}

// Função para abrir o modal do carrinho
function abrirCarrinho() {
    document.getElementById('carrinho-modal').style.display = 'flex';
}

// Função para fechar o modal do carrinho
function fecharCarrinho() {
    document.getElementById('carrinho-modal').style.display = 'none';
}

// Evento para fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('carrinho-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

