<template>
	<router-view @addTo-cart="addToCart" :shoppingCart="shoppingCart" @deleteElementFromCart="deleteElementFromCart"></router-view>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				shoppingCart: new Map(),
			}
		},
		methods: {
			addToCart(mealId) {
				if(this.shoppingCart.has(mealId)) {
					this.shoppingCart.set(mealId, this.shoppingCart.get(mealId) + 1)
				} else {
					this.shoppingCart.set(mealId, 1)
				}
				console.log(this.shoppingCart)
			},
			deleteElementFromCart(mealId) {
				if(this.shoppingCart.has(mealId)) {
					this.shoppingCart.delete(mealId)
				}
			},
		}
	}
</script>

<style>
	body {
		font-family: 'Roboto', sans-serif;
	}
</style>
