// Função para adicionar um item ao carrinho
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item.name + ' foi adicionado ao carrinho!');
    displayCartInNavbar(); // Atualiza a exibição do carrinho
}

// Função para alternar o menu suspenso do carrinho
function toggleCart() {
    document.getElementById("cartDropdown").classList.toggle("show");
    displayCartInNavbar(); // Atualiza a exibição do carrinho
}

// Função para exibir os itens no carrinho dentro da navbar
function displayCartInNavbar() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    cart.forEach((item, index) => {
        let itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - R$ ${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})"
             style="border-style: 
             outset; background: red;
             cursor: pointer;
             width: 20px; 
             height: 20px; 
             border-radius: 50%; 
             text-align: center;">
             </button></p>`;
        cartItemsList.appendChild(itemElement);
    });
}

// Função para remover itens do carrinho
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartInNavbar(); // Atualiza a exibição do carrinho
}

// Exibe o carrinho ao carregar a página
window.onload = displayCartInNavbar;

// Função para exibir os itens no carrinho na página de finalização do pedido
function displayCartInCheckout() {
    // Recupera os itens do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsCheckout = document.getElementById('cartItemsCheckout');
    cartItemsCheckout.innerHTML = ''; // Limpa o conteúdo anterior

    // Se o carrinho estiver vazio, mostra uma mensagem
    if (cart.length === 0) {
        cartItemsCheckout.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    let total = 0; // Variável para armazenar o total

    // Exibe cada item do carrinho
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.name} - R$ ${item.price.toFixed(2)}</p>`;
        cartItemsCheckout.appendChild(itemElement);
        total += item.price; // Soma o preço ao total
    });

    // Exibe o total do pedido
    let totalElement = document.createElement('div');
    totalElement.innerHTML = `<p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>`;
    cartItemsCheckout.appendChild(totalElement);
}

// Chama a função para exibir os itens do carrinho quando a página carregar
window.onload = function() {
    displayCartInCheckout();
};


