<template>
  <div>
    <router-view/>
    <j-footer/>
  </div>
</template>

<script setup lang="ts">
import JFooter from './../components/JFooter/index.vue';

const layout = {
  components: {JFooter},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
