<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    < title>E-Commerce Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>🛒 My E-Commerce Store</h1>
    <p>Mobiles | Laptops | Clothes</p>
</header>

<nav>
    <button onclick="showSection('mobiles')">Mobiles</button>
    <button onclick="showSection('laptops')">Laptops</button>
    <button onclick="showSection('clothes')">Clothes</button>
</nav>

<!-- Mobiles -->
<section id="mobiles" class="section">
    <h2>📱 Mobiles</h2>
    <div class="products" id="mobiles-list"></div>
</section>

<!-- Laptops -->
<section id="laptops" class="section">
    <h2>💻 Laptops</h2>
    <div class="products" id="laptops-list"></div>
</section>

<!-- Clothes -->
<section id="clothes" class="section">
    <h2>👕 Clothes</h2>
    <div class="products" id="clothes-list"></div>
</section>

<footer>
    © 2025 My E-Commerce Store
</footer>

<script src="script.js"></script>
</body>
</html>
