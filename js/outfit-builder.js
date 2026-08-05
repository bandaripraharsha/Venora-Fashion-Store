/*==========================================
            ELEMENTS
==========================================*/

const topsCard = document.querySelector("#topsCard");
const dressesCard = document.querySelector("#dressesCard");

const builderSection = document.querySelector("#builderSection");

const topsBuilder = document.querySelector("#topsBuilder");
const dressBuilder = document.querySelector("#dressBuilder");


/*==========================================
            PREVIEW IMAGES
==========================================*/

const topImage = document.querySelector("#selectedTop");
const bottomImage = document.querySelector("#selectedBottom");
const shoeImage = document.querySelector("#selectedShoe");
const bagImage = document.querySelector("#selectedBag");


/*==========================================
            PRICE TAGS
==========================================*/

const topPrice = document.querySelector("#topPrice");
const bottomPrice = document.querySelector("#bottomPrice");
const shoePrice = document.querySelector("#shoePrice");
const bagPrice = document.querySelector("#bagPrice");


/*==========================================
            BUTTONS
==========================================*/

const prevTop = document.querySelector("#prevTop");
const nextTop = document.querySelector("#nextTop");

const prevBottom = document.querySelector("#prevBottom");
const nextBottom = document.querySelector("#nextBottom");

const prevShoe = document.querySelector("#prevShoe");
const nextShoe = document.querySelector("#nextShoe");

const prevBag = document.querySelector("#prevBag");
const nextBag = document.querySelector("#nextBag");
/*==========================================
            DRESS ELEMENTS
==========================================*/

const dressImage = document.querySelector("#selectedDress");
const dressPrice = document.querySelector("#dressPrice");
const dressPlaceholder = document.querySelector("#dressPlaceholder");

const prevDress = document.querySelector("#prevDress");
const nextDress = document.querySelector("#nextDress");

let dressIndex = 0;

/*==========================================
            CONTAINERS
==========================================*/

const topsContainer = document.querySelector("#topsContainer");
const dressContainer = document.querySelector("#dressContainer");


/*==========================================
            PRODUCTS
==========================================*/

const allProducts = [...shopProducts, ...collectionProducts];

const tops = allProducts.filter(
    item => item.category === "Tops"
);

const dresses = allProducts.filter(
    item => item.category === "Dresses"
);

const bottoms = allProducts.filter(
    item => item.category === "Bottoms"
);

const shoes = allProducts.filter(
    item => item.category === "Footwear"
);

const bags = allProducts.filter(
    item => item.category === "Bags"
);


/*==========================================
            INDEXES
==========================================*/

let topIndex = 0;
let bottomIndex = 0;
let shoeIndex = 0;
let bagIndex = 0;


/*==========================================
            INITIAL STATE
==========================================*/

builderSection.style.display = "none";

topsBuilder.style.display = "none";
dressBuilder.style.display = "none";

const bottomPlaceholder = document.querySelector("#bottomPlaceholder");
const shoePlaceholder = document.querySelector("#shoePlaceholder");
const bagPlaceholder = document.querySelector("#bagPlaceholder");
bottomPlaceholder.style.display = "none";
shoePlaceholder.style.display = "none";
bagPlaceholder.style.display = "none";

bottomImage.style.display = "none";
shoeImage.style.display = "none";
bagImage.style.display = "none";

prevBottom.style.display = "none";
nextBottom.style.display = "none";

topImage.style.display = "none";
bottomImage.style.display = "none";
shoeImage.style.display = "none";
bagImage.style.display = "none";


topPrice.style.display = "none";
bottomPrice.style.display = "none";
shoePrice.style.display = "none";
bagPrice.style.display = "none";


prevTop.style.display = "none";
nextTop.style.display = "none";

prevBottom.style.display = "none";
nextBottom.style.display = "none";

prevShoe.style.display = "none";
nextShoe.style.display = "none";

prevBag.style.display = "none";
nextBag.style.display = "none";
/*==========================================
            CREATE CARD
==========================================*/

function createCard(product){

    return `

    <div class="product-card"
         data-id="${product.id}">

        <img src="${product.images[0]}"
             alt="${product.name}">

        <div class="product-info">

            <h5>${product.name}</h5>

            <p>₹${product.price}</p>

        </div>

    </div>

    `;

}


/*==========================================
            LOAD PRODUCTS
==========================================*/

function loadTops(){

    topsContainer.innerHTML = "";

    tops.forEach(product=>{

        topsContainer.innerHTML += createCard(product);

    });

}


function loadDresses(){

    dressContainer.innerHTML = "";

    dresses.forEach(product=>{

        dressContainer.innerHTML += createCard(product);

    });

}


loadTops();

loadDresses();


/*==========================================
            TOPS MODE
==========================================*/

