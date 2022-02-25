<template>
  <div>
    <JHeader />
    <JNav @getContainerList="getData" />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import JHeader from '@/views/Home/components/JHeader/index.vue';
import JNav from '@/views/Home/components/JNav/index.vue';

const layout = {
  components: {JHeader, JNav},
  methods: {
    getData(list: any[]) {
      console.log(list)
    }
  }
}
</script>

<style>
.container {
  position: relative;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 960px;
}
</style>
