// ==============================
// VEL0URA - SCRIPT.JS
// ==============================

// ------------------------------
// Navbar Shadow
// ------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.12)";

    } else {

        navbar.style.boxShadow =
            "0 3px 20px rgba(0,0,0,.04)";

    }

});

// ------------------------------
// Hero Parallax
// ------------------------------

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    heroImage.style.transform =
        `translateY(${window.scrollY * 0.12}px)`;

});

// ------------------------------
// Size Selection
// ------------------------------

const sizes = document.querySelectorAll(".sizes span");

sizes.forEach(size => {

    size.addEventListener("click", function () {

        sizes.forEach(item => {

            item.style.background = "";
            item.style.color = "";
            item.style.borderColor = "#ccc";

        });

        this.style.background = "#8B6B4A";
        this.style.color = "#fff";
        this.style.borderColor = "#8B6B4A";

    });

});
// ------------------------------
// Color Selection
// ------------------------------

const colors = document.querySelectorAll(".colors span");

colors.forEach(color => {

    color.addEventListener("click", function () {

        colors.forEach(c => {

            c.style.transform = "scale(1)";
            c.style.boxShadow = "0 0 5px rgba(0,0,0,.2)";

        });

        this.style.transform = "scale(1.3)";
        this.style.boxShadow = "0 0 12px rgba(0,0,0,.5)";

    });

});

// ==========================
// Wishlist
// ==========================

const productButtons = document.querySelectorAll(".product-buttons");

productButtons.forEach(group => {

    const wishBtn = group.children[0];

    wishBtn.addEventListener("click", function () {

        if (this.textContent.includes("Wishlist")) {

            this.innerHTML = "❤️ Saved";

        } else {

            this.innerHTML = "♡ Wishlist";

        }

    });

});

// ------------------------------
// Add To Cart
// ------------------------------

const cartButtons = document.querySelectorAll(".product-buttons button:last-child");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✔ Added";
        button.style.background = "#2E8B57";

        setTimeout(() => {

            button.innerHTML = "🛒 Add Cart";
            button.style.background = "#8B6B4A";

        }, 1500);

    });

});
// ------------------------------
// Fade Animation
// ------------------------------

const revealItems = document.querySelectorAll(
    ".collection-card, .product-card, .category-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s ease";

    observer.observe(item);

});

// ------------------------------
// Product Card Lift
// ------------------------------

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ------------------------------
// Console
// ------------------------------

console.log("Venora Loaded Successfully");
// ==============================
// 360° HERO SPIN VIEWER
// ==============================

const hero = document.getElementById("heroRotate");
const viewer = document.querySelector(".spin-viewer");

if (hero && viewer) {

    // --------------------------
    // Image Frames
    // --------------------------

    const frames = [];

    for (let i = 1; i <= 8; i++) {

        frames.push(`images/hero/frame${i}.png`);

    }

    // --------------------------
    // Preload Images
    // --------------------------

    frames.forEach(src => {

        const img = new Image();
        img.src = src;

    });

    let frame = 0;

    hero.src = frames[0];

    // --------------------------
    // Show Frame
    // --------------------------

    function showFrame() {

        hero.src = frames[frame];

    }

    // --------------------------
    // Autoplay
    // --------------------------

    let autoplay = true;

    const autoRotate = setInterval(() => {

        if (!autoplay) return;

        frame++;

        if (frame >= frames.length) {

            frame = 0;

        }

        showFrame();

    }, 450);

    // --------------------------
    // Pause on Hover
    // --------------------------

    viewer.addEventListener("mouseenter", () => {

        autoplay = false;

    });

    viewer.addEventListener("mouseleave", () => {

        autoplay = true;

    });

    // --------------------------
    // Drag to Rotate
    // --------------------------

    let dragging = false;
    let lastX = 0;

    viewer.addEventListener("mousedown", (e) => {

        dragging = true;
        lastX = e.clientX;
        viewer.style.cursor = "grabbing";

    });

    window.addEventListener("mouseup", () => {

        dragging = false;
        viewer.style.cursor = "grab";

    });

    window.addEventListener("mousemove", (e) => {

        if (!dragging) return;

        const difference = e.clientX - lastX;

        if (Math.abs(difference) > 18) {

            if (difference > 0) {

                frame--;

            } else {

                frame++;

            }

            if (frame < 0) {

                frame = frames.length - 1;

            }

            if (frame >= frames.length) {

                frame = 0;

            }

            showFrame();

            lastX = e.clientX;

        }

    });

}
// ==============================
// FINAL INITIALIZATION
// ==============================

// Prevent image dragging

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

// Smooth page loading

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("✅ Venora Loaded Successfully");

});

// ------------------------------
// Future Ready
// ------------------------------
// Reserved for:
//
// ✔ Mobile swipe support
// ✔ Keyboard controls
// ✔ Product zoom
// ✔ Multiple 360° products
// ✔ Touch gestures
// ✔ Lazy loading
//
// (We'll add these later.)