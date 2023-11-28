<template>
    <NavBar></NavBar>
    <button @click="showCart">Hello There</button>
    <div v-for="item in cart" :key="item.key">
        <p>{{ item.meal_name }} -> {{ item.price }} -> {{ item.quantity }}</p>
        <button @click="deleteElementFromCart(item.key)">Delete</button>
    </div>
    <h1>Total {{ total }}</h1>
</template>
<script>
import NavBar from './NavBar.vue';

export default {
    props: {
        shoppingCart: {
            type: Map,
            required: true
        }
    },
    data() {
        return {
            cart: [],
            total: 0
        }
    },
    methods: {
        showCart() {
            console.log(this.shoppingCart)
        },
        deleteElementFromCart(mealId) {
            this.$emit('deleteElementFromCart', mealId)
        },
        createCart() {
            console.log("General Kenobi")
            for (let [key, value] of this.shoppingCart) {
                fetch(`http://127.0.0.1:5000/meal/${key}`)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        this.cart.push({meal_name: data[0].meal_name, price: data[0].price, quantity: value} )
                        this.total += data[0].price * value
                    })
                    .catch((error) => console.log(error));
            }

        }
    },
    mounted() {
        this.createCart()
    },

    components: { NavBar },
    
}
</script>
<style>
    
</style>