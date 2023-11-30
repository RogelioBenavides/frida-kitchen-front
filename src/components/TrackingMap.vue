<template>
    <NavBar></NavBar>
    <section class="container">
        <h1 class="text-center py-5">Rastrea tu pedido</h1>
        <div class="d-flex justify-content-center align-items-center">
            <GoogleMap
                api-key="AIzaSyCSHoeK0oSk9hBJlQTCp6yXSb-RZZAh_Pc"
                style="width: 80%; height: 45rem"
                :center="center"
                :zoom="15">
                <Marker v-for="(coord, index) in coords" :key="index" :options="getMarkerOptions(coord)" />
            </GoogleMap>    
        </div>
    </section>
</template>

<script>
    import { defineComponent, ref, onMounted } from "vue";
    import { GoogleMap, Marker } from "vue3-google-map";
import NavBar from "./NavBar.vue";

    export default defineComponent({
        components: { GoogleMap, Marker, NavBar },
        setup() {
            const center = ref({ lat: 25.66016088608063, lng: -100.4218352267112 });
            const coords = ref([]);
            let lastIndex = -1;
            let data; // Declarar data aquí

            const getMarkerOptions = (position) => {
                return { position };
            };

            const addMarkerWithDelay = async (index) => {
                // Agrega el marcador actual
                coords.value.push(data.coords[index]);
                center.value = data.coords[index];

                // Elimina el marcador anterior
                if (lastIndex >= 0) {
                    coords.value.splice(lastIndex, 1);
                }

                lastIndex = coords.value.length - 1;

                // Pausa para dar tiempo a que la animación del marcador termine
                await new Promise((resolve) => setTimeout(resolve, 5000));
            };

            onMounted(async () => {
                try {
                    const response = await fetch('http://35.209.86.116:5004/coords');
                    data = await response.json(); // Asignar data aquí

                    // Agregar marcadores uno por uno con intervalos de tiempo
                    for (let i = 0; i < data.coords.length; i++) {
                        await addMarkerWithDelay(i);
                    }
                } catch (error) {
                    console.error('Error al obtener datos:', error);
                }
            });

            return { center, coords, getMarkerOptions };
        },
    });
</script>
  
<style scoped>

</style>
  