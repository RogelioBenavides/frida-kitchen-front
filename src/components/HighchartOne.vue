<template>
    <section class="container">
        <div id="chart-container1" style="height: 400px;"></div>
    </section>
</template>

<script>
    import Highcharts from 'highcharts';
    export default {
        mounted(){
            fetch('http://35.209.34.53:5000/graph/1')
                .then(response => response.json())
                .then(data => {

                    const truckIds = data.map(item => item.truck_id);
                    const averageDistances = data.map(item => item.average_distance);

                    Highcharts.chart('chart-container1', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Average Distance Traveled by Truck'
                        },
                        xAxis: {
                            categories: truckIds,
                            title: {
                                text: 'Truck ID'
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'Average Distance'
                            }
                        },
                        series: [{
                            name: 'Average Distance',
                            data: averageDistances
                        }]
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
            }
    }
</script>

<style scoped>

</style>