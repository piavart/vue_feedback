import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/auth/Register'
import Login from '../views/auth/Login'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            // auth: true,
            auth: {
                // roles:'client'
                roles:['client', 'manager']
            },
            layout: 'main'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false,
            layout: 'empty'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false,
            layout: 'empty'
        }
    }

]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes
})

export default router
