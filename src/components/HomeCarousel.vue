<template>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-6 description-col">
                        <h1 class="white-header">Chilaquiles</h1>
                        <p class="white-text">Chilaquiles con salsa verde o roja, acompañados de frijoles y huevo al gusto.</p>
                    </div>
                    <div class="col-6 image-col">
                        <img src="../assets/images/chilaquiles.png" alt="Chilaquiles">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <div class="col-6 description-col">
                        <h1 class="white-header">Chilaquiles</h1>
                        <p class="white-text">Chilaquiles con salsa verde o roja, acompañados de frijoles y huevo al gusto.</p>
                    </div>
                    <div class="col-6 image-col">
                        <img src="../assets/images/enchiladas.png" alt="Enchiladas">
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
export default {
    name: 'HomeCarousel',
    components: {
    }
}
</script>
<style>
.carousel {
    height: 50vh;
    background-color: black;
}

.white-header {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
}
.white-text {
    color: white;
    font-family: 'Roboto', sans-serif;
}

.carousel-item {
    height: 100%;
}

.carousel-item img {
    max-height: 500px;
    max-width: 60%;
    margin: 10% 20%;
}

.col-6 {
    height: 100%;
}

.image-col {
    display: flex;
    justify-content: center;
    align-items: center;
}

.description-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.row {
    height: 100%;
}

.carousel-inner {
    height: 100%;
}
</style>