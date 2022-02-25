<template>
  <div>
    <JSearchHeader />
    <JSearch />
  </div>
</template>

<script>
import JSearchHeader from './components/JSearchHeader/index.vue';
import JSearch from './components/JSearch/index.vue';

export default {
  components: {
    JSearchHeader, JSearch
  }
}
</script>