topsCard.addEventListener("click",()=>{

    builderSection.style.display="block";

    topsBuilder.style.display="block";

    dressBuilder.style.display="none";
    document.querySelector(".top-preview").style.display = "flex";
document.querySelector(".bottom-preview").style.display = "flex";
document.querySelector(".dress-preview").style.display = "none";
document.querySelector(".preview-layout").style.gridTemplateColumns = "2fr 1fr";
document.querySelector(".outfit-right").style.display = "flex";

    topImage.style.display="none";
    bottomImage.style.display="none";
    shoeImage.style.display="none";
    bagImage.style.display="none";

    topPrice.style.display="none";
    bottomPrice.style.display="none";
    shoePrice.style.display="none";
    bagPrice.style.display="none";

    prevTop.style.display="none";
    nextTop.style.display="none";

    prevBottom.style.display="none";
    nextBottom.style.display="none";

    prevShoe.style.display="none";
    nextShoe.style.display="none";

    prevBag.style.display="none";
    nextBag.style.display="none";

    builderSection.scrollIntoView({

        behavior:"smooth"

    });

});


/*==========================================
            DRESS MODE
==========================================*/

dressesCard.addEventListener("click",()=>{

    builderSection.style.display="block";

    dressBuilder.style.display="block";

    topsBuilder.style.display="none";
    document.querySelector(".top-preview").style.display = "none";
document.querySelector(".bottom-preview").style.display = "none";
document.querySelector(".dress-preview").style.display = "flex";
document.querySelector(".preview-layout").style.gridTemplateColumns = "2fr 1fr";
document.querySelector(".outfit-right").style.display = "flex";

    topImage.style.display="none";
    bottomImage.style.display="none";
    shoeImage.style.display="none";
    bagImage.style.display="none";

    topPrice.style.display="none";
    bottomPrice.style.display="none";
    shoePrice.style.display="none";
    bagPrice.style.display="none";

    prevTop.style.display="none";
    nextTop.style.display="none";

    prevBottom.style.display="none";
    nextBottom.style.display="none";

    prevShoe.style.display="none";
    nextShoe.style.display="none";

    prevBag.style.display="none";
    nextBag.style.display="none";

    builderSection.scrollIntoView({

        behavior:"smooth"

    });

});
/*==========================================
            TOP SELECTION
==========================================*/

function showTop(index){

    topIndex = index;

    const product = tops[topIndex];

    topImage.src = product.images[0];

    topImage.style.display = "block";

    topPrice.innerHTML = `₹${product.price}`;

    topPrice.style.display = "block";

    prevTop.style.display = "flex";
    nextTop.style.display = "flex";

    prevBottom.style.display = "flex";
    nextBottom.style.display = "flex";
    bottomPlaceholder.style.display = "block";
bottomImage.style.display = "none";

}


/*==========================================
        SELECT TOP FROM CARD
==========================================*/

document.addEventListener("click",(e)=>{

    const card = e.target.closest("#topsContainer .product-card");

    if(!card) return;

    const id = card.dataset.id;

    topIndex = tops.findIndex(item=>item.id==id);

    if(topIndex===-1) return;

    document
        .querySelectorAll("#topsContainer .product-card")
        .forEach(card=>{

            card.classList.remove("selected");

        });

    card.classList.add("selected");

    showTop(topIndex);

});


/*==========================================
            TOP PREVIOUS
==========================================*/

prevTop.addEventListener("click",()=>{

    topIndex--;

    if(topIndex<0){

        topIndex=tops.length-1;

    }

    showTop(topIndex);

});


/*==========================================
            TOP NEXT
==========================================*/

nextTop.addEventListener("click",()=>{

    topIndex++;

    if(topIndex>=tops.length){

        topIndex=0;

    }

    showTop(topIndex);

});
/*==========================================
            SHOW BOTTOM
==========================================*/

function showBottom(index){

    bottomIndex = index;

    const product = bottoms[bottomIndex];

    bottomImage.src = product.images[0];
    bottomPlaceholder.style.display = "none";
bottomPlaceholder.style.display = "none";
bottomImage.style.display = "block";
    bottomPrice.innerHTML = `₹${product.price}`;
    bottomPrice.style.display = "block";

    prevShoe.style.display = "flex";
    nextShoe.style.display = "flex";
    shoePlaceholder.style.display = "block";
shoeImage.style.display = "none";
showShoe(0);

}


/*==========================================
        BOTTOM PREVIOUS
==========================================*/

prevBottom.addEventListener("click",()=>{

    if(bottomImage.style.display==="none"){

        bottomIndex=0;

    }
    else{

        bottomIndex--;

        if(bottomIndex<0){

            bottomIndex=bottoms.length-1;

        }

    }

    showBottom(bottomIndex);

});


/*==========================================
        BOTTOM NEXT
==========================================*/

nextBottom.addEventListener("click",()=>{

    if(bottomImage.style.display==="none"){

        bottomIndex=0;

    }
    else{

        bottomIndex++;

        if(bottomIndex>=bottoms.length){

            bottomIndex=0;

        }

    }

    showBottom(bottomIndex);

});


/*==========================================
        AUTO LOAD FIRST BOTTOM
==========================================*/

prevBottom.addEventListener("click",()=>{}, {once:true});

