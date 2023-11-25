<template>
    <section style="background-color: #252525;">
        <div id="carouselSlide" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" style="height: 50vh;">
                <div class="carousel-item active" style="height: 50vh;">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="p-5">
                            <h1 class="text-white">Chilaquiles</h1>
                            <p class="text-white">Chilaquiles con salsa verde o roja, acompañados de frijoles y huevo al gusto.</p>
                        </div>
                        <div>
                            <img class="img-fluid" style="width: 32rem;" src="../assets/images/chilaquiles.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="carousel-item" style="height: 50vh;">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="p-5">
                            <h1 class="text-white">Chilaquiles</h1>
                            <p class="text-white">Chilaquiles con salsa verde o roja, acompañados de frijoles y huevo al gusto.</p>
                        </div>
                        <div>
                            <img class="img-fluid" style="width: 32rem;" src="../assets/images/chilaquiles.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselSlide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'HomeCarousel',
}
</script>
<style>

</style>