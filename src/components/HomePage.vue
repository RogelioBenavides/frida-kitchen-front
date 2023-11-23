<template>
    <div>
        <NavBar></NavBar>
        <HomeCarousel></HomeCarousel>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import HomeCarousel from './HomeCarousel.vue';

export default {
    name: 'HomePage',
    components: {
        NavBar,
        HomeCarousel,
    }
}
</script>
<style>
body {
    background-color: #c7c7c7;
}
</style>