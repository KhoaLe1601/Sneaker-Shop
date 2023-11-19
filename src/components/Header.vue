<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/sneaker">SNEAKER SHOP</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink :to="{name: 'home'}" class="nav-link active" aria-current="page" href="#">HOME</RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink :to="{name: 'cart'}" class="nav-link">
                            CART
                            <i class="fa-solid fa-cart-shopping"></i>
                        </RouterLink>
                    </li>
                </ul>

                <ul class="navbar-nav ms-2 mb-2 mb-lg-0 ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-regular fa-user text-light"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><RouterLink :to="{name: 'user'}" class="dropdown-item" href="#">Username</RouterLink></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><button class="dropdown-item btn btn-danger">Logout</button></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{name: 'login'}" class="nav-link text-light" href="#">LOGIN</RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink :to="{name: 'register'}" class="nav-link text-light" href="#">REGISTER</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>