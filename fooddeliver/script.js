const restaurants = [
    {
        name: "Indian Spice",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Butter_chicken_%28Murgh_Makhani%29.jpg",
        menu: [
            { item: "Butter Chicken", price: 500, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Butter_Chicken.jpg" },
            { item: "Paneer Tikka", price: 350, image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Paneer_Tikka.jpg" },
            { item: "Biryani", price: 600, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Biryani.jpg" },
        ]
    },
    {
        name: "Chinese Dragon",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Chow_Mein.jpg",
        menu: [
            { item: "Chow Mein", price: 400, image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Chow_Mein.jpg" },
            { item: "Kung Pao Chicken", price: 450, image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Kung_Pao_Chicken.jpg" },
            { item: "Spring Rolls", price: 250, image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Spring_rolls.jpg" },
        ]
    },
    {
        name: "Mexican Fiesta",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Tacos.jpg",
        menu: [
            { item: "Tacos", price: 250, image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Tacos.jpg" },
            { item: "Enchiladas", price: 400, image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Enchiladas_verdes.jpg" },
            { item: "Churros", price: 200, image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Churros_with_chocolate.jpg" },
        ]
    },
];

// Function to display restaurants
function displayRestaurants() {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';
    restaurants.forEach((restaurant, index) => {
        const div = document.createElement('div');
        div.classList.add('restaurant');
        div.innerHTML = `<img src="${restaurant.image}" alt="${restaurant.name}">
                         <h3>${restaurant.name}</h3>
                         <p>Delicious Cuisine from ${restaurant.name}</p>`;
        div.onclick = () => showMenu(index);
        restaurantList.appendChild(div);
    });
}

// Function to show the menu
function showMenu(index) {
    const menuTitle = document.getElementById('menu-title');
    const menuItems = document.getElementById('menu-items');
    const menuModal = document.getElementById('menu-modal');
    
    menuTitle.textContent = restaurants[index].name;
    menuItems.innerHTML = '';
    restaurants[index].menu.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.item}" style="width: 50px; border-radius: 5px;">
                        ${item.item} - ₹${item.price}`;
        menuItems.appendChild(li);
    });
    menuModal.style.display = 'block';
}

// Close modal
document.getElementById('close-modal').onclick = function() {
    document.getElementById('menu-modal').style.display = 'none';
}

// Place order
document.getElementById('order-button').onclick = function() {
    alert('Order placed!');
    document.getElementById('menu-modal').style.display = 'none';
}

// Display restaurants on load
displayRestaurants();
