    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(image, brand, description, price) {
        const product = { image, brand, description, price:Number(price) };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
        updateCartCount();
    }

    function removeFromCart(index){
        cart.splice(index,1);
        localStorage.setItem('cart',JSON.stringify(cart));
        renderCart();
    }

    function updateCartCount(){
        const cartCountElement = document.getElementById('cart-count')
        // const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cartCountElement) {
            cartCountElement.innerText = cart.length;
        }
    }

    //document.addEventListener('DOMContentLoaded',
         function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const totalItemsElement = document.getElementById('total-items');
        const totalElement = document.getElementById('total');
        if (!cartItemsContainer || !totalItemsElement || !totalElement) return;
        // const cart = JSON.parse(localStorage.getItem('cart')) || [];

        cartItemsContainer.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach((item,index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img class="cart-photo" src="${item.image}" alt="Product Image">
                <div class="item-info">
                    <h3>${item.brand}</h3>
                    <p>${item.description}</p>
                    <span class="item-price">$${item.price}</span>
                   <button class="delete-button" onclick="removeFromCart(${index})">Delete</button>

                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalItems++;
            totalPrice += Number(item.price);
         });

        totalItemsElement.innerText = totalItems;
        totalElement.innerText = totalPrice.toFixed(2);
        updateCartCount();
    }
    document.addEventListener('DOMContentLoaded',function(){
        // renderCart();
        updateCartCount();
        if (document.getElementById('cart-items')) {
            renderCart();
        }
    })


