import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home'),
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import(/* webpackChunkName: "Contato" */ '@/views/Contato'),
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: () => import(/* webpackChunkName: "Cursos" */ '@/views/Cursos'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
