import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Contato from './views/Contato'
import Cursos from './views/Cursos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/contato",
      name: "contato",
      component: Contato,
    },
    {
      path: "/cursos",
      name: "cursos",
      component: Cursos,
    },
  ]
})