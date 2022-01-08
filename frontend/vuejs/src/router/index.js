import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
// import Commits from '@/views/Commits';
// import About from '@/views/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // component: About,
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
  },
  {
    path: '/commits',
    name: 'Commits',
    // component: Commits,
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Commits'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
