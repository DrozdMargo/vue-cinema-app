<template>
    <div id="app">
        <h1>Our amazing cinema</h1>
        <Hall></Hall>
    </div>
</template>

<script>
  import Hall from './components/Hall.vue'

  export default {
    name: 'app',
    components: {
      Hall
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
