<template>
    <NavBar />
    <section class="py-5 container">
        <div class="d-flex flex-column justify-content-center align-items-center text-center pb-2">
            <h1>Menu</h1>
        </div>
        <div class="row">
            <div class="col mb-5" v-for="meal in meals" :key="meal.id">
                <div class="card border-0 shadow h-100" style="width: 25rem;">
                    <div class="d-flex justify-content-center" style="height: 40%;">
                        <img class="card-img-top img-fluid w-75 p-2 m-auto" :src="meal.image_url">
                    </div>
                    <div class="text-center pt-2" style="height: 60%;">
                        <div class="card-body">
                            <h3 class="card-title">{{ meal.meal_name }}</h3>
                            <p class="card-text">{{ meal.description }}</p>
                            <p class="card-text">${{ meal.price }}</p>   
                        </div>
                    </div>
                    <div class="w-100" style="height: 10%;">
                        <button class="btn btn-primary w-100" @click="addToCart(meal.id)">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            meals: [],
            default_image: '../assets/images/chilaquiles.png',
        }
    },
    computed: {
        shoppingCart() {
            return this.$store.state.shoppingCart
        }
    },
    methods: {
        loadFavorites() {
            fetch("http://35.209.86.116:5006/meals/json")
                .then((response) => response.json())
                .then((data) => (this.meals = data))
                .then(() => console.log(this.meals))
                .catch((error) => console.log(error));
        },
        addToCart(mealId) {
            this.$emit('addToCart', mealId)
        },
    },
    mounted() {
        this.loadFavorites();
    },
}

</script>

<style scoped></style>