<template>
  <router-view></router-view>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				shoppingCart: [],
			}
		},
	}
</script>

<style>
	body {
		font-family: 'Roboto', sans-serif;
	}
</style>
