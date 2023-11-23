<template>
    <div>
        <h1 class="title-favorites">Favoritos del Restaurante</h1>
    </div>
    <div id="carouselExample" class="carousel slide carousel-favorites">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row">
                        <div class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/chilaquiles.png" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Chilaquiles</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/enchiladas.png" class="card-img-top" alt="...">
                                </div>
                                    <div class="card-body">
                                    <h5 class="card-title">Chilaquiles</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/chilaquiles.png" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Chilaquiles</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <div class="row">
                        <div class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/enchiladas.png" class="card-img-top" alt="...">
                                </div>
                                    <div class="card-body">
                                    <h5 class="card-title">Chilaquiles</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/chilaquiles.png" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Chilaquiles</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 center-favorites">
                            <div class="card" style="width: 18rem;">
                                <div class="card-img-top-favorites">
                                    <img src="../assets/images/enchiladas.png" class="card-img-top" alt="...">
                                </div>
                                    <div class="card-body">
                                    <h5 class="card-title">Chilaquiles</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
export default {
    name: 'UserFavorites',
}
</script>
<style>
    .title-favorites {
        margin-top: 50px;
        text-align: center;
    }
    .carousel-favorites {
        margin: 25px;
    }
    .card-img-top-favorites {
        height: 200px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center-favorites{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>