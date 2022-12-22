import { createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/home.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', name: 'Home', component: Home}
    ],
})