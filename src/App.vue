<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Hall :seats-data="seatsData"></Hall>
    </div>
</template>

<script>
  import Hall from './components/Hall.vue'
  import SeatsData from './data/seats.json'

  export default {
    name: 'app',
    components: {
      Hall
    },
    create: {},
    data() {
      return {
        //simulate request to api to get data
        seatsData: SeatsData,
      }
    },
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
