<template>
    <div>
        <NavBar></NavBar>
        <HomeCarousel></HomeCarousel>
        <UserFavorites></UserFavorites>
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
    }
}
</script>
<style scoped>
body {
    background-color: #E6E6E6;
}
</style>