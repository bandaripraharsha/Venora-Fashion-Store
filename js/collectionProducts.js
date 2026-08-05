// ===============================================
// Venora - COLLECTION PRODUCTS
// PART 1
// Golden Haze + Minimal Muse
// ===============================================

const collectionProducts = [

/* =====================================================
   GOLDEN HAZE
===================================================== */

{
    id: "gh-dress1",
    collection: "golden-haze",
    category: "Dresses",
    name: "Golden Glow Midi Dress",
    price: 3499,
    oldPrice: 4299,
    images: [
        "../images/products/golden-haze/gh-dress1.jpg",
        "../images/products/golden-haze/gh-dress1.jpg"
    ],
    rating: 4.9,
    reviews: 148,
    badge: "Best Seller",
    color: "Champagne",
    sizes: ["XS","S","M","L"],
    description: "Elegant champagne midi dress crafted for timeless sophistication."
},

{
    id: "gh-dress2",
    collection: "golden-haze",
    category: "Dresses",
    name: "Liquid Gold Satin Dress",
    price: 3999,
    oldPrice: 4699,
    images: [
        "../images/products/golden-haze/gh-dress2.jpg",
        "../images/products/golden-haze/gh-dress2.jpg"
    ],
    rating: 4.8,
    reviews: 122,
    badge: "Luxury",
    color: "Gold",
    sizes: ["S","M","L","XL"],
    description: "Luxurious satin evening dress with graceful draping."
},

{
    id: "gh-dress3",
    collection: "golden-haze",
    category: "Dresses",
    name: "Crystal Evening Gown",
    price: 5299,
    oldPrice: 6299,
    images: [
        "../images/products/golden-haze/gh-dress3.jpg",
        "../images/products/golden-haze/gh-dress3.jpg"
    ],
    rating: 5.0,
    reviews: 91,
    badge: "Premium",
    color: "Ivory",
    sizes: ["XS","S","M","L"],
    description: "Premium embellished gown for luxurious evening occasions."
},

{
    id: "gh-dress4",
    collection: "golden-haze",
    category: "Dresses",
    name: "Fairy Spark Mini Dress",
    price: 2899,
    oldPrice: 3499,
    images: [
        "../images/products/golden-haze/gh-dress4.jpg",
        "../images/products/golden-haze/gh-dress4.jpg"
    ],
    rating: 4.9,
    reviews: 74,
    badge: "New",
    color: "Pearl",
    sizes: ["XS","S","M"],
    description: "Sparkling mini dress inspired by dreamy fairy elegance."
},

{
    id: "gh-heels1",
    collection: "golden-haze",
    category: "Footwear",
    name: "Golden Luxe Heels",
    price: 2699,
    oldPrice: 3299,
    images: [
        "../images/products/golden-haze/gh-heels1.jpg",
        "../images/products/golden-haze/gh-heels1.jpg"
    ],
    rating: 4.8,
    reviews: 101,
    badge: "Trending",
    color: "Gold",
    sizes: ["36","37","38","39","40"],
    description: "Elegant metallic heels designed for glamorous occasions."
},

{
    id: "gh-heels2",
    collection: "golden-haze",
    category: "Footwear",
    name: "Golden Ballet Flats",
    price: 1999,
    oldPrice: 2499,
    images: [
        "../images/products/golden-haze/gh-heels2.jpg",
        "../images/products/golden-haze/gh-heels2.jpg"
    ],
    rating: 4.7,
    reviews: 86,
    badge: "New",
    color: "Gold",
    sizes: ["36","37","38","39","40"],
    description: "Comfortable metallic ballet flats for effortless elegance."
},

{
    id: "gh-skirt1",
    collection: "golden-haze",
    category: "Bottoms",
    name: "Golden Sequin Maxi Skirt",
    price: 2799,
    oldPrice: 3399,
    images: [
        "../images/products/golden-haze/gh-skirt1.jpg",
        "../images/products/golden-haze/gh-skirt1.jpg"
    ],
    rating: 4.9,
    reviews: 94,
    badge: "Luxury",
    color: "Champagne",
    sizes: ["XS","S","M","L"],
    description: "Shimmering sequined maxi skirt for festive evenings."
},

{
    id: "gh-bag1",
    collection: "golden-haze",
    category: "Bags",
    name: "Golden Chain Shoulder Bag",
    price: 2499,
    oldPrice: 2999,
    images: [
        "../images/products/golden-haze/gh-bag1.jpg",
        "../images/products/golden-haze/gh-bag1.jpg"
    ],
    rating: 4.8,
    reviews: 78,
    badge: "Trending",
    color: "Gold",
    sizes: ["One Size"],
    description: "Elegant metallic shoulder bag with a premium gold chain."
},

{
    id: "gh-bag2",
    collection: "golden-haze",
    category: "Bags",
    name: "Golden Luxe Handbag",
    price: 2899,
    oldPrice: 3499,
    images: [
        "../images/products/golden-haze/gh-bag2.jpg",
        "../images/products/golden-haze/gh-bag2.jpg"
    ],
    rating: 4.9,
    reviews: 63,
    badge: "Premium",
    color: "Gold",
    sizes: ["One Size"],
    description: "Premium metallic handbag designed for elegant occasions."
},

/* =====================================================
   MINIMAL MUSE
===================================================== */

{
    id: "mm-dress1",
    collection: "minimal-muse",
    category: "Dresses",
    name: "Soft Ivory Midi Dress",
    price: 3199,
    oldPrice: 3799,
    images: [
        "../images/products/minimal-muse/mm-dress1.jpg",
        "../images/products/minimal-muse/mm-dress1.jpg"
    ],
    rating: 4.8,
    reviews: 112,
    badge: "Best Seller",
    color: "Ivory",
    sizes: ["XS","S","M","L"],
    description: "Minimal midi dress with timeless elegance."
},

{
    id: "mm-dress2",
    collection: "minimal-muse",
    category: "Dresses",
    name: "Chocolate Wrap Dress",
    price: 3399,
    oldPrice: 3999,
    images: [
        "../images/products/minimal-muse/mm-dress2.jpg",
        "../images/products/minimal-muse/mm-dress2.jpg"
    ],
    rating: 4.9,
    reviews: 97,
    badge: "Trending",
    color: "Brown",
    sizes: ["S","M","L","XL"],
    description: "Modern wrap dress with a flattering silhouette."
},

{
    id: "mm-dress3",
    collection: "minimal-muse",
    category: "Dresses",
    name: "Classic Cocoa Maxi Dress",
    price: 3599,
    oldPrice: 4299,
    images: [
        "../images/products/minimal-muse/mm-dress3.jpg",
        "../images/products/minimal-muse/mm-dress3.jpg"
    ],
    rating: 4.8,
    reviews: 84,
    badge: "Luxury",
    color: "Brown",
    sizes: ["XS","S","M","L"],
    description: "Elegant cocoa maxi dress with a clean minimalist aesthetic."
},

{
    id: "mm-top1",
    collection: "minimal-muse",
    category: "Tops",
    name: "Minimal Pink Bow Top",
    price: 1699,
    oldPrice: 2199,
    images: [
        "../images/products/minimal-muse/mm-top1.jpg",
        "../images/products/minimal-muse/mm-top1.jpg"
    ],
    rating: 4.8,
    reviews: 74,
    badge: "New",
    color: "Blush Pink",
    sizes: ["XS","S","M","L"],
    description: "Soft blush off-shoulder top for effortless everyday elegance."
},

{
    id: "mm-top2",
    collection: "minimal-muse",
    category: "Tops",
    name: "Sweet Puff Sleeve Crop Top",
    price: 1799,
    oldPrice: 2299,
    images: [
        "../images/products/minimal-muse/mm-top2.jpg",
        "../images/products/minimal-muse/mm-top2.jpg"
    ],
    rating: 4.9,
    reviews: 88,
    badge: "Trending",
    color: "Baby Pink",
    sizes: ["XS","S","M","L"],
    description: "Feminine puff sleeve crop top for casual chic styling."
},

{
    id: "mm-skirt1",
    collection: "minimal-muse",
    category: "Bottoms",
    name: "Ivory Layered Maxi Skirt",
    price: 2499,
    oldPrice: 3099,
    images: [
        "../images/products/minimal-muse/mm-skirt1.jpg",
        "../images/products/minimal-muse/mm-skirt1.jpg"
    ],
    rating: 4.9,
    reviews: 82,
    badge: "Best Seller",
    color: "Ivory",
    sizes: ["XS","S","M","L"],
    description: "Elegant layered maxi skirt with a soft flowing silhouette."
},

{
    id: "mm-heels1",
    collection: "minimal-muse",
    category: "Footwear",
    name: "Ivory Cross Strap Sandals",
    price: 2299,
    oldPrice: 2799,
    images: [
        "../images/products/minimal-muse/mm-heels1.jpg",
        "../images/products/minimal-muse/mm-heels1.jpg"
    ],
    rating: 4.8,
    reviews: 93,
    badge: "Popular",
    color: "Ivory",
    sizes: ["36","37","38","39","40"],
    description: "Minimal cross strap sandals crafted for elegance and comfort."
},

{
    id: "mm-bag1",
    collection: "minimal-muse",
    category: "Bags",
    name: "Ivory Chain Shoulder Bag",
    price: 2399,
    oldPrice: 2899,
    images: [
        "../images/products/minimal-muse/mm-bag1.jpg",
        "../images/products/minimal-muse/mm-bag1.jpg"
    ],
    rating: 4.9,
    reviews: 68,
    badge: "Luxury",
    color: "Ivory",
    sizes: ["One Size"],
    description: "Premium chain shoulder bag with a timeless minimal design."
},

{
    id: "mm-bag2",
    collection: "minimal-muse",
    category: "Bags",
    name: "Classic Ivory Handbag",
    price: 2599,
    oldPrice: 3199,
    images: [
        "../images/products/minimal-muse/mm-bag2.jpg",
        "../images/products/minimal-muse/mm-bag2.jpg"
    ],
    rating: 4.8,
    reviews: 61,
    badge: "Premium",
    color: "Ivory",
    sizes: ["One Size"],
    description: "Elegant structured handbag perfect for minimalist outfits."
},

{
    id: "mm-bag3",
    collection: "minimal-muse",
    category: "Bags",
    name: "Everyday Minimal Tote",
    price: 2199,
    oldPrice: 2699,
    images: [
        "../images/products/minimal-muse/mm-bag3.jpg",
        "../images/products/minimal-muse/mm-bag3.jpg"
    ],
    rating: 4.7,
    reviews: 58,
    badge: "New",
    color: "Cream",
    sizes: ["One Size"],
    description: "Spacious tote bag for everyday essentials."
},

// ===== CONTINUE WITH PART 2 (BLOOM EDIT) =====
/* =====================================================
   BLOOM EDIT
===================================================== */

{
    id: "be-dress1",
    collection: "bloom-edit",
    category: "Dresses",
    name: "Wildflower Garden Midi Dress",
    price: 3599,
    oldPrice: 4499,
    images: [
        "../images/products/bloom-edit/be-dress1.jpg",
        "../images/products/bloom-edit/be-dress1.jpg"
    ],
    rating: 4.9,
    reviews: 182,
    badge: "Best Seller",
    color: "Floral",
    sizes: ["XS","S","M","L","XL"],
    description: "Romantic floral midi dress with a dreamy garden print."
},

{
    id: "be-dress2",
    collection: "bloom-edit",
    category: "Dresses",
    name: "Pink Blossom Satin Slip Dress",
    price: 3199,
    oldPrice: 3999,
    images: [
        "../images/products/bloom-edit/be-dress2.jpg",
        "../images/products/bloom-edit/be-dress2.jpg"
    ],
    rating: 4.8,
    reviews: 154,
    badge: "Trending",
    color: "Pink",
    sizes: ["XS","S","M","L","XL"],
    description: "Elegant satin slip dress featuring oversized floral prints."
},

{
    id: "be-dress3",
    collection: "bloom-edit",
    category: "Dresses",
    name: "Rose Garden Puff Sleeve Maxi Dress",
    price: 4499,
    oldPrice: 5499,
    images: [
        "../images/products/bloom-edit/be-dress3.jpg",
        "../images/products/bloom-edit/be-dress3.jpg"
    ],
    rating: 5.0,
    reviews: 236,
    badge: "Premium",
    color: "Pink",
    sizes: ["XS","S","M","L","XL"],
    description: "Flowy puff sleeve maxi dress with romantic floral prints."
},

{
    id: "be-bag1",
    collection: "bloom-edit",
    category: "Bags",
    name: "Floral Beaded Shoulder Bag",
    price: 2599,
    oldPrice: 3299,
    images: [
        "../images/products/bloom-edit/be-bag1.jpg",
        "../images/products/bloom-edit/be-bag1.jpg"
    ],
    rating: 4.8,
    reviews: 126,
    badge: "Trending",
    color: "Cream",
    sizes: ["One Size"],
    description: "Beautiful beaded shoulder bag with floral embroidery."
},

{
    id: "be-bag2",
    collection: "bloom-edit",
    category: "Bags",
    name: "Blossom Knot Clutch",
    price: 1999,
    oldPrice: 2599,
    images: [
        "../images/products/bloom-edit/be-bag2.jpg",
        "../images/products/bloom-edit/be-bag2.jpg"
    ],
    rating: 4.7,
    reviews: 98,
    badge: "New",
    color: "Pink",
    sizes: ["One Size"],
    description: "Soft floral knot clutch perfect for brunch and spring events."
},

{
    id: "be-heels1",
    collection: "bloom-edit",
    category: "Footwear",
    name: "Blush Rose Strap Sandals",
    price: 2699,
    oldPrice: 3299,
    images: [
        "../images/products/bloom-edit/be-heels1.jpg",
        "../images/products/bloom-edit/be-heels1.jpg"
    ],
    rating: 4.8,
    reviews: 113,
    badge: "Popular",
    color: "Blush",
    sizes: ["36","37","38","39","40"],
    description: "Soft pink floral strap sandals with delicate rose details."
},

{
    id: "be-heels2",
    collection: "bloom-edit",
    category: "Footwear",
    name: "Floral Embroidered Slingback Heels",
    price: 2999,
    oldPrice: 3799,
    images: [
        "../images/products/bloom-edit/be-heels2.jpg",
        "../images/products/bloom-edit/be-heels2.jpg"
    ],
    rating: 4.9,
    reviews: 137,
    badge: "Luxury",
    color: "Ivory",
    sizes: ["36","37","38","39","40"],
    description: "Elegant embroidered slingback heels inspired by spring blossoms."
},

{
    id: "be-skirt1",
    collection: "bloom-edit",
    category: "Bottoms",
    name: "Botanical Print Maxi Skirt",
    price: 2499,
    oldPrice: 3099,
    images: [
        "../images/products/bloom-edit/be-skirt1.jpg",
        "../images/products/bloom-edit/be-skirt1.jpg"
    ],
    rating: 4.8,
    reviews: 104,
    badge: "Trending",
    color: "Floral",
    sizes: ["XS","S","M","L","XL"],
    description: "Soft botanical print maxi skirt with a graceful flow."
},

{
    id: "be-skirt2",
    collection: "bloom-edit",
    category: "Bottoms",
    name: "Ivory Lace Circle Skirt",
    price: 2799,
    oldPrice: 3499,
    images: [
        "../images/products/bloom-edit/be-skirt2.jpg",
        "../images/products/bloom-edit/be-skirt2.jpg"
    ],
    rating: 4.9,
    reviews: 122,
    badge: "Best Seller",
    color: "Ivory",
    sizes: ["XS","S","M","L","XL"],
    description: "Classic lace circle skirt with elegant feminine detailing."
},

{
    id: "be-top1",
    collection: "bloom-edit",
    category: "Tops",
    name: "Sweetheart Floral Peplum Top",
    price: 1999,
    oldPrice: 2499,
    images: [
        "../images/products/bloom-edit/be-top1.jpg",
        "../images/products/bloom-edit/be-top1.jpg"
    ],
    rating: 4.8,
    reviews: 115,
    badge: "Popular",
    color: "Pink",
    sizes: ["XS","S","M","L","XL"],
    description: "Romantic sweetheart peplum top with tiny floral prints."
},

{
    id: "be-top2",
    collection: "bloom-edit",
    category: "Tops",
    name: "Vintage Floral Tie Blouse",
    price: 2299,
    oldPrice: 2899,
    images: [
        "../images/products/bloom-edit/be-top2.jpg",
        "../images/products/bloom-edit/be-top2.jpg"
    ],
    rating: 4.9,
    reviews: 138,
    badge: "Trending",
    color: "Cream",
    sizes: ["XS","S","M","L","XL"],
    description: "Vintage-inspired floral blouse with tie-front and ruffle sleeves."
},

{
    id: "be-top3",
    collection: "bloom-edit",
    category: "Tops",
    name: "Blush Ruffle Chiffon Blouse",
    price: 2499,
    oldPrice: 3099,
    images: [
        "../images/products/bloom-edit/be-top3.jpg",
        "../images/products/bloom-edit/be-top3.jpg"
    ],
    rating: 5.0,
    reviews: 166,
    badge: "Premium",
    color: "Blush",
    sizes: ["XS","S","M","L","XL"],
    description: "Lightweight chiffon blouse with cascading ruffles and soft floral tones."
},

// ===== CONTINUE WITH PART 3 (EVERYDAY ELEGANCE) =====
/* =====================================================
   EVERYDAY ELEGANCE
===================================================== */

{
    id: "ee-dress1",
    collection: "everyday-elegance",
    category: "Dresses",
    name: "Blue Office Co-ord Set",
    price: 2299,
    oldPrice: 2799,
    images: [
        "../images/products/everyday-elegance/ee-dress1.jpg",
        "../images/products/everyday-elegance/ee-dress1.jpg"
    ],
    rating: 4.8,
    reviews: 126,
    badge: "Office",
    color: "Blue",
    sizes: ["S","M","L","XL"],
    description: "Elegant striped shirt paired with cream wide-leg trousers for a polished everyday office look."
},

{
    id: "ee-dress2",
    collection: "everyday-elegance",
    category: "Dresses",
    name: "Casual Knit Denim Set",
    price: 1999,
    oldPrice: 2499,
    images: [
        "../images/products/everyday-elegance/ee-dress2.jpg",
        "../images/products/everyday-elegance/ee-dress2.jpg"
    ],
    rating: 4.7,
    reviews: 89,
    badge: "Casual",
    color: "White",
    sizes: ["XS","S","M","L"],
    description: "Soft cropped knit cardigan styled with relaxed denim for effortless daily wear."
},

{
    id: "ee-dress3",
    collection: "everyday-elegance",
    category: "Dresses",
    name: "Monochrome Workwear Set",
    price: 2499,
    oldPrice: 3099,
    images: [
        "../images/products/everyday-elegance/ee-dress3.jpg",
        "../images/products/everyday-elegance/ee-dress3.jpg"
    ],
    rating: 4.9,
    reviews: 102,
    badge: "Best Seller",
    color: "Black",
    sizes: ["S","M","L","XL"],
    description: "Modern striped blouse paired with tailored black trousers for timeless sophistication."
},

{
    id: "ee-top1",
    collection: "everyday-elegance",
    category: "Tops",
    name: "Relaxed Stripe Shirt",
    price: 999,
    oldPrice: 1399,
    images: [
        "../images/products/everyday-elegance/ee-top1.jpg",
        "../images/products/everyday-elegance/ee-top1.jpg"
    ],
    rating: 4.7,
    reviews: 74,
    badge: "Classic",
    color: "Blue",
    sizes: ["S","M","L","XL"],
    description: "Lightweight blue striped shirt perfect for work and weekend styling."
},

{
    id: "ee-top2",
    collection: "everyday-elegance",
    category: "Tops",
    name: "Butterfly Graphic Tee",
    price: 799,
    oldPrice: 1099,
    images: [
        "../images/products/everyday-elegance/ee-top2.jpg",
        "../images/products/everyday-elegance/ee-top2.jpg"
    ],
    rating: 4.6,
    reviews: 58,
    badge: "New",
    color: "Cream",
    sizes: ["S","M","L","XL"],
    description: "Relaxed oversized graphic tee with soft cotton fabric for everyday comfort."
},

{
    id: "ee-jeans1",
    collection: "everyday-elegance",
    category: "Bottoms",
    name: "Everyday Wide Leg Jeans",
    price: 1699,
    oldPrice: 2099,
    images: [
        "../images/products/everyday-elegance/ee-jeans1.jpg",
        "../images/products/everyday-elegance/ee-jeans1.jpg"
    ],
    rating: 4.8,
    reviews: 91,
    badge: "Trending",
    color: "Blue",
    sizes: ["26","28","30","32","34"],
    description: "Relaxed high-waist wide-leg jeans designed for all-day comfort."
},

{
    id: "ee-skirt1",
    collection: "everyday-elegance",
    category: "Bottoms",
    name: "Denim Wrap Midi Skirt",
    price: 1599,
    oldPrice: 1999,
    images: [
        "../images/products/everyday-elegance/ee-skirt1.jpg",
        "../images/products/everyday-elegance/ee-skirt1.jpg"
    ],
    rating: 4.7,
    reviews: 65,
    badge: "Popular",
    color: "Blue",
    sizes: ["XS","S","M","L"],
    description: "Modern wrap-style denim skirt for casual chic outfits."
},

{
    id: "ee-heels1",
    collection: "everyday-elegance",
    category: "Footwear",
    name: "Classic Cream Pumps",
    price: 1899,
    oldPrice: 2399,
    images: [
        "../images/products/everyday-elegance/ee-heels1.jpg",
        "../images/products/everyday-elegance/ee-heels1.jpg"
    ],
    rating: 4.8,
    reviews: 83,
    badge: "Classic",
    color: "Cream",
    sizes: ["36","37","38","39","40"],
    description: "Comfortable block heels designed for office and evening wear."
},

{
    id: "ee-heels2",
    collection: "everyday-elegance",
    category: "Footwear",
    name: "Elegant Slingback Heels",
    price: 1999,
    oldPrice: 2499,
    images: [
        "../images/products/everyday-elegance/ee-heels2.jpg",
        "../images/products/everyday-elegance/ee-heels2.jpg"
    ],
    rating: 4.9,
    reviews: 77,
    badge: "Premium",
    color: "Black",
    sizes: ["36","37","38","39","40"],
    description: "Elegant pointed slingback heels with timeless styling."
},

{
    id: "ee-shoes1",
    collection: "everyday-elegance",
    category: "Footwear",
    name: "Minimal White Sneakers",
    price: 2199,
    oldPrice: 2699,
    images: [
        "../images/products/everyday-elegance/ee-shoes1.jpg",
        "../images/products/everyday-elegance/ee-shoes1.jpg"
    ],
    rating: 4.8,
    reviews: 132,
    badge: "Everyday",
    color: "White",
    sizes: ["36","37","38","39","40"],
    description: "Minimal sneakers offering comfort and versatility for daily outfits."
},

{
    id: "ee-shoes2",
    collection: "everyday-elegance",
    category: "Footwear",
    name: "Classic Horsebit Loafers",
    price: 1799,
    oldPrice: 2299,
    images: [
        "../images/products/everyday-elegance/ee-shoes2.jpg",
        "../images/products/everyday-elegance/ee-shoes2.jpg"
    ],
    rating: 4.8,
    reviews: 94,
    badge: "Smart Casual",
    color: "Cream",
    sizes: ["36","37","38","39","40"],
    description: "Elegant horsebit loafers perfect for office and smart casual looks."
}

];