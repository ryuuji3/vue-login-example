import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import Dashboard from './views/dashboard.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (!router.app.$store.getters.loggedIn) {
          next('/login');
        }
        next();
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

export default router;
