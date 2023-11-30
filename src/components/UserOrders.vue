<template>
    <NavBar></NavBar>
    <h1>Órdenes</h1>
    <div v-for="(order, index) in orders" :key="index">
        <h2>{{order.id}}</h2>
        <div v-for="(meal, index) in order.meals" :key="index">
            <h3>{{meal.meal_name}}</h3>
            <p>{{meal.price}}</p>
            <p>{{meal.quantity}}</p>
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
    },
    components: { NavBar }
}
</script>
<style lang="">
    
</style>