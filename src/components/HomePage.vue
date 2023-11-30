<template>
    <div>
        <NavBar @linkActivated="handleLinkActivation" :isHomeActive="isHomeActive" :isMenuActive="isMenuActive" :isOrderActive="isOrderActive"/>
        <HomeCarousel />
        <UserFavorites />
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import HomeCarousel from './HomeCarousel.vue';
import UserFavorites from './UserFavorites.vue';

export default {
    name: 'HomePage',
    components: {
        NavBar,
        HomeCarousel,
        UserFavorites,
    },
    mounted() {
        if(localStorage.getItem('token')){
            console.log(localStorage.getItem('token'));
        } else {
            this.$router.push('/login')
        }
    },
}
</script>
<style scoped>
body {
    background-color: #E6E6E6;
}
</style>