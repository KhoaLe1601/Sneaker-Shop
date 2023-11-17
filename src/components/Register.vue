<template>
    <div>
        <h2>Register</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required/>

            <label for="password">Password:</label>
            <input type="text" id="password" v-model="password" required/>

            <button type="submit">Đăng Kí</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        registerUser() {
            console.log('Đăng kí thành công!');
        }
    }
}
</script>

<style scoped>
</style>