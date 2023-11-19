import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },

    {
        path: "/register",
        name: "register",
        component: () => import ('../views/RegisterView.vue'),
    },

    {
        path: "/login",
        name: "login",
        component: () => import ("../views/Login.vue"),
    },

    {
        path: "/user",
        name: "user",
        component: () => import ("../views/User.vue"),
    },

    {
        path: "/cart",
        name: "cart",
        component: () => import ("../views/Cart.vue"),
    },

    {
        path: "/sneaker",
        name: "sneaker",
        component: () => import ("../views/SneakerView.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;