nextBottom.addEventListener("click",()=>{}, {once:true});
/*==========================================
            SHOW SHOE
==========================================*/

function showShoe(index){

    shoeIndex = index;

    const product = shoes[shoeIndex];

    shoeImage.src = product.images[0];

    shoePlaceholder.style.display = "none";
    shoeImage.style.display = "block";

    shoePrice.innerHTML = `₹${product.price}`;
    shoePrice.style.display = "block";

    prevBag.style.display = "flex";
    nextBag.style.display = "flex";

    bagPlaceholder.style.display = "block";
    bagImage.style.display = "none";

}
/*==========================================
        SHOE PREVIOUS
==========================================*/

prevShoe.addEventListener("click",()=>{

    if(shoeImage.style.display==="none"){

        shoeIndex=0;

    }
    else{

        shoeIndex--;

        if(shoeIndex<0){

            shoeIndex=shoes.length-1;

        }

    }

    showShoe(shoeIndex);

});
/*==========================================
        SHOE NEXT
==========================================*/

nextShoe.addEventListener("click",()=>{

    if(shoeImage.style.display==="none"){

        shoeIndex=0;

    }
    else{

        shoeIndex++;

        if(shoeIndex>=shoes.length){

            shoeIndex=0;

        }

    }

    showShoe(shoeIndex);

});
/*==========================================
            SHOW BAG
==========================================*/

function showBag(index){

    bagIndex = index;

    const product = bags[bagIndex];

    bagImage.src = product.images[0];

    bagPlaceholder.style.display = "none";
    bagImage.style.display = "block";

    bagPrice.innerHTML = `₹${product.price}`;
    bagPrice.style.display = "block";

}
/*==========================================
        BAG PREVIOUS
==========================================*/

prevBag.addEventListener("click",()=>{

    if(bagImage.style.display==="none"){

        bagIndex = 0;

    }
    else{

        bagIndex--;

        if(bagIndex < 0){

            bagIndex = bags.length - 1;

        }

    }

    showBag(bagIndex);

});
/*==========================================
        BAG NEXT
==========================================*/

nextBag.addEventListener("click",()=>{

    if(bagImage.style.display==="none"){

        bagIndex = 0;

    }
    else{

        bagIndex++;

        if(bagIndex >= bags.length){

            bagIndex = 0;

        }

    }

    showBag(bagIndex);

});
/*==========================================
            SHOW DRESS
==========================================*/

function showDress(index){

    dressIndex = index;

    const product = dresses[dressIndex];

    dressImage.src = product.images[0];

    dressPlaceholder.style.display = "none";
    dressImage.style.display = "block";

    dressPrice.innerHTML = `₹${product.price}`;
    dressPrice.style.display = "block";

    prevDress.style.display = "flex";
    nextDress.style.display = "flex";

    prevShoe.style.display = "flex";
nextShoe.style.display = "flex";

shoePlaceholder.style.display = "block";
shoeImage.style.display = "none";

prevBag.style.display = "flex";
nextBag.style.display = "flex";

bagPlaceholder.style.display = "block";
bagImage.style.display = "none";
}


/*==========================================
        SELECT DRESS FROM CARD
==========================================*/

document.addEventListener("click",(e)=>{

    const card = e.target.closest("#dressContainer .product-card");

    if(!card) return;

    const id = card.dataset.id;

    dressIndex = dresses.findIndex(item=>item.id==id);

    if(dressIndex===-1) return;

    document
        .querySelectorAll("#dressContainer .product-card")
        .forEach(card=>{

            card.classList.remove("selected");

        });

    card.classList.add("selected");

    showDress(dressIndex);

});


/*==========================================
        DRESS PREVIOUS
==========================================*/

prevDress.addEventListener("click",()=>{

    dressIndex--;

    if(dressIndex<0){

        dressIndex=dresses.length-1;

    }

    showDress(dressIndex);

});


/*==========================================
        DRESS NEXT
==========================================*/

nextDress.addEventListener("click",()=>{

    dressIndex++;

    if(dressIndex>=dresses.length){

        dressIndex=0;

    }

    showDress(dressIndex);

});
/*==========================================
            SAVE OUTFIT
==========================================*/


/*==========================================
        ADD OUTFIT TO CART
==========================================*/

const addOutfitBtn = document.querySelector("#addOutfitBtn");

addOutfitBtn.addEventListener("click", () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function addProduct(product){

        const existing = cart.find(item => item.id === product.id);

        if(existing){

            existing.quantity++;

        }else{

            cart.push({
                ...product,
                quantity:1
            });

        }

    }

    if(topsBuilder.style.display === "block"){

        addProduct(tops[topIndex]);
        addProduct(bottoms[bottomIndex]);
        addProduct(shoes[shoeIndex]);
        addProduct(bags[bagIndex]);

    }else{

        addProduct(dresses[dressIndex]);
        addProduct(shoes[shoeIndex]);
        addProduct(bags[bagIndex]);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Outfit added to cart successfully 🛒");

});


