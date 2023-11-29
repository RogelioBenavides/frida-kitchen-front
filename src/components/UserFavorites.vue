<template>
    <div>
        <h1 class="text-center py-5">Favoritos del Restaurante</h1>
    </div>
    <div id="carouselExample" class="carousel slide carousel-favorites">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row">
                        <div v-for="dish in favorites.slice(0, 3)" :key="dish.id"  class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/chilaquiles.png" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{{ dish.meal_name }}</h5>
                                    <p class="card-text">{{ dish.description }}</p>
                                    <p class="card-text">${{ dish.price }}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/chilaquiles.png" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{{ dish.meal_name }}</h5>
                                    <p class="card-text">{{ dish.description }}</p>
                                    <p class="card-text">${{ dish.price }}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div v-for="dish in favorites.slice(5, 8)" :key="dish.id"  class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/chilaquiles.png" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{{ dish.meal_name }}</h5>
                                    <p class="card-text">{{ dish.description }}</p>
                                    <p class="card-text">${{ dish.price }}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
