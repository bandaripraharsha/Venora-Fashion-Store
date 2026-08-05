// =======================================
// Venora SEARCH
// =======================================

const allProducts = [
    ...shopProducts,
    ...collectionProducts
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const resultCount = document.getElementById("resultCount");

// Show all products initially
displayProducts(allProducts);

// Live Search
searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase().trim();

    const filtered = allProducts.filter(product => {

        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();

        const collection = product.collection
            ? product.collection.toLowerCase().replace("-", " ")
            : "";

        return (
            name.includes(keyword) ||
            category.includes(keyword) ||
            collection.includes(keyword)
        );

    });

    displayProducts(filtered);

});

function displayProducts(products) {

    searchResults.innerHTML = "";

    resultCount.innerHTML = `${products.length} Product(s) Found`;

    if (products.length === 0) {

        searchResults.innerHTML = `
            <div class="col-12">
                <div class="no-results">
                    <h3>No Products Found</h3>
                    <p>Try searching for Dresses, Tops, Bags, Footwear...</p>
                </div>
            </div>
        `;

        return;
    }

    products.forEach(product => {

        searchResults.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6">

            <div class="search-card">

                <img src="${product.images[0]}" alt="${product.name}">

                <div class="search-content">

                    <h5>${product.name}</h5>

                    <p>${product.category}</p>

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <button
                        class="view-btn"
                        onclick="window.location.href='product.html?id=${product.id}'">

                        View Product

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}