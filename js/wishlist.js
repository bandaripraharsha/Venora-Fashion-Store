// ======================================
// Venora WISHLIST
// ======================================

const wishlistContainer = document.getElementById("wishlistContainer");
const wishlistCount = document.getElementById("wishlistCount");
const emptyWishlist = document.getElementById("emptyWishlist");
const clearWishlist = document.getElementById("clearWishlist");

// Load Wishlist
function loadWishlist() {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlistContainer.innerHTML = "";

    wishlistCount.textContent = `${wishlist.length} Item${wishlist.length !== 1 ? "s" : ""}`;

    if (wishlist.length === 0) {

        emptyWishlist.classList.remove("d-none");
        clearWishlist.style.display = "none";

        return;

    }

    emptyWishlist.classList.add("d-none");
    clearWishlist.style.display = "block";

    wishlist.forEach(product => {

        wishlistContainer.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6">

            <div class="wishlist-card">

                <img src="${product.images[0]}" alt="${product.name}">

                <div class="wishlist-info">

                    <h5>${product.name}</h5>

                    <p class="category">${product.category}</p>

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <div class="wishlist-buttons">

                        <a href="product.html?id=${product.id}"
                           class="btn btn-dark">

                            View Product

                        </a>

                        <button
                            class="remove-btn"
                            onclick="removeWishlist('${product.id}')">

                            <i class="bi bi-trash"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

}

// Remove One Product
function removeWishlist(id) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist = wishlist.filter(item => item.id !== id);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    loadWishlist();

}

// Clear Wishlist
clearWishlist.addEventListener("click", () => {

    if (confirm("Clear your wishlist?")) {

        localStorage.removeItem("wishlist");

        loadWishlist();

    }

});

// Initial Load
loadWishlist();