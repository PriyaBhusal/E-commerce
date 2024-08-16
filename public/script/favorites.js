let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addToFavorites(image,brand,description,price){
    const product = {image,brand,description,price}
    favorites.push(product);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    alert('Product added to favorites!')
    updateFavoritesCount()
}

function removeFromFavorites(index){
    favorites.splice(index,1);
    localStorage.setItem('favorites',JSON.stringify(favorites))
    renderFavorites();
}

function updateFavoritesCount(){
    const favoritesCountElement = document.getElementById('favorites-count')
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // cartCountElement.innerText = favorites.length;
    if (favoritesCountElement) {
        favoritesCountElement.innerText = favorites.length;
    }
}

function renderFavorites(){
    const favoritesItemsContainer = document.getElementById('favorites-items');
    const totalItemsElement = document.getElementById('total-items')

    if (!favoritesItemsContainer || !totalItemsElement ) return;

    //const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoritesItemsContainer.innerHTML='';
    let totalItems = 0;

    favorites.forEach((item,index)=>{
        const itemElement = document.createElement('div');
        itemElement.className = 'favorites-item';
        itemElement.innerHTML=`
        <img class="favorites-photo" src="${item.image}" alt="Product Image">
        <div class="item-info">
            <h3>${item.brand}</h3>
            <p>${item.description}</p>
            <span class="item-price">$${item.price}</span>
            <button class="delete-button" onclick="removeFromFavorites(${index})">Delete</button>
            </div>
        `;
        favoritesItemsContainer.appendChild(itemElement);
        totalItems++;
    })

    totalItemsElement.innerText = totalItems;
    updateFavoritesCount()


}

    document.addEventListener('DOMContentLoaded',function(){
        // renderFavorites();
        updateFavoritesCount()
        if (document.getElementById('favorites-items')) {
        renderFavorites();
        }
    })