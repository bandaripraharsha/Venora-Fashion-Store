// ======================================
// Venora CART
// ======================================

const cartContainer = document.getElementById("cartContainer");
const emptyCart = document.getElementById("emptyCart");

const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

const clearCart = document.getElementById("clearCart");

const SHIPPING = 99;

// ======================================
// LOAD CART
// ======================================

function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        emptyCart.classList.remove("d-none");
        clearCart.style.display = "none";

        subtotal.textContent = "₹0";
        total.textContent = "₹0";

        return;

    }

    emptyCart.classList.add("d-none");
    clearCart.style.display = "block";

    let subtotalAmount = 0;

    cart.forEach(item => {

        subtotalAmount += item.price * item.quantity;

        cartContainer.innerHTML += `

        <div class="cart-card">

            <img src="${item.images[0]}" alt="${item.name}">

            <div class="cart-details">

                <h5>${item.name}</h5>

                <p>${item.category}</p>

                <div class="cart-price">
                    ₹${item.price}
                </div>

                <div class="quantity-box">

                    <button onclick="changeQty('${item.id}',-1)">−</button>

                    <strong>${item.quantity}</strong>

                    <button onclick="changeQty('${item.id}',1)">+</button>

                </div>

                <button
                    class="remove-cart"
                    onclick="removeItem('${item.id}')">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

    subtotal.textContent = `₹${subtotalAmount}`;

    total.textContent = `₹${subtotalAmount + SHIPPING}`;

}

// ======================================
// CHANGE QUANTITY
// ======================================

function changeQty(id, change) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity += change;

    if (product.quantity <= 0) {

        cart = cart.filter(item => item.id !== id);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// ======================================
// REMOVE ITEM
// ======================================

function removeItem(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// ======================================
// CLEAR CART
// ======================================

clearCart.addEventListener("click", () => {

    if (confirm("Are you sure you want to clear your cart?")) {

        localStorage.removeItem("cart");

        loadCart();

    }

});

// ======================================
// INITIAL LOAD
// ======================================

loadCart();