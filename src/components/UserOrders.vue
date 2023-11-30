<template>
    <NavBar></NavBar>
    <h1>Órdenes</h1>
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
            fetch('http://35.209.86.116:5002/orders')
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