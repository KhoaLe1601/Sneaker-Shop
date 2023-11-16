<script>
import Header from './components/App.vue';

  export default {
    components: {
      App,
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>