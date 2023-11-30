<template>
    <NavBar></NavBar>
    <section class="container">
        <h1 class="text-center py-5">Órdenes</h1>
        <div v-for="(order, index) in orders" :key="index">
            <div class="border rounded shadow p-5 d-flex flex-column mb-5" v-for="o in order" :key="o.id">
                <h6>Número de Orden: {{o.id}}</h6>
                <div class="row row-cols-2">
                    <div class="col py-4 px-3" v-for="(meal, index) in o.meals" :key="index">
                        <h3 v-if="meal.meal_name != null">{{meal.meal_name}}</h3>
                        <div class="d-flex">
                            <p v-if="meal.price != null && meal.quantity != null">{{meal.price}} x {{meal.quantity}} = {{meal.price * meal.quantity}}</p>
                        </div>
                    </div>
                    <router-link to="/tracking">Inicio</router-link>
                </div>
            </div>
        </div>
    </section>
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