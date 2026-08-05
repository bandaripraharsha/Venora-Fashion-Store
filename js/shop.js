// ======================================================
// Venora SHOP
// ======================================================

// ------------------------------
// Global Variables
// ------------------------------

let filteredProducts = [...shopProducts];
let currentPage = 1;
const productsPerPage = 8;

// ------------------------------
// DOM Elements
// ------------------------------

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchProduct");
const sortSelect = document.getElementById("sortProducts");
const categoryFilters = document.querySelectorAll(".category-filter");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const sizeButtons = document.querySelectorAll(".size-btn");
const colorButtons = document.querySelectorAll(".color-btn");
const pagination = document.getElementById("pagination");

// ------------------------------
// Active Filters
// ------------------------------

let activeCategory = "";
let activeSize = "";
let activeColor = "";
let activeSearch = "";
let activePrice = 5000;
let activeSort = "default";

// ======================================================
// CREATE PRODUCT CARD
// ======================================================

function createProductCard(product) {

    return `

<div class="col-md-6 col-xl-4">

    <div class="product-card">

        <div class="product-image">

            <img
                src="${product.images[0]}"
                alt="${product.name}"
                class="img-fluid">

            <div class="product-overlay">

                <button
                    class="wishlist-btn"
                    data-id="${product.id}">

                    <i class="bi bi-heart"></i>

                </button>

            </div>

        </div>

        <div class="product-info">

            <h5>${product.name}</h5>

            <div class="rating">

                <i class="bi bi-star-fill"></i>

                ${product.rating}

                <span>(${product.reviews})</span>

            </div>

            <div class="price">

                <span class="current-price">
                    ₹${product.price}
                </span>

                ${
                    product.oldPrice
                    ? `<span class="old-price">₹${product.oldPrice}</span>`
                    : ""
                }

            </div>

            <a
                href="product.html?id=${product.id}"
                class="view-product">

                View Product

            </a>

        </div>

    </div>

</div>

`;

}

// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts() {

productsContainer.innerHTML = "";

const start = (currentPage - 1) * productsPerPage;

const end = start + productsPerPage;

const currentProducts =
filteredProducts.slice(start, end);

if(currentProducts.length === 0){

productsContainer.innerHTML =

`

<div class="col-12 text-center py-5">

<h3>No Products Found</h3>

<p>

Try changing your filters.

</p>

</div>

`;

return;

}

currentProducts.forEach(product=>{

productsContainer.innerHTML +=

createProductCard(product);

});

updatePagination();

}
// ======================================================
// APPLY FILTERS
// ======================================================

function applyFilters() {

    filteredProducts = [...shopProducts];

    // ------------------------------
    // Search
    // ------------------------------

    if (activeSearch !== "") {

        filteredProducts = filteredProducts.filter(product =>

            product.name.toLowerCase().includes(activeSearch) ||

            product.category.toLowerCase().includes(activeSearch) ||

            product.color.toLowerCase().includes(activeSearch)

        );

    }

    // ------------------------------
    // Category
    // ------------------------------

    if (activeCategory !== "") {

        filteredProducts = filteredProducts.filter(product =>

            product.category === activeCategory

        );

    }

    // ------------------------------
    // Price
    // ------------------------------

    filteredProducts = filteredProducts.filter(product =>

        product.price <= activePrice

    );

    // ------------------------------
    // Size
    // ------------------------------

    if (activeSize !== "") {

        filteredProducts = filteredProducts.filter(product =>

            product.sizes.includes(activeSize)

        );

    }

    // ------------------------------
    // Color
    // ------------------------------

    if (activeColor !== "") {

        filteredProducts = filteredProducts.filter(product =>

            product.color.toLowerCase() === activeColor.toLowerCase()

        );

    }

    // ------------------------------
    // Sorting
    // ------------------------------

    switch (activeSort) {

        case "low":

            filteredProducts.sort((a, b) => a.price - b.price);

            break;

        case "high":

            filteredProducts.sort((a, b) => b.price - a.price);

            break;

        case "name":

            filteredProducts.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;

        default:

            break;

    }

    currentPage = 1;

    displayProducts();

}

// ======================================================
// PAGINATION
// ======================================================

function updatePagination() {

    pagination.innerHTML = "";

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");

        button.className =
            "btn btn-outline-dark mx-1";

        if (i === currentPage) {

            button.classList.add("active");

        }

        button.textContent = i;

        button.addEventListener("click", () => {

            currentPage = i;

            displayProducts();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

        pagination.appendChild(button);

    }

}
// ======================================================
// EVENT LISTENERS
// ======================================================

// ------------------------------
// Search
// ------------------------------

if (searchInput) {

    searchInput.addEventListener("input", () => {

        activeSearch = searchInput.value.trim().toLowerCase();

        applyFilters();

    });

}

// ------------------------------
// Sort
// ------------------------------

if (sortSelect) {

    sortSelect.addEventListener("change", () => {

        activeSort = sortSelect.value;

        applyFilters();

    });

}

// ------------------------------
// Price Slider
// ------------------------------

if (priceFilter) {

    priceFilter.addEventListener("input", () => {

        activePrice = Number(priceFilter.value);

        if (priceValue) {

            priceValue.textContent = `₹${activePrice}`;

        }

        applyFilters();

    });

}

// ------------------------------
// Category Filter
// ------------------------------

categoryFilters.forEach(filter => {

    filter.addEventListener("change", () => {

        const checked = document.querySelector(".category-filter:checked");

        activeCategory = checked ? checked.value : "";

        applyFilters();

    });

});

// ------------------------------
// Size Buttons
// ------------------------------

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.classList.contains("active")) {

            button.classList.remove("active");

            activeSize = "";

        } else {

            sizeButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            activeSize = button.dataset.size;

        }

        applyFilters();

    });

});

// ------------------------------
// Color Buttons
// ------------------------------

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.classList.contains("active")) {

            button.classList.remove("active");

            activeColor = "";

        } else {

            colorButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            activeColor = button.dataset.color;

        }

        applyFilters();

    });

});

// ======================================================
// URL CATEGORY SUPPORT
// ======================================================

const params = new URLSearchParams(window.location.search);

const category = params.get("category");

if (category) {

    activeCategory = category;

    categoryFilters.forEach(filter => {

        if (filter.value === category) {

            filter.checked = true;

        }

    });

}

// ======================================================
// INITIAL LOAD
// ======================================================

applyFilters();
// ======================================================
// WISHLIST
// ======================================================

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function updateWishlistButtons() {

    const wishlist = getWishlist();

    document.querySelectorAll(".wishlist-btn").forEach(button => {

        const id = button.dataset.id;
        const icon = button.querySelector("i");

        if (wishlist.some(item => item.id == id)) {
            icon.classList.remove("bi-heart");
            icon.classList.add("bi-heart-fill");
        } else {
            icon.classList.remove("bi-heart-fill");
            icon.classList.add("bi-heart");
        }

        button.onclick = () => {

    let wishlist = getWishlist();

    const product = shopProducts.find(p => p.id == id);

    const existing = wishlist.find(item => item.id == id);

    if(existing){

        wishlist = wishlist.filter(item => item.id != id);

    }else{

        wishlist.push(product);

    }

    saveWishlist(wishlist);

    updateWishlistButtons();

};

    });

}

// ======================================================
// OVERRIDE DISPLAY TO REFRESH WISHLIST
// ======================================================

const originalDisplayProducts = displayProducts;

displayProducts = function () {

    originalDisplayProducts();

    updateWishlistButtons();

};

// ======================================================
// INITIALIZE
// ======================================================

displayProducts();