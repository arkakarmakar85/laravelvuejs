import VueRouter from 'vue-router';
import Profile from './components/Profile.vue';
import Example from './components/Example.vue';

let routes = [
    {
        path: '/',
        component: Example,
        name: 'example'
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile'
    }
];


export default new VueRouter({
    routes
});