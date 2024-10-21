const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        description: "High-quality wireless headphones with noise cancellation and long battery life.",
        imageUrl: "https://via.placeholder.com/240x150?text=Headphones",
        colors: ["#FF5733", "#33FF57", "#3357FF"]
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "A smart watch that tracks your fitness and notifications.",
        imageUrl: "https://via.placeholder.com/240x150?text=Smart+Watch",
        colors: ["#FFC300", "#FF5733", "#33FF57"]
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 49.99,
        description: "Portable Bluetooth speaker with rich sound and deep bass.",
        imageUrl: "https://via.placeholder.com/240x150?text=Bluetooth+Speaker",
        colors: ["#C70039", "#FFC300", "#FF5733"]
    },
    {
        id: 4,
        name: "4K Ultra HD TV",
        price: 599.99,
        description: "Enjoy stunning picture quality with this 4K Ultra HD television.",
        imageUrl: "https://via.placeholder.com/240x150?text=4K+TV",
        colors: ["#581845", "#FF5733", "#33FF57"]
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <div class="color-options">
                ${product.colors.map(color => `
                    <div class="color-option" style="background-color: ${color};" onclick="selectColor(this, '${product.id}', '${color}')"></div>
                `).join('')}
            </div>
            <button onclick="addToCart(${product.id})">Buy Now</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        `;
        
        productList.appendChild(productDiv);
    });
}

function selectColor(element, productId, color) {
    const colorOptions = element.parentElement.querySelectorAll('.color-option');
    colorOptions.forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');
    console.log(`Selected color for product ${productId}: ${color}`);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${product.name} added to wishlist!`);
    } else {
        alert(`${product.name} is already in your wishlist!`);
    }
}

function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});
