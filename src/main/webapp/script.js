const mobiles = [
    { name: "iPhone 15", price: 79999, img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569" },
    { name: "Samsung Galaxy S23", price: 74999, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
    { name: "OnePlus 12", price: 65999, img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31" },
    { name: "Redmi Note 13", price: 18999, img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f" },
    { name: "Realme GT", price: 29999, img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97" },
    { name: "Pixel 8", price: 71999, img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7" },
    { name: "Vivo X100", price: 54999, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { name: "Oppo Reno", price: 32999, img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0" },
    { name: "iQOO Neo", price: 28999, img: "https://images.unsplash.com/photo-1580910051074-7b6f4c36c8b8" },
    { name: "Motorola Edge", price: 24999, img: "https://images.unsplash.com/photo-1556656793-08538906a9f8" }
];

const laptops = [
    { name: "MacBook Air M2", price: 114999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { name: "Dell XPS 13", price: 99999, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" },
    { name: "HP Pavilion", price: 68999, img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5" },
    { name: "Lenovo ThinkPad", price: 87999, img: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec" },
    { name: "Asus ROG", price: 129999, img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6" },
    { name: "Acer Aspire", price: 55999, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302" },
    { name: "MSI Gaming", price: 119999, img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5" },
    { name: "Samsung Galaxy Book", price: 79999, img: "https://images.unsplash.com/photo-1602524200955-2e7e6c2bbf47" },
    { name: "LG Gram", price: 104999, img: "https://images.unsplash.com/photo-1602524813365-fb9c5f3ef9e2" },
    { name: "Honor MagicBook", price: 64999, img: "https://images.unsplash.com/photo-1602526432604-029a709e131c" }
];

const clothes = [
    { name: "Men T-Shirt", price: 799, img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070" },
    { name: "Women Dress", price: 1499, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
    { name: "Jeans", price: 1999, img: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
    { name: "Shirt", price: 1299, img: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
    { name: "Jacket", price: 2999, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
    { name: "Kurta", price: 1799, img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23" },
    { name: "Hoodie", price: 2199, img: "https://images.unsplash.com/photo-1520974735194-6c1c9bb8d6f1" },
    { name: "Saree", price: 3499, img: "https://images.unsplash.com/photo-1600180758895-3f31c61f4b22" },
    { name: "Shorts", price: 999, img: "https://images.unsplash.com/photo-1593032465171-c6b93a5faad0" },
    { name: "Blazer", price: 4999, img: "https://images.unsplash.com/photo-1514996937319-344454492b37" }
];

function loadProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">₹${p.price}</p>
        </div>
    `).join("");
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

loadProducts(mobiles, "mobiles-list");
loadProducts(laptops, "laptops-list");
loadProducts(clothes, "clothes-list");
showSection("mobiles");
