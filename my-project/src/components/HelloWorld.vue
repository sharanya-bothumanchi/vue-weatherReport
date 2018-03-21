<template>
<div id="app">
<h2>Add New City</h2>
  <form>
    <div class="form-group">
      <label for="City Data">Add New City</label>
        <input type="text" v-model="input" class="form-control" id="cityData" placeholder="City Name" />
    </div>
    <button type="button" v-on:click="addCity()" class="btn btn-default">Add</button>
  </form>
  <h2>List of Cities</h2>
  <div v-for="(city, index) in cities" @click="showWeather(city.name)">
  {{ city.name }}
  </div>



</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: ""
        }
    },

    computed: {
      cities() {
        return this.$store.state.cities;
      },
    },
    methods: {
      addCity() {
        this.$store.dispatch('ADD_CITY', { name: this.input });
        this.city = '';
      },
      showWeather(cityName) {
        this.$router.push({
          name: 'CityWeather',
          params: { cityName },
        });
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
