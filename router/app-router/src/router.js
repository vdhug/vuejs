import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Cursos from './views/Cursos';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/cursos",
      component: Cursos
    }
  ]
});