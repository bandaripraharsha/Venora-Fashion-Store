// ======================================================
// Venora PRODUCT PAGE
// PART 1
// ======================================================

// Current Product
let product = null;

// Current Image
let currentImage = 0;

// Quantity
let quantity = 1;

// ======================================================
// GET PRODUCT ID
// ======================================================

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

// ======================================================
// MERGE ALL PRODUCTS
// ======================================================

const allProducts = [

    ...shopProducts,

    ...collectionProducts

];

// ======================================================
// FIND PRODUCT
// ======================================================

product = allProducts.find(item => item.id === productId);
if (!product) {

    window.location.href = "shop.html";

}

// ======================================================
// DOM ELEMENTS
// ======================================================

const productName = document.getElementById("productName");

const productPrice = document.getElementById("productPrice");

const productOldPrice = document.getElementById("productOldPrice");

const productRating = document.getElementById("productRating");

const productReviews = document.getElementById("productReviews");

const productDescription = document.getElementById("productDescription");

const productImage = document.getElementById("mainProductImage");

const sizeOptions = document.getElementById("sizeOptions");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const galleryDots = document.getElementById("galleryDots");

// ======================================================
// LOAD PRODUCT
// ======================================================

function loadProduct(){

    productName.textContent = product.name;

    productPrice.textContent = `₹${product.price}`;

    if(product.oldPrice){

        productOldPrice.textContent = `₹${product.oldPrice}`;

    }

    productRating.textContent = product.rating;

    productReviews.textContent = `(${product.reviews} Reviews)`;

    productDescription.textContent = product.description;
 // ======================================
// PRODUCT DETAILS
// ======================================

const detailsList = document.getElementById("productDetailsList");

if (detailsList) {

    let details = [];

    switch (product.category) {

        case "Dresses":
            details = [
                "Premium breathable fabric",
                "Elegant flattering silhouette",
                "Comfortable all-day wear",
                "Perfect for parties & special occasions"
            ];
            break;

        case "Tops":
            details = [
                "Soft lightweight fabric",
                "Modern stylish fit",
                "Easy to pair with jeans & skirts",
                "Comfortable everyday wear"
            ];
            break;

        case "Bottoms":
            details = [
                "Premium stretch fabric",
                "Comfortable regular fit",
                "Smooth finished stitching",
                "Perfect for daily styling"
            ];
            break;

        case "Footwear":
            details = [
                "Soft cushioned footbed",
                "Lightweight anti-slip sole",
                "Durable premium construction",
                "Perfect for everyday & occasion wear"
            ];
            break;

        case "Bags":
            details = [
                "Premium vegan leather finish",
                "Spacious main compartment",
                "Strong durable handles",
                "Elegant everyday essential"
            ];
            break;

        default:
            details = [
                "Premium quality material",
                "Elegant modern design",
                "Comfortable everyday use",
                "Crafted for lasting durability"
            ];

    }

    detailsList.innerHTML = details.map(detail => `
        <li><i class="fa-solid fa-check"></i> ${detail}</li>
    `).join("");

}
productImage.src = product.images[0];

createSizes();

}
loadProduct();
function createSizes() {

    sizeOptions.innerHTML = "";

    if (!product.sizes || product.sizes.length === 0) return;

    product.sizes.forEach((size, index) => {

        const button = document.createElement("button");

        button.textContent = size;

        button.className = "size-btn";

        if (index === 0) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            document.querySelectorAll(".size-btn").forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

        });

        sizeOptions.appendChild(button);

    });

}
// ------------------------------------
// CREATE DOTS
// ------------------------------------
function showImage(index){

    currentImage = index;

    productImage.src = product.images[currentImage];

    updateDots();

}

function createDots(){

    galleryDots.innerHTML = "";

    product.images.forEach((image,index)=>{

        const dot = document.createElement("span");

        if(index===0){

            dot.classList.add("active");

        }

        dot.addEventListener("click",()=>{

            showImage(index);

        });

        galleryDots.appendChild(dot);

    });

}

// ------------------------------------
// UPDATE DOTS
// ------------------------------------

function updateDots(){

    const dots = galleryDots.querySelectorAll("span");

    dots.forEach((dot,index)=>{

        dot.classList.toggle("active",index===currentImage);

    });

}

// ------------------------------------
// NEXT IMAGE
// ------------------------------------

nextImage.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=product.images.length){

        currentImage=0;

    }

    showImage(currentImage);

});

// ------------------------------------
// PREVIOUS IMAGE
// ------------------------------------

prevImage.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=product.images.length-1;

    }

    showImage(currentImage);

});

// ------------------------------------
// INITIALIZE GALLERY
// ------------------------------------

createDots();

showImage(0);
// ======================================================
// QUANTITY
// ======================================================

const minusBtn = document.getElementById("minusQty");
const plusBtn = document.getElementById("plusQty");
const quantityValue = document.getElementById("quantityValue");

function updateQuantity() {
    quantityValue.textContent = quantity;
}

minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
});

plusBtn.addEventListener("click", () => {
    quantity++;
    updateQuantity();
});

updateQuantity();

// ======================================================
// WISHLIST
// ======================================================

const wishlistBtn = document.getElementById("wishlistBtn");

wishlistBtn.addEventListener("click", () => {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(item => item.id === product.id);

    if (!exists) {
        wishlist.push(product);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        wishlistBtn.innerHTML = "❤️ Added to Wishlist";
    } else {
        alert("Already in Wishlist");
    }

});

// ======================================================
// ADD TO CART
// ======================================================

const addToCartBtn = document.getElementById("addToCart");

addToCartBtn.addEventListener("click", () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            ...product,

            quantity: quantity

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${quantity} item(s) added to cart.`);

});
// ======================================================
// RELATED PRODUCTS
// ======================================================

const relatedProductsContainer = document.getElementById("relatedProducts");

function loadRelatedProducts() {

    if (!relatedProductsContainer) return;

    const relatedProducts = allProducts.filter(item =>
        item.category === product.category &&
        item.id !== product.id
    ).slice(0, 4);

    relatedProductsContainer.innerHTML = "";

    relatedProducts.forEach(item => {

        relatedProductsContainer.innerHTML += `
            <div class="col-lg-3 col-md-6 col-6 mb-4">

                <div class="product-card">

                    <div class="product-image">

                        <img src="${item.images[0]}" alt="${item.name}">

                    </div>

                    <div class="product-info">

                        <h6>${item.name}</h6>

                        <p class="price">
    ₹${item.price}
</p>

                        <a href="product.html?id=${item.id}" class="btn btn-dark w-100">
                            View Product
                        </a>

                    </div>

                </div>

            </div>
        `;

    });

}

loadRelatedProducts();