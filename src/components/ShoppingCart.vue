<template>
    <NavBar />
    <section class="container py-5">
        <div class="d-flex flex-column justify-content-center align-items-center text-center py-5">
            <h1 class="text-center">Carrito</h1>
        </div>
        <center>
            <div class="d-flex justify-content-evenly align-items-center p-3 shadow rounded mb-3 w-75"
                v-for="item in cart" :key="item.id" style="background-color: white;">
                <img class="py-3 my-auto" :src="item.image_url" style="width: 10rem;">
                <h3 class="my-auto text-center" style="width: 30%;">{{ item.meal_name }}</h3>
                <p class="my-auto text-center" style="width: 15%;">{{ item.quantity }} x {{ item.price }} = {{ item.quantity
                    * item.price }}</p>
                <button class="btn" @click="deleteElementFromCart(item.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                        <path fill="#fc4646"
                            d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8zm3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293z" />
                    </svg>
                </button>
            </div>
        </center>
        <h1 class="text-end py-3" style="margin-right: 12rem; margin-top: 3rem;">Total = {{ total }}</h1>
        
        <div class="py-5 d-flex justify-content-center align-items-center">
            <div class="w-50" ref="paypal"></div>
        </div>
    </section>
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
            total: 0,
            loaded: false,
            paidFor: false,
            product: {
                description: "Comida sabrosa de Frida Kitchen",
                img: "./assets/images/chilaquiles.jpg0"
            },
            payment: {},
        }
    },
    methods: {
        saveOrder(){
            console.log(this.cart);
            console.log(this.payment);
            console.log(localStorage.getItem('user'));
            fetch('http://35.209.86.116:5002/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_user: localStorage.getItem('user'),
                    order: this.cart,
                    payment: this.payment,
                })
            }).then(() => {
                this.deleteShoppingCart();
                this.$router.push('/orders');
            })
        },
        showCart() {
            console.log(this.shoppingCart)
        },
        deleteElementFromCart(mealId) {
            this.$emit('deleteElementFromCart', mealId)
            this.cart = [];
            this.total = 0;
            this.createCart();
        },
        createCart() {
            for (let [key, value] of this.shoppingCart) {
                fetch(`http://35.209.86.116:5006/meals/${key}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.cart.push({
                            id: key,
                            meal_name: data[0].meal_name,
                            price: data[0].price,
                            quantity: value,
                            image_url: data[0].image_url,
                        });

                        this.total += data[0].price * value
                    })
                    .catch((error) => console.log(error));
            }
        },
        deleteShoppingCart() {
            this.$emit('deleteShoppingCart')
        },
        setLoaded: function () {
            this.loaded = true;
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: this.product.description,
                                    amount: {
                                        currency_code: "MXN",
                                        value: this.total,
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();

                        this.data;

                        this.paidFor = true;

                        this.payment = order;

                        this.saveOrder();

                    },
                    onError: err => {
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        }
    },
    mounted() {
        this.createCart()
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AZTIYIY4hbg2SoR5hv8M4URKTAnfNYMkWwIl4Y8jKuc9U8kXozAcvgJhMSvU-wtx7ZmMVuCWFidRxid3&currency=MXN";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },

    components: { NavBar },

}
</script>
<style></style>