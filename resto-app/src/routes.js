import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/Add.vue'
import UpdateRestaurant from './components/Update.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Add',
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name: 'Update',
        component: UpdateRestaurant,
        path: '/update-restaurant/:id'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;