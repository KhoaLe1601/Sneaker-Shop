import { createWebHistory, createRouter } from "vue-router";
import Register from "../views/RegisterView.vue"

const routes = [
    {
        path: "/",
        name: "sneakershop",
        component: Register,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;