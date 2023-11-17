<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Sneaker Shop</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <RouterLink :to="{name: 'sneakershop'}" class="nav-link">
                    Giỏ Hàng
                    <i class="fa-solid fa-cart-shopping"></i>
                </RouterLink>
            </li>
        </div>
    </nav>
</template>