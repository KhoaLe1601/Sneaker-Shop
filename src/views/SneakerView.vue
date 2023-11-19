<script>
import Search from '../components/Search.vue';
import { RouterView } from 'vue-router';
export default {
    components: {
        Search,
    }
}
</script>

<template>
    <Search></Search>
    <div class="container mt-3">
        <RouterView></RouterView>
    </div>
</template>