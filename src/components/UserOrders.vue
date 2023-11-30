<template>
    <NavBar></NavBar>
    <h1>Órdenes</h1>
    <div v-for="(order, index) in orders" :key="index">
        <div v-for="o in order" :key="o.id">
            <h2>{{o.id}}</h2>
            <div v-for="(meal, index) in o.meals" :key="index">
                <h3 v-if="meal.meal_name != null">{{meal.meal_name}}</h3>
                <p v-if="meal.price != null">{{meal.price}}</p>
                <p v-if="meal.quantity != null">{{meal.quantity}}</p>
                <router-link to="/tracking">Inicio</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';

export default {
    data() {
        return {
            orders: [],
        }
    },
    methods: {
        getOrders() {
            fetch(`http://35.209.86.116:5002/orders/${localStorage.getItem('user')}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.orders = data;
                })
        }
    },
    mounted() {
        this.getOrders();
        console.log(this.orders);
    },
    components: { NavBar }
}
</script>
<style lang="">
    
</style>