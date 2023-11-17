<script>
import Register from './components/Register.vue';

  export default {
    components: {
      Register,
  },
}
</script>

<template>
  <div id="app">
    <App></App>
    <div class="container mt-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>