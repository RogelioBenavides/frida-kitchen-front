<template>
    <section class="py-5">
        <h1 class="text-center">Favoritos del Restaurante</h1>
        <div id="carouselExample" class="carousel carousel-dark slide">
            <div class="carousel-inner pb-5">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row">
                            <div v-for="dish in favorites.slice(0, 3)" :key="dish.id"  class="col-4 center-favorites">
                                <div class="card border-0 shadow" style="width: 20rem; height: 20rem;">
                                    <div class="d-flex justify-content-center" style="height: 55%;">
                                        <img :src="dish.image_url" class="card-img-top img-fluid w-75 p-2 m-auto">
                                    </div>
                                    <div style="height: 30%;">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ dish.meal_name }}</h5>
                                            <p class="card-text">${{ dish.price }}</p>
                                        </div>
                                    </div>
                                    <div class="w-100" style="height: 15%;">
                                        <router-link to="/menu" class="btn btn-primary w-100">Menu</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div v-for="dish in favorites.slice(3, 5)" :key="dish.id"  class="col-4 center-favorites">
                                <div class="card border-0 shadow" style="width: 20rem; height: 20rem;">
                                    <div class="d-flex justify-content-center" style="height: 55%;">
                                        <img :src="dish.image_url" class="card-img-top img-fluid w-75 p-2 m-auto">
                                    </div>
                                    <div style="height: 30%;">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ dish.meal_name }}</h5>
                                            <p class="card-text">${{ dish.price }}</p>
                                        </div>
                                    </div>
                                    <div class="w-100" style="height: 15%;">
                                        <router-link to="/menu" class="btn btn-primary w-100">Menu</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div v-for="dish in favorites.slice(5, 8)" :key="dish.id"  class="col-4 center-favorites">
                                <div class="card border-0 shadow" style="width: 20rem; height: 20rem;">
                                    <div class="d-flex justify-content-center" style="height: 55%;">
                                        <img :src="dish.image_url" class="card-img-top img-fluid w-75 p-2 m-auto">
                                    </div>
                                    <div style="height: 30%;">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ dish.meal_name }}</h5>
                                            <p class="card-text">${{ dish.price }}</p>
                                        </div>
                                    </div>
                                    <div class="w-100" style="height: 15%;">
                                        <router-link to="/menu" class="btn btn-primary w-100">Menu</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'UserFavorites',
    data() {
        return {
            favorites: [],
            default_image: '../assets/images/chilaquiles.png',
        };
    },
    methods: {
        loadFavorites() {
            fetch("http://35.209.86.116:5006/meals/favorites")
                .then((response) => response.json())
                .then((data) => (this.favorites = data))
                .catch((error) => console.log(error));
        }
    },
    mounted() {
        this.loadFavorites();
    }
}
</script>
<style scoped>
    
</style>
