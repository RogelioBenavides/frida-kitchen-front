<template>
    <NavBar></NavBar>
    <div class="row">
        <div class="col-6 ps-5">
            <h1 class="text-center py-5">Camiones</h1>
            <HighchartOne></HighchartOne>
            <HighchartTwo></HighchartTwo>
        </div>
        <div class="col-6 pe-5" style="height: 90vh; overflow-y: scroll;">
            <h1 class="text-center py-5">Órdenes</h1>
            <div v-for="(order, index) in orders" :key="index" class="d-flex flex-column-reverse">
                <div class="border rounded shadow p-5 d-flex flex-column mb-5" style="background-color: white;" v-for="o in order" :key="o.id">
                    <h6>Número de Orden: {{ o.id }}</h6>
                    <div class="row row-cols-2">
                        <div class="col py-4 px-3" v-for="(meal, index) in o.meals" :key="index">
                            <h3 v-if="meal.meal_name != null">{{ meal.meal_name }}</h3>
                            <div class="d-flex">
                                <p v-if="meal.price != null && meal.quantity != null">{{ meal.price }} x {{ meal.quantity }}
                                    =
                                    {{ meal.price * meal.quantity }}</p>
                            </div>
                        </div>
                        <div class="text-end w-100">
                            <router-link to="/tracking">Rastrear</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HighchartOne from './HighchartOne.vue';
import HighchartTwo from './HighchartTwo.vue';
import NavBar from './NavBar.vue';

export default {
    data() {
        return {
            orders: [],
        }
    },
    methods: {
        getOrders() {
            fetch("http://35.209.86.116:5002/orders")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.orders = data;
                })
        }
    },
    mounted() {
        if(localStorage.getItem('role') != "manager"){
            this.$router.push('/');
        }
        this.getOrders();
        console.log(this.orders);
    },
    components: {
        HighchartOne, HighchartTwo, NavBar
    },
}
</script>
<style></style>