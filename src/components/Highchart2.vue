<template>
    <section class="container">
        <div id="chart-container2" style="height: 400px;"></div>
    </section>
</template>

<script>
    export default {
        mounted(){
            fetch('http://35.209.34.53:5000/graph/3')
                .then(response => response.json())
                .then(data => {

                    var truckIds = data.map(item => item.truck_id);
                    var totalTrips = data.map(item => item.total_trips);

                    Highcharts.chart('chart-container2', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Total Trips by Truck'
                        },
                        xAxis: {
                            categories: truckIds,
                            title: {
                                text: 'Truck ID'
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Total Trips'
                            }
                        },
                        series: [{
                            name: 'Total Trips',
                            data: totalTrips
                        }]
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
</script>

<style scoped>

</style>