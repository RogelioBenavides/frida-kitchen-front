<template>
    <nav class="navbar navbar-expand-lg sticky-top shadow" style="background-color: white;">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="../assets/images/frida-logo.png" alt="Logo" width="50" height="50"
                    class="d-inline-block align-text-top">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav w-100 d-flex justify-content-evenly align-items-center">
                    <li class="nav-item mx-5">
                        <router-link to="/" class="nav-link" :class="{ 'active fw-semibold': isHomeActive}" @click="handleLinkActivation('home')">Inicio</router-link>
                    </li>
                    <li class="nav-item mx-5">
                        <router-link to="/menu" class="nav-link" :class="{ 'active fw-semibold': isMenuActive}" @click="handleLinkActivation('menu')">Menu</router-link>
                    </li>
                    <li class="nav-item mx-5">
                        <router-link to="/orders" class="nav-link" :class="{ 'active fw-semibold': isOrderActive}" @click="handleLinkActivation('orders')">Órdenes</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav d-flex justify-content-center align-items-center" style="width: 3%;">
                    <li class="nav-item d-flex">
                        <router-link class="nav-link" @click="logout" to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/>
                            </svg>
                        </router-link>
                        <router-link to="/cart" class="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" fill="currentColor"
                                class="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        methods: {
            logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
            },
            handleLinkActivation(page) {
            this.isHomeActive = page === 'home';
            this.isMenuActive = page === 'menu';
            this.isOrderActive = page === 'orders';

            localStorage.setItem('activeLinks', JSON.stringify({
                isHomeActive: this.isHomeActive,
                isMenuActive: this.isMenuActive,
                isOrderActive: this.isOrderActive,
            }));
            },
            restoreLinkActivation() {
                const storedState = localStorage.getItem('activeLinks');
                if (storedState) {
                    const { isHomeActive, isMenuActive, isOrderActive } = JSON.parse(storedState);
                    this.isHomeActive = isHomeActive;
                    this.isMenuActive = isMenuActive;
                    this.isOrderActive = isOrderActive;
                }
            },
        },
        data() {
            return {
            isHomeActive: false,
            isMenuActive: false,
            isOrderActive: false,
            };
        },
        mounted() {
            this.restoreLinkActivation();
        },
    };
</script>
<style></style>