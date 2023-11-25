<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <img :src="post.image_url || default_image">
            <h1>{{ post.meal_name }}</h1>
            <p>{{ post.description }}</p>
            <p>{{ post.price }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ApiExample",
        data() {
            return {
                posts: [],
                default_image: 'https://i.pinimg.com/originals/fd/80/ec/fd80ecec48eba2a9adb76e4133905879.png',
            };
        },
    
        created() {
            fetch("http://127.0.0.1:5000/meals/json")
                .then((response) => response.json())
                .then((data) => (this.posts = data));
        }
    }
</script>

<style>

</style>