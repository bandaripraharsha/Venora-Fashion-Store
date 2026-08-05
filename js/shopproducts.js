// ===============================================
// Venora - SHOP PRODUCTS
// ===============================================

const shopProducts = [

    // =====================================================
    // DRESSES
    // =====================================================

    {
        id: "shop-dress1",
        category: "Dresses",
        name: "Elegant Midi Dress",
        price: 1499,
        oldPrice: 1799,
        images: [
            "../images/products/dress1.jpg",
            "../images/products/dress1-back.jpg"
        ],
        rating: 4.8,
        reviews: 126,
        badge: "Best Seller",
        color: "Blush Pink",
        sizes: ["XS","S","M","L","XL"],
        description: "A timeless sleeveless midi dress with a flattering silhouette. Perfect for brunches, parties and elegant evenings."
    },

    {
        id: "shop-dress2",
        category: "Dresses",
        name: "Floral Maxi Dress",
        price: 1899,
        oldPrice: 2299,
        images: [
            "../images/products/dress2.jpg",
            "../images/products/dress2-back.jpg"
        ],
        rating: 4.9,
        reviews: 178,
        badge: "Trending",
        color: "Ivory Floral",
        sizes: ["XS","S","M","L"],
        description: "Flowy floral maxi dress with a graceful fit that's perfect for vacations, weddings and special occasions."
    },

    {
        id: "shop-dress3",
        category: "Dresses",
        name: "Black Evening Dress",
        price: 2199,
        oldPrice: 2599,
        images: [
            "../images/products/dress3.jpg",
            "../images/products/dress3-back.jpg"
        ],
        rating: 4.9,
        reviews: 201,
        badge: "Premium",
        color: "Black",
        sizes: ["S","M","L","XL"],
        description: "Elegant black evening dress featuring a modern V-neck design and graceful fit for formal occasions."
    },

    {
        id: "shop-dress4",
        category: "Dresses",
        name: "Floral Wrap Dress",
        price: 1699,
        oldPrice: 1999,
        images: [
            "../images/products/dress4.jpg",
            "../images/products/dress4-back.jpg"
        ],
        rating: 4.7,
        reviews: 142,
        badge: "New",
        color: "White Floral",
        sizes: ["XS","S","M","L"],
        description: "Soft floral wrap dress designed for everyday elegance with a comfortable waist tie."
    },



    // =====================================================
    // TOPS
    // =====================================================

    {
        id: "shop-top1",
        category: "Tops",
        name: "White Floral Peplum Top",
        price: 899,
        oldPrice: 1099,
        images: [
            "../images/products/top1.jpg",
            "../images/products/top1-back.jpg"
        ],
        rating: 4.8,
        reviews: 110,
        badge: "Popular",
        color: "White",
        sizes: ["XS","S","M","L"],
        description: "Lightweight floral peplum top with soft puff sleeves, ideal for everyday styling."
    },

    {
        id: "shop-top2",
        category: "Tops",
        name: "Floral Button Top",
        price: 949,
        oldPrice: 1199,
        images: [
            "../images/products/top2.jpg",
            "../images/products/top2-back.jpg"
        ],
        rating: 4.8,
        reviews: 98,
        badge: "",
        color: "White Floral",
        sizes: ["XS","S","M","L"],
        description: "Classic floral button-up top crafted for effortless everyday comfort."
    },

    {
        id: "shop-top3",
        category: "Tops",
        name: "Sky Blue Peplum Top",
        price: 999,
        oldPrice: 1299,
        images: [
            "../images/products/top3.jpg",
            "../images/products/top3-back.jpg"
        ],
        rating: 4.7,
        reviews: 134,
        badge: "New",
        color: "Sky Blue",
        sizes: ["S","M","L","XL"],
        description: "Elegant peplum top with soft puff sleeves and pearl button detailing."
    },

    {
        id: "shop-top4",
        category: "Tops",
        name: "White Striped Shirt",
        price: 1099,
        oldPrice: 1399,
        images: [
            "../images/products/top4.jpg",
            "../images/products/top4-back.jpg"
        ],
        rating: 4.8,
        reviews: 165,
        badge: "Office Wear",
        color: "White",
        sizes: ["S","M","L","XL"],
        description: "Relaxed striped shirt that pairs beautifully with jeans, trousers and skirts."
    },



    // =====================================================
    // BOTTOMS
    // =====================================================

    {
        id: "shop-bottom1",
        category: "Bottoms",
        name: "Blue Straight Jeans",
        price: 1399,
        oldPrice: 1699,
        images: [
            "../images/products/jeans1.jpg",
            "../images/products/jeans1-back.jpg"
        ],
        rating: 4.8,
        reviews: 154,
        badge: "Best Seller",
        color: "Blue",
        sizes: ["26","28","30","32","34"],
        description: "Classic straight-fit denim with a versatile everyday look."
    },

    {
        id: "shop-bottom2",
        category: "Bottoms",
        name: "Black Flared Skirt",
        price: 1199,
        oldPrice: 1499,
        images: [
            "../images/products/skirt1.jpg",
            "../images/products/skirt1-back.jpg"
        ],
        rating: 4.7,
        reviews: 87,
        badge: "",
        color: "Black",
        sizes: ["XS","S","M","L"],
        description: "Elegant flared skirt designed for both casual and formal styling."
    },
        {
        id: "shop-bottom3",
        category: "Bottoms",
        name: "Grey Wide Leg Jeans",
        price: 1499,
        oldPrice: 1799,
        images: [
            "../images/products/jeans2.jpg",
            "../images/products/jeans2-back.jpg"
        ],
        rating: 4.8,
        reviews: 103,
        badge: "Trending",
        color: "Grey",
        sizes: ["26","28","30","32","34"],
        description: "Comfortable high-rise wide leg jeans with a modern relaxed fit."
    },

    {
        id: "shop-bottom4",
        category: "Bottoms",
        name: "Beige Wide Leg Pants",
        price: 1399,
        oldPrice: 1699,
        images: [
            "../images/products/pants1.jpg",
            "../images/products/pants1-back.jpg"
        ],
        rating: 4.7,
        reviews: 96,
        badge: "",
        color: "Beige",
        sizes: ["26","28","30","32","34"],
        description: "Elegant wide leg pants perfect for office wear and casual styling."
    },



    // =====================================================
    // BAGS
    // =====================================================

    {
        id: "shop-bag1",
        category: "Bags",
        name: "Brown Leather Tote Bag",
        price: 1899,
        oldPrice: 2299,
        images: [
            "../images/products/bag1.jpg",
            "../images/products/bag1-back.jpg"
        ],
        rating: 4.9,
        reviews: 185,
        badge: "Best Seller",
        color: "Brown",
        sizes: ["One Size"],
        description: "Premium leather tote bag with spacious storage for daily essentials."
    },

    {
        id: "shop-bag2",
        category: "Bags",
        name: "Ivory Top Handle Bag",
        price: 1799,
        oldPrice: 2099,
        images: [
            "../images/products/bag2.jpg",
            "../images/products/bag2-back.jpg"
        ],
        rating: 4.8,
        reviews: 142,
        badge: "New",
        color: "Ivory",
        sizes: ["One Size"],
        description: "Minimal top handle handbag designed for elegant everyday looks."
    },

    {
        id: "shop-bag3",
        category: "Bags",
        name: "Black Chain Crossbody Bag",
        price: 1699,
        oldPrice: 1999,
        images: [
            "../images/products/bag3.jpg",
            "../images/products/bag3-back.jpg"
        ],
        rating: 4.8,
        reviews: 151,
        badge: "",
        color: "Black",
        sizes: ["One Size"],
        description: "Stylish crossbody bag with premium chain strap and compact design."
    },

    {
        id: "shop-bag4",
        category: "Bags",
        name: "Cherry Shoulder Bag",
        price: 1599,
        oldPrice: 1899,
        images: [
            "../images/products/bag4.jpg",
            "../images/products/bag4-back.jpg"
        ],
        rating: 4.7,
        reviews: 111,
        badge: "Trending",
        color: "Cherry",
        sizes: ["One Size"],
        description: "Fashionable shoulder bag with a sleek silhouette for daily use."
    },



    // =====================================================
    // FOOTWEAR
    // =====================================================

    {
        id: "shop-shoe1",
        category: "Footwear",
        name: "White Sneakers",
        price: 2199,
        oldPrice: 2499,
        images: [
            "../images/products/shoes1.jpg",
            "../images/products/shoes1-back.jpg"
        ],
        rating: 4.9,
        reviews: 201,
        badge: "Best Seller",
        color: "White",
        sizes: ["36","37","38","39","40"],
        description: "Comfortable everyday sneakers with premium cushioning and clean styling."
    },

    {
        id: "shop-shoe2",
        category: "Footwear",
        name: "Pink Running Shoes",
        price: 2399,
        oldPrice: 2699,
        images: [
            "../images/products/shoes2.jpg",
            "../images/products/shoes2-back.jpg"
        ],
        rating: 4.8,
        reviews: 156,
        badge: "New",
        color: "Pink",
        sizes: ["36","37","38","39","40"],
        description: "Lightweight running shoes built for comfort and all-day wear."
    },

    {
        id: "shop-shoe3",
        category: "Footwear",
        name: "Taupe Walking Shoes",
        price: 2099,
        oldPrice: 2399,
        images: [
            "../images/products/shoes3.jpg",
            "../images/products/shoes3-back.jpg"
        ],
        rating: 4.7,
        reviews: 118,
        badge: "",
        color: "Taupe",
        sizes: ["36","37","38","39","40"],
        description: "Soft walking shoes featuring breathable material and cushioned soles."
    },

    {
        id: "shop-shoe4",
        category: "Footwear",
        name: "Brown Casual Sneakers",
        price: 2299,
        oldPrice: 2599,
        images: [
            "../images/products/shoes4.jpg",
            "../images/products/shoes4-back.jpg"
        ],
        rating: 4.8,
        reviews: 134,
        badge: "Popular",
        color: "Brown",
        sizes: ["36","37","38","39","40"],
        description: "Versatile casual sneakers that pair effortlessly with every outfit."
    }

];