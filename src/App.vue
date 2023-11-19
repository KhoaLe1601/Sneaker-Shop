<script>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
  export default {
    components: {
    Header,
  },
}
</script>

<template>
  <div id="app">
    <Header></Header>
    <div class="container mt-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>