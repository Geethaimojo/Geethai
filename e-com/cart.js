let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartList = document.getElementById('cart-list');
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
        `;
        cartList.appendChild(productDiv);
    });

    const total = cart.reduce((acc, product) => acc + product.price, 0);
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    cartList.appendChild(totalDiv);
}

document.addEventListener('DOMContentLoaded', renderCart);
