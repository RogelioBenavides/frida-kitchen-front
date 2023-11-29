<template>
    <NavBar />
    <section class="py-5 container">
        <div class="d-flex flex-column justify-content-center align-items-center text-center py-5">
            <h1 class="">Menú</h1>
            <button class="btn btn-outline-secondary" @click="deleteShoppingCart">Delete Shopping Cart</button>
        </div>
        <div v-for="meal in meals" :key="meal.id">
            <div class="mb-5 d-flex justify-content-center align-items-center">
                <div class="row w-75 border border-dark border-1 rounded d-flex justify-content-center align-items-center py-4 px-5"
                    style="height: 30vh;">
                    <div class="col d-flex justify-content-center align-items-center">
                        <img style="width: 20rem;" src="../assets/images/enchiladas.png">
                    </div>
                    <div class="col text-center">
                        <h1 class="m-0">{{ meal.meal_name }}</h1>
                        <p class="m-0 mb-1">{{ meal.description }}</p>
                        <p class="m-0 mb-3">${{ meal.price }}</p>
                        <button class="btn btn-primary" @click="addToCart(meal.id)">Agregar</button>
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
            fetch("http://35.209.86.116:5000/meals/json")
                .then((response) => response.json())
                .then((data) => (this.meals = data))
                .then(() => console.log(this.meals))
                .catch((error) => console.log(error));
        },
        addToCart(mealId) {
            this.$emit('addToCart', mealId)
        },
        deleteShoppingCart() {
            this.$emit('deleteShoppingCart')
        }
    },
    mounted() {
        this.loadFavorites();
    },
}

</script>

<style scoped></style>