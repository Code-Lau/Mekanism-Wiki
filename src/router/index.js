import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
    ]
})