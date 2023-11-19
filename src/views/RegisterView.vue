<template>
    <div id="register">
        <div class="container">
            <div class="card card-body">
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password-confirm" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="password-confirm">
                    </div>
                    <button type="submit" class="btn btn-success">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#register .card {
    max-width: 400px;
    margin: auto;
}
</style>

<script>
// import { def } from '@vue/shared';
// import SneakerService from '../services/sneaker.service';

export default {
    props: {
        username: {type: String, required: true},
        password: {type: String, required: true},
        password_confirm: {type: String, required: true},
    },
    
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