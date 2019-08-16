import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Cursos from './views/Cursos';
import Acoes from './views/Acoes';
import AcoesDados from './views/AcoesDados';

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
    },
    {
      path: "/acoes",
      component: Acoes,
      children: [{
        path: ":simbolo",
        component: AcoesDados,
        props: true,
      }]
    },
    {
      path: "/cursos/:curso",
      component: Cursos,
      props: true
    }
  ]
});