import Vue from 'vue';
import VueRouter from 'vue-router';

import Aula from '@/components/Aula';

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
  {
    path: '/curso/:cursoID',
    name: 'Curso',
    props: true,
    component: () => import(/* webpackChunkName: "Curso" */ '@/views/Curso'),

    children: [
      {
        path: ':aulaID',
        name: 'Aula',
        props: true,
        component: Aula,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
