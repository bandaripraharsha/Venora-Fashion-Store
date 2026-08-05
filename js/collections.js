// ==========================================
// Venora - COLLECTIONS PAGE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    loadCollection("golden-haze", "goldenHazeProducts");
    loadCollection("minimal-muse", "minimalMuseProducts");
    loadCollection("bloom-edit", "bloomEditProducts");
    loadCollection("everyday-elegance", "everydayEleganceProducts");

    setupViewAllButtons();
});

// ==========================================
// LOAD COLLECTION
// ==========================================

function loadCollection(collectionName, containerId, showAll = false) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    const filteredProducts = collectionProducts.filter(product =>
        product.collection === collectionName
    );

    const productsToShow = showAll
        ? filteredProducts
        : filteredProducts.slice(0, 4);

    productsToShow.forEach(product => {

        container.innerHTML += `

        <div class="col-lg-3 col-md-6 col-4">

            <div class="product-card">

                <img src="${product.images[0]}"
                     alt="${product.name}"
                     class="img-fluid">

                <div class="product-info">

                    <h5>${product.name}</h5>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <a href="product.html?id=${product.id}"
                       class="btn btn-dark w-100">

                        View Product

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

// ==========================================
// VIEW ALL BUTTONS
// ==========================================

function setupViewAllButtons() {

    document.querySelectorAll(".view-all-btn").forEach(button => {

        button.addEventListener("click", function () {

            const collection = this.dataset.collection;

            let containerId = "";

            switch (collection) {

                case "golden-haze":
                    containerId = "goldenHazeProducts";
                    break;

                case "minimal-muse":
                    containerId = "minimalMuseProducts";
                    break;

                case "bloom-edit":
                    containerId = "bloomEditProducts";
                    break;

                case "everyday-elegance":
                    containerId = "everydayEleganceProducts";
                    break;

            }

            loadCollection(collection, containerId, true);

            this.style.display = "none";

        });

    });

}
// ======================================
// OPEN SELECTED COLLECTION
// ======================================

const params = new URLSearchParams(window.location.search);

const selectedCollection = params.get("collection");

if (selectedCollection) {

    const section = document.getElementById(selectedCollection);

    if (section) {

        setTimeout(() => {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

}