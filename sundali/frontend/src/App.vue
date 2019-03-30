<template>
  <div id="app">
    <!-- <the-menu-app/> -->
    <router-view/>
  </div>
</template>

<script>
import TheMenuApp from './components/TheMenuApp.vue';

export default {
  name: 'App',
  components: {
    TheMenuApp,
  },
  data: () => ({
    color: 'teal',
  }),
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
