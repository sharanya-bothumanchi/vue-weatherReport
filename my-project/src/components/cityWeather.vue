<template>
<div>
      <h3>{{cityDetails.name}} weather report</h3>
      <li v-for="report in reports">
   {{ report.dt_txt | dateFormat }} - {{report.main.temp}} - {{report.type}}
 </li>
 </div>

</template>

<script>
  const axios = require('axios');
  export default {
    name: 'CityWeather',
    data: () => ({
      size: 'sm',
      reports: [],
      cityDetails: {},
    }),
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        const city = this.$route.params.cityName;
        const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',IN&units=metric&appId=0588189ab51e44f65305932d6755e701')
        .then((response) => {
          if (response) {
            for (let i = 0; i < response.data.list.length; i += 8) {
            if (response.data.list[i].weather[0].main === 'Clouds') {
                response.data.list[i].type = 'Cloudiness';
              } else if (response.data.list[i].weather[0].main === 'Clear') {
                response.data.list[i].type = 'Sunny';
              } else if (response.data.list[i].weather[0].main === 'Rain') {
                response.data.list[i].type = 'Rainy';
              } else if (response.data.list[i].weather[0].main === 'Snow') {
                response.data.list[i].type = 'Snow';
              }
              this.reports.push(response.data.list[i]);
            }
            this.cityDetails = response.data.city;
          }
        }).catch((error) => {
          this.reports = [];
          this.cityDetails.name = cityName;
        });
      },

    },
  };
</script>
<style>
.toolbar__title{
  color:#fff !important;
  font-weight:bold;
}
</style>